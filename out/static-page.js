document.addEventListener("DOMContentLoaded", () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const normalizePath = (path) => {
    if (!path || path === "/index.html") return "/";
    return path.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  };

  const pagePath = normalizePath(window.location.pathname);
  const siteUrl = "https://dewdaleresorts.online";

  const pageMeta = {
    "/": {
      title: "Dew Dale Resorts | Best Eco Resort in Baratang Island",
      description:
        "Experience an eco-friendly stay at Dew Dale Resorts in Baratang Island. Enjoy limestone caves, serene nature walks, and exclusive luxury tourism packages in Andaman.",
      image: `${siteUrl}/images/AboutHeroImage.png`,
      type: "hotel",
    },
    "/about": {
      title: "About Us | Dew Dale Resorts - Baratang Island",
      description:
        "Learn about the heritage and sustainable mission of Dew Dale Resorts, Baratang Island's first real eco-tourism endeavor offering breathtaking nature stays.",
      image: `${siteUrl}/images/AboutHeroImage.png`,
      type: "article",
    },
    "/rooms": {
      title: "Rooms & Tariffs | Dew Dale Resorts Baratang",
      description:
        "Browse luxurious accommodations and farm-style rooms at Dew Dale Resorts. Find the perfect natural escape on Baratang Island.",
      image: `${siteUrl}/images/RestaurantImage.png`,
      type: "hotel",
    },
    "/packages": {
      title: "Best Tour Packages in Andaman | Dew Dale Resorts",
      description:
        "View our exclusive Andaman and Baratang Island tour packages. Discover Parrot Island, mud volcanoes, and majestic limestone caves with expert guides.",
      image: `${siteUrl}/images/8.jpeg`,
      type: "article",
    },
    "/experiences": {
      title: "Baratang Island Experiences & Activities | Dew Dale Resorts",
      description:
        "Explore limestone caves, mud volcanoes, Parrot Island, and more unique natural experiences in Andaman curated by Dew Dale Resorts.",
      image: `${siteUrl}/images/Billede%20225.jpg`,
      type: "article",
    },
    "/blog": {
      title: "Travel Blog | Dew Dale Resorts - Discover Andaman",
      description:
        "Read our travel guides, stories, and tips for exploring Baratang Island and the Andaman archipelago with an eco-luxury touch.",
      image: `${siteUrl}/images/blog5.png`,
      type: "article",
    },
    "/contact": {
      title: "Contact Us | Dew Dale Resorts - Andaman Booking",
      description:
        "Get in touch with Dew Dale Resorts for your Baratang Island stay. We are happy to assist with your bookings and tour package inquiries.",
      image: `${siteUrl}/images/contactHero.png`,
      type: "website",
    },
  };

  const meta = pageMeta[pagePath] || pageMeta["/"];

  const preloadHeroBackground = (url) => {
    if (!url) return;
    if (document.querySelector(`link[rel="preload"][as="image"][href="${url}"]`)) return;

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = url;
    document.head.appendChild(link);
  };

  preloadHeroBackground(meta.image);

  const style = document.createElement("style");
  style.textContent = `
    .sp-animate-ready .sp-reveal {
      opacity: 0;
      transform: translateY(16px);
      transition: opacity 0.55s ease, transform 0.55s ease, box-shadow 0.3s ease;
      will-change: opacity, transform;
    }

    .sp-animate-ready .sp-reveal.sp-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .sp-animate-ready .sp-reveal.sp-from-left {
      transform: translateX(-28px);
    }

    .sp-animate-ready .sp-reveal.sp-from-right {
      transform: translateX(28px);
    }

    .sp-animate-ready .sp-reveal.sp-scale {
      transform: scale(0.98);
    }

    .sp-animate-ready .sp-reveal.sp-scale.sp-visible {
      transform: scale(1);
    }

    .sp-load-in {
      opacity: 0;
      transform: translateY(14px);
      animation: spFadeUp 0.55s ease forwards;
    }

    @keyframes spFadeUp {
      from {
        opacity: 0;
        transform: translateY(18px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes spFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    .sp-float {
      animation: spFloat 4s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);

  if (!reducedMotion) {
    document.documentElement.classList.add("sp-animate-ready");
  }

  document.title = meta.title;
  setMetaTag("description", meta.description);
  setMetaTag("robots", "index, follow");
  setMetaTag("theme-color", "#12352d");
  setMetaTag("og:title", meta.title, true);
  setMetaTag("og:description", meta.description, true);
  setMetaTag("og:type", meta.type, true);
  setMetaTag("og:url", `${siteUrl}${pagePath === "/" ? "/" : `${pagePath}`}`, true);
  setMetaTag("og:image", meta.image, true);
  setMetaTag("twitter:card", "summary_large_image");
  setMetaTag("twitter:title", meta.title);
  setMetaTag("twitter:description", meta.description);
  setMetaTag("twitter:image", meta.image);
  setCanonical(`${siteUrl}${pagePath === "/" ? "/" : pagePath}`);
  injectJsonLd(pagePath, siteUrl, meta.image);

  const menuButton = document.querySelector("[data-mobile-menu-button]");
  const menuPanel = document.querySelector("[data-mobile-menu-panel]");
  const closeButton = document.querySelector("[data-mobile-menu-close]");
  const menuLinks = document.querySelectorAll("[data-mobile-menu-link]");

  const setMenuState = (isOpen) => {
    if (!menuPanel || !menuButton) return;
    menuPanel.classList.toggle("hidden", !isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  if (menuButton && menuPanel) {
    menuButton.addEventListener("click", () => {
      setMenuState(menuPanel.classList.contains("hidden"));
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => setMenuState(false));
  }

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  if (pagePath === "/experiences") {
    const filterButtons = Array.from(document.querySelectorAll("[data-experience-filter]"));
    const cards = Array.from(document.querySelectorAll("[data-experience-card]"));
    const gridSection = document.querySelector("[data-experience-grid]");
    const culturePanel = document.querySelector("[data-culture-panel]");

    const setActiveFilter = (category) => {
      let visibleCount = 0;

      filterButtons.forEach((button) => {
        const isActive = button.getAttribute("data-experience-filter") === category;

        button.setAttribute("aria-pressed", String(isActive));
        button.classList.toggle("bg-forest-dark", isActive);
        button.classList.toggle("text-white", isActive);
        button.classList.toggle("shadow-lg", isActive);
        button.classList.toggle("scale-105", isActive);
        button.classList.toggle("bg-cream", !isActive);
        button.classList.toggle("text-forest-dark", !isActive);
        button.classList.toggle("hover:bg-sage/20", !isActive);
      });

      if (gridSection instanceof HTMLElement) {
        gridSection.classList.toggle("hidden", category === "culture");
      }

      if (culturePanel instanceof HTMLElement) {
        culturePanel.classList.toggle("hidden", category !== "culture");
      }

      cards.forEach((card) => {
        const cardCategory = card.getAttribute("data-experience-card");
        const shouldShow = category === "all" || cardCategory === category;

        card.classList.toggle("hidden", !shouldShow);
        if (shouldShow) visibleCount += 1;
      });
    };

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        setActiveFilter(button.getAttribute("data-experience-filter") || "all");
      });
    });

    setActiveFilter("all");
  }

  if (!reducedMotion) {
    const heroSection = document.querySelector("main > section");
    if (heroSection) {
      const heroContent = heroSection.querySelector(".relative.z-10, .relative");
      const heroTargets = heroContent
        ? heroContent.querySelectorAll("h1, p, .inline-block, .mt-6, a, button")
        : [];
      heroTargets.forEach((node, index) => {
        if (node instanceof HTMLElement) {
          node.classList.add("sp-load-in");
          if (index === 0) node.style.animationDelay = "0.03s";
          if (index === 1) node.style.animationDelay = "0.08s";
          if (index === 2) node.style.animationDelay = "0.13s";
          if (index >= 3) node.style.animationDelay = `${0.12 + index * 0.05}s`;
        }
      });

      const scrollIndicator = heroSection.querySelector(".absolute.bottom-8");
      if (scrollIndicator instanceof HTMLElement) {
        scrollIndicator.classList.add("sp-float");
      }
    }

    const animateTargets = [
      ...document.querySelectorAll("main > section:not(:first-of-type)"),
      ...document.querySelectorAll("main article"),
    ];

    animateTargets.forEach((el) => {
      if (el instanceof HTMLElement) {
        el.classList.add("sp-reveal");
      }
    });

    const staggerTargets = [
      ...document.querySelectorAll("main section .grid > *"),
      ...document.querySelectorAll("main section .space-y-16 > *"),
      ...document.querySelectorAll("main section .space-y-8 > *"),
    ];

    staggerTargets.forEach((el, index) => {
      if (el instanceof HTMLElement) {
        el.classList.add("sp-reveal", "sp-scale");
        el.style.transitionDelay = `${Math.min(index * 0.04, 0.24)}s`;
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sp-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -14% 0px" }
    );

    animateTargets.forEach((el) => observer.observe(el));
    staggerTargets.forEach((el) => observer.observe(el));
  }

  document.querySelectorAll("form[data-whatsapp-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const name = String(formData.get("name") || "");
      const email = String(formData.get("email") || "");
      const phone = String(formData.get("phone") || "");
      const checkIn = String(formData.get("checkIn") || "");
      const checkOut = String(formData.get("checkOut") || "");
      const guests = String(formData.get("guests") || "");
      const message = String(formData.get("message") || "");

      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", { send_to: "AW-963639553/LV06COrHu7oaEIHyv8sD" });
      }

      const whatsappMessage = [
        "Hello, I would like to inquire about booking:",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Check-in: ${checkIn}`,
        `Check-out: ${checkOut}`,
        `Guests: ${guests}`,
        `Message: ${message}`,
      ].join("%0A");

      window.open(`https://wa.me/919434280628?text=${whatsappMessage}`, "_blank");
    });
  });

  document.querySelectorAll("img").forEach((img, index) => {
    if (!(img instanceof HTMLImageElement)) return;

    const inNav = Boolean(img.closest("nav"));
    const inHero = Boolean(img.closest("main > section:first-of-type"));
    const shouldBeEager = inNav || inHero || index === 0;

    img.decoding = "async";
    if (shouldBeEager) {
      img.loading = "eager";
      if (!img.hasAttribute("fetchpriority")) {
        img.setAttribute("fetchpriority", "high");
      }
    } else {
      img.loading = "lazy";
    }
  });
});

function setMetaTag(name, content, isProperty = false) {
  if (!content) return;
  const attribute = isProperty ? "property" : "name";
  let element = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(href) {
  let element = document.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function injectJsonLd(pathname, siteUrl, image) {
  document
    .querySelectorAll('script[type="application/ld+json"][data-static-seo="true"]')
    .forEach((script) => script.remove());

  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Dew Dale Resorts",
    url: `${siteUrl}${pathname === "/" ? "/" : pathname}`,
    image,
    telephone: "+91 9434280628",
    email: "dewdale.resorts@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sundergarh Village, Baratang Island",
      addressLocality: "Port Blair",
      addressRegion: "Andaman and Nicobar Islands",
      addressCountry: "IN",
    },
  };

  const schemas = [hotelSchema];

  if (pathname === "/contact") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is Dew Dale Resorts located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dew Dale Resorts is in Sundergarh Village on Baratang Island, Andaman and Nicobar Islands.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact the resort?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can call, WhatsApp, or email the resort team for booking help and travel assistance.",
          },
        },
      ],
    });
  }

  schemas.forEach((schema, index) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.staticSeo = "true";
    script.id = `static-seo-${index}`;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}
