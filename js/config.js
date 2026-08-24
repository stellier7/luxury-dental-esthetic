/**
 * =============================================================================
 * CLIENT CONFIG — Luxury Dental Esthetic
 * =============================================================================
 * Edit THIS FILE ONLY when customizing content for this practice.
 * Empty strings / empty arrays hide the related UI automatically.
 *
 * IMAGE ASSETS — drop files under /assets/images/ (see TODO comments below).
 * =============================================================================
 */

const config = {
  // ---------------------------------------------------------------------------
  // SITE DEFAULTS
  // ---------------------------------------------------------------------------
  defaultLanguage: "es",

  // ---------------------------------------------------------------------------
  // SEO / METADATA
  // ---------------------------------------------------------------------------
  metadata: {
    es: "Luxury Dental Esthetic, centro odontológico en Torre Agalta, Tegucigalpa, con especialistas en endodoncia, ortodoncia y odontopediatría. Agenda tu cita.",
    en: "Luxury Dental Esthetic, dental center in Torre Agalta, Tegucigalpa, with specialists in endodontics, orthodontics, and pediatric dentistry. Book your appointment.",
  },

  // ---------------------------------------------------------------------------
  // PRACTICE INFO
  // ---------------------------------------------------------------------------
  practice: {
    name: "Luxury Dental Esthetic",

    tagline: {
      en: "We are the best dental center, experts in every dental specialty.",
      es: "Somos el mejor centro odontológico, expertos en todas las especialidades dentales",
    },

    phone: "+504 9358-2585",
    phoneTel: "50493582585",

    address: {
      street: "Torre Agalta, Bulevar Morazán",
      city: "Tegucigalpa",
      state: "Honduras",
      zip: "",
      // Maps link not provided — auto-built from address for embed + directions
      mapsQuery: "Torre Agalta, Bulevar Morazán, Tegucigalpa, Honduras",
    },

    hours: {
      mon: "8:30 AM – 6:00 PM",
      tue: "8:30 AM – 6:00 PM",
      wed: "8:30 AM – 6:00 PM",
      thu: "8:30 AM – 6:00 PM",
      fri: "8:30 AM – 6:00 PM",
      sat: "8:30 AM – 2:00 PM",
      sun: "", // Dom Cerrado — empty hides the day
    },

    email: "luxdental22@gmail.com",

    // OPTIONAL — leave blank to hide trust-bar stats (entire bar hidden when all empty)
    yearsInPractice: "",
    patientRating: "",
  },

  // ---------------------------------------------------------------------------
  // BRANDING
  // ---------------------------------------------------------------------------
  branding: {
    primaryColor: "#E8C547",
    accentColor: "#FFE08A",
    primaryDark: "#C9A227",
    accentDark: "#A68518",
    softBg: "#000000",
    logoUrl: "assets/images/logo.jpeg",
    heroImageUrl: "assets/images/hero.jpeg",
  },

  // ---------------------------------------------------------------------------
  // UI COPY (labels, nav, section headers, buttons) — per language
  // ---------------------------------------------------------------------------
  ui: {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        dentists: "Our Team",
        gallery: "Gallery",
        testimonials: "Reviews",
        financing: "Financing",
        location: "Location",
        book: "Book Appointment",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      hero: {
        badge: "New Patients Welcome",
        cta: "Book Appointment",
      },
      trust: {
        years: "Years in practice",
        rating: "Patient rating",
        licensed: "Licensed & certified",
      },
      sections: {
        services: "Our Services",
        servicesLead: "General dentistry, aligners, pediatric care, and cosmetic treatments for every smile.",
        dentists: "Meet Our Team",
        dentistsLead: "Specialists dedicated to comfort, confidence, and lasting results.",
        gallery: "Smile Gallery",
        galleryLead: "Real results from patients like you.",
        testimonials: "What Patients Say",
        testimonialsLead: "Trusted by families in our community.",
        financing: "Financing",
        financingLead: "We work with BAC and Ficohsa to make care more accessible.",
        location: "Visit Us",
        locationLead: "Torre Agalta, Bulevar Morazán, Tegucigalpa — we look forward to seeing you.",
      },
      services: {
        expand: "Learn more",
        collapse: "Show less",
      },
      location: {
        hours: "Hours",
        call: "Call Us",
        directions: "Get Directions",
        mapInteract: "Tap to interact with the map",
        closed: "Closed",
        days: {
          mon: "Monday",
          tue: "Tuesday",
          wed: "Wednesday",
          thu: "Thursday",
          fri: "Friday",
          sat: "Saturday",
          sun: "Sunday",
        },
      },
      stickyBar: {
        cta: "Book Appointment",
      },
      footer: {
        contact: "Contact",
        hours: "Hours",
        follow: "Follow Us",
        rights: "All rights reserved.",
        developedBy: "Developed by",
      },
      langToggle: {
        label: "Language",
        en: "EN",
        es: "ES",
      },
      gallery: {
        viewImage: "View image",
        close: "Close preview",
        previous: "Previous image",
        next: "Next image",
        preview: "Image preview",
      },
    },
    es: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        dentists: "Nuestro Equipo",
        gallery: "Galería",
        testimonials: "Opiniones",
        financing: "Financiamiento",
        location: "Ubicación",
        book: "Agendar Cita",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
      },
      hero: {
        badge: "Nuevos Pacientes Bienvenidos",
        cta: "Agendar Cita",
      },
      trust: {
        years: "Años de experiencia",
        rating: "Calificación de pacientes",
        licensed: "Licenciados y certificados",
      },
      sections: {
        services: "Nuestros Servicios",
        servicesLead: "Odontología general, alineadores, odontopediatría y tratamientos cosméticos para cada sonrisa.",
        dentists: "Conoce a Nuestro Equipo",
        dentistsLead: "Especialistas dedicados a tu comodidad, confianza y resultados duraderos.",
        gallery: "Galería de Sonrisas",
        galleryLead: "Resultados reales de pacientes como tú.",
        testimonials: "Lo Que Dicen Nuestros Pacientes",
        testimonialsLead: "La confianza de familias de nuestra comunidad.",
        financing: "Financiamiento",
        financingLead: "Trabajamos con BAC y Ficohsa para hacer tu tratamiento más accesible.",
        location: "Visítanos",
        locationLead: "Torre Agalta, Bulevar Morazán, Tegucigalpa — te esperamos con gusto.",
      },
      services: {
        expand: "Ver más",
        collapse: "Ver menos",
      },
      location: {
        hours: "Horario",
        call: "Llámanos",
        directions: "Cómo Llegar",
        mapInteract: "Toca para interactuar con el mapa",
        closed: "Cerrado",
        days: {
          mon: "Lunes",
          tue: "Martes",
          wed: "Miércoles",
          thu: "Jueves",
          fri: "Viernes",
          sat: "Sábado",
          sun: "Domingo",
        },
      },
      stickyBar: {
        cta: "Agendar Cita",
      },
      footer: {
        contact: "Contacto",
        hours: "Horario",
        follow: "Síguenos",
        rights: "Todos los derechos reservados.",
        developedBy: "Desarrollado por",
      },
      langToggle: {
        label: "Idioma",
        en: "EN",
        es: "ES",
      },
      gallery: {
        viewImage: "Ver imagen",
        close: "Cerrar vista previa",
        previous: "Imagen anterior",
        next: "Imagen siguiente",
        preview: "Vista previa de imagen",
      },
    },
  },

  // ---------------------------------------------------------------------------
  // DENTISTS
  // ---------------------------------------------------------------------------
  dentists: [
    {
      name: "Dra. Auxy Duarte",
      title: {
        en: "Endodontics Specialist",
        es: "Especialista en Endodoncia",
      },
      bio: {
        en: "Dr. Auxy Duarte is an endodontics specialist with many years of experience helping patients preserve their smile. Her passion is relieving dental pain and offering treatments that reflect the calm and confidence her patients deserve.",
        es: "Soy especialista en Endodoncia, con muchos años de trayectoria, ayudando a mis pacientes a conservar su sonrisa. Mi pasión es aliviar el dolor dental y ofrecer tratamientos que reflejen la tranquilidad y confianza a quienes me visitan.",
      },
      photoUrl: "assets/images/dentist.jpeg",
    },
  ],

  // ---------------------------------------------------------------------------
  // SERVICES
  // ---------------------------------------------------------------------------
  services: [
    {
      name: { en: "General Dentistry", es: "Odontología General" },
      description: {
        en: "Preventive exams, cleanings, fillings, and everyday care to keep your smile healthy and strong.",
        es: "Exámenes preventivos, limpiezas, resinas y cuidado diario para mantener tu sonrisa sana y fuerte.",
      },
      icon: "general",
    },
    {
      name: { en: "Clear Aligners", es: "Alineadores" },
      description: {
        en: "Discreet aligners that straighten teeth with personalized plans and comfortable check-ins along the way.",
        es: "Alineadores discretos que enderezan los dientes con planes personalizados y seguimientos cómodos.",
      },
      icon: "aligners",
    },
    {
      name: { en: "Pediatric Dentistry", es: "Odontopediatría" },
      description: {
        en: "Gentle, friendly visits that help children feel at ease while building healthy habits and confident smiles.",
        es: "Visitas amables y suaves que ayudan a los niños a sentirse tranquilos mientras crean hábitos saludables y sonrisas confiadas.",
      },
      icon: "pediatric",
    },
    {
      name: { en: "Cosmetic Dentistry", es: "Odontología Cosmética" },
      description: {
        en: "Aesthetic treatments designed to enhance the natural beauty of your smile with refined, lasting results.",
        es: "Tratamientos estéticos diseñados para realzar la belleza natural de tu sonrisa con resultados refinados y duraderos.",
      },
      icon: "cosmetic",
    },
  ],

  // ---------------------------------------------------------------------------
  // TESTIMONIALS — empty array hides the section
  // ---------------------------------------------------------------------------
  testimonials: [],

  // ---------------------------------------------------------------------------
  // FINANCING IMAGES
  // ---------------------------------------------------------------------------
  financingImages: [
    {
      src: "assets/images/financing/Bac.png",
      alt: {
        en: "BAC Credomatic financing",
        es: "Financiamiento BAC Credomatic",
      },
    },
    {
      src: "assets/images/financing/Ficohsa.png",
      alt: {
        en: "Ficohsa financing",
        es: "Financiamiento Ficohsa",
      },
    },
  ],

  gallery: [
    "assets/images/gallery/IMG_0412.jpeg",
    "assets/images/gallery/IMG_0413.jpeg",
    "assets/images/gallery/IMG_0414.jpeg",
    "assets/images/gallery/IMG_0415.jpeg",
    "assets/images/gallery/IMG_0416.jpeg",
    "assets/images/gallery/IMG_0417.jpeg",
    "assets/images/gallery/IMG_0418.jpeg",
    "assets/images/gallery/IMG_0419.jpeg",
  ],

  // ---------------------------------------------------------------------------
  // SOCIAL LINKS — leave blank to hide that icon
  // ---------------------------------------------------------------------------
  socials: {
    instagram: "https://www.instagram.com/luxurydentalesthetichn",
    facebook: "https://www.facebook.com/profile.php?id=61568309054456",
  },
};

// Expose globally for app.js (no bundler / no modules required)
window.SITE_CONFIG = config;
