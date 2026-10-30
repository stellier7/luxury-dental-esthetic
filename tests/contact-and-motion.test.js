/**
 * Contact links, floating WhatsApp button, parallax, and scroll animations.
 * Run: node tests/contact-and-motion.test.js
 */
const { chromium } = require("playwright");
const { spawn } = require("child_process");
const http = require("http");

const PORT = 8773;
const BASE = `http://127.0.0.1:${PORT}`;
const WA_PREFIX = "https://wa.me/50493582585";
const FACEBOOK = "https://www.facebook.com/dentalesthetichn";
const INSTAGRAM = "https://www.instagram.com/luxurydentalesthetichn?srtk=OTlzZXIxeXU5dGI=";

function waitForServer(url, timeoutMs = 10000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = () => {
      http
        .get(url, (res) => {
          res.resume();
          resolve();
        })
        .on("error", () => {
          if (Date.now() - start > timeoutMs) reject(new Error("Server did not start"));
          else setTimeout(tick, 100);
        });
    };
    tick();
  });
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function auditContact(page, viewport) {
  const links = await page.evaluate(() =>
    [...document.querySelectorAll("a[href]")].map((anchor) => anchor.getAttribute("href") || "")
  );

  const whatsappLinks = links.filter((href) => href.includes("wa.me"));
  assert(whatsappLinks.length > 0, `No WhatsApp links at ${viewport.width}px`);
  for (const href of whatsappLinks) {
    assert(
      href.startsWith(WA_PREFIX),
      `Expected Honduras WhatsApp ${WA_PREFIX} at ${viewport.width}px, got ${href}`
    );
    assert(
      !href.includes("wa.me/1"),
      `WhatsApp link still uses a US country code at ${viewport.width}px: ${href}`
    );
  }

  assert(
    links.includes(FACEBOOK),
    `Missing Facebook ${FACEBOOK} at ${viewport.width}px. Found: ${links.filter((href) => href.includes("facebook.com")).join(", ") || "none"}`
  );
  assert(
    links.includes(INSTAGRAM),
    `Missing Instagram ${INSTAGRAM} at ${viewport.width}px. Found: ${links.filter((href) => href.includes("instagram.com")).join(", ") || "none"}`
  );

  const iago = page.locator("[data-iago-footer]");
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await page.waitForTimeout(150);
  const iagoHref = await iago.locator("a").getAttribute("href");
  const iagoText = (await iago.innerText()).replace(/\s+/g, " ");
  assert(
    iagoHref === "https://www.iagodigital.com/",
    `iAGO footer should link to https://www.iagodigital.com/, got ${iagoHref}`
  );
  assert(iagoText.includes("iAGO Digital"), `Footer credit should read iAGO Digital, got "${iagoText}"`);
  assert(
    /Diseñado por|Designed by/.test(iagoText),
    `Footer credit should say it was designed by iAGO, got "${iagoText}"`
  );

  const covered = await page.evaluate(() => {
    const credit = document.querySelector("[data-iago-footer]");
    const button = document.querySelector("[data-whatsapp-float]");
    if (!credit || !button) return true;
    const a = credit.getBoundingClientRect();
    const b = button.getBoundingClientRect();
    const overlapX = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    const overlapY = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    return overlapX > 8 && overlapY > 8;
  });
  assert(!covered, `WhatsApp button covers the iAGO footer at ${viewport.width}px`);
}

async function auditFloat(page, viewport) {
  const button = page.locator("[data-whatsapp-float]");
  await button.waitFor({ state: "visible" });

  const metrics = await button.evaluate((el) => {
    const style = getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    const pulse = getComputedStyle(el, "::before");
    return {
      href: el.getAttribute("href") || "",
      position: style.position,
      right: rect.right,
      bottom: rect.bottom,
      width: rect.width,
      height: rect.height,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      animationName: pulse.animationName,
      animationIterationCount: pulse.animationIterationCount,
      label: el.getAttribute("aria-label") || "",
    };
  });

  assert(
    metrics.href.startsWith(WA_PREFIX),
    `Floating WhatsApp href should use ${WA_PREFIX}, got ${metrics.href}`
  );
  assert(metrics.position === "fixed", `Floating button should be fixed, got ${metrics.position}`);
  assert(
    metrics.viewportWidth - metrics.right <= 28,
    `Floating button should sit on the right at ${viewport.width}px (right gap ${metrics.viewportWidth - metrics.right})`
  );
  assert(
    metrics.viewportHeight - metrics.bottom <= 28,
    `Floating button should sit on the bottom at ${viewport.width}px (bottom gap ${metrics.viewportHeight - metrics.bottom})`
  );
  assert(metrics.width >= 44 && metrics.height >= 44, "Floating button touch target is too small");
  assert(
    metrics.animationName.includes("whatsapp-pulse"),
    `Floating button should pulsate, animation was ${metrics.animationName}`
  );
  assert(
    metrics.animationIterationCount === "infinite",
    `Pulse should loop, iteration count was ${metrics.animationIterationCount}`
  );
  assert(metrics.label.length > 0, "Floating button needs an accessible name");
}

async function auditMotion(page) {
  await page.waitForFunction(() => document.body.classList.contains("hero-loaded"));

  const heroOpacity = await page.locator(".hero__title").evaluate((el) => getComputedStyle(el).opacity);
  assert(heroOpacity === "1", `Hero title should be visible after entrance, opacity was ${heroOpacity}`);

  await page.evaluate(() => window.scrollTo(0, 420));
  await page.waitForTimeout(200);

  const heroShift = await page.evaluate(() => {
    const media = document.querySelector("[data-hero-media]");
    const transform = getComputedStyle(media).transform;
    const matrix = transform.match(/matrix\(([^)]+)\)/);
    if (!matrix) return 0;
    return Math.abs(parseFloat(matrix[1].split(",")[5]) || 0);
  });
  assert(heroShift > 20, `Hero parallax should move the photo on scroll, shift was ${heroShift}`);

  const servicesShift = await page.evaluate(() => {
    const container = document.querySelector('[data-section="services"] > .container');
    const transform = getComputedStyle(container).transform;
    if (!transform || transform === "none") return 0;
    const matrix = transform.match(/matrix\(([^)]+)\)/);
    if (!matrix) return 0;
    return Math.abs(parseFloat(matrix[1].split(",")[5]) || 0);
  });
  assert(
    servicesShift > 4,
    `Services section should parallax with scroll, shift was ${servicesShift}`
  );

  const services = page.locator('[data-section="services"]');
  await services.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  const animated = await page.evaluate(() => {
    const cards = [...document.querySelectorAll(".service-card")];
    return {
      count: cards.length,
      inView: cards.filter((card) => card.classList.contains("in-view")).length,
      typed: cards.filter((card) => card.getAttribute("data-animate")).length,
    };
  });
  assert(animated.count > 0, "Expected service cards to render");
  assert(animated.typed === animated.count, "Every service card should declare a scroll animation");
  assert(animated.inView === animated.count, `Service cards should animate into view (${animated.inView}/${animated.count})`);
}

async function auditReducedMotion(browser) {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(250);

  const state = await page.evaluate(() => {
    const title = document.querySelector(".hero__title");
    const button = document.querySelector("[data-whatsapp-float]");
    const pulse = button ? getComputedStyle(button, "::before") : null;
    return {
      opacity: title ? getComputedStyle(title).opacity : "0",
      animationName: pulse ? pulse.animationName : "",
    };
  });

  assert(state.opacity === "1", `Reduced motion should keep the hero visible, opacity was ${state.opacity}`);
  assert(
    state.animationName === "none",
    `Reduced motion should stop the WhatsApp pulse, animation was ${state.animationName}`
  );
  await context.close();
}

async function run() {
  const server = spawn("python3", ["-m", "http.server", String(PORT)], {
    cwd: process.cwd(),
    stdio: "ignore",
  });

  try {
    await waitForServer(BASE);
    const browser = await chromium.launch({ headless: true });

    for (const viewport of [
      { width: 390, height: 844 },
      { width: 1280, height: 800 },
    ]) {
      const page = await browser.newPage({ viewport });
      await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
      await page.waitForTimeout(300);
      await auditContact(page, viewport);
      await auditFloat(page, viewport);
      if (viewport.width === 1280) await auditMotion(page);
      await page.close();
    }

    await auditReducedMotion(browser);
    await browser.close();
    console.log("contact, floating WhatsApp, parallax, and animation audits passed");
  } finally {
    server.kill();
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
