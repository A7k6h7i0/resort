import { useEffect } from "react";

const SITE_NAME = "Dew Dale Resorts";
const SITE_URL = "https://dewdaleresorts.online";
const DEFAULT_IMAGE = `${SITE_URL}/images/AboutHeroImage.png`;

type JsonLd = Record<string, unknown>;

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article" | "hotel";
  noIndex?: boolean;
  locale?: string;
  siteName?: string;
  schemas?: JsonLd | JsonLd[];
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  image = DEFAULT_IMAGE,
  type = "website",
  noIndex = false,
  locale = "en_US",
  siteName = SITE_NAME,
  schemas,
}: SEOProps) {
  useEffect(() => {
    const pageTitle = title ? `${title}` : SITE_NAME;
    const canonicalUrl = canonical
      ? canonical.startsWith("http")
        ? canonical
        : `${SITE_URL}${canonical.startsWith("/") ? canonical : `/${canonical}`}`
      : window.location.href.replace(/^https?:\/\/[^/]+/, SITE_URL);

    document.title = pageTitle;

    setMetaTag("description", description);
    setMetaTag("keywords", keywords);
    setMetaTag("robots", noIndex ? "noindex, nofollow" : "index, follow");
    setMetaTag("theme-color", "#12352d");

    setLinkTag("canonical", canonicalUrl);

    setMetaTag("og:site_name", siteName, true);
    setMetaTag("og:title", pageTitle, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:type", type, true);
    setMetaTag("og:url", canonicalUrl, true);
    setMetaTag("og:image", image, true);
    setMetaTag("og:locale", locale, true);

    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", pageTitle);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", image);

    updateJsonLd(schemas);
  }, [title, description, keywords, canonical, image, type, noIndex, locale, siteName, schemas]);

  return null;
}

function setMetaTag(name: string, content?: string, isProperty = false) {
  if (!content) return;
  const attribute = isProperty ? "property" : "name";
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function updateJsonLd(schemas?: JsonLd | JsonLd[]) {
  const entries = Array.isArray(schemas) ? schemas : schemas ? [schemas] : [];

  document
    .querySelectorAll('script[type="application/ld+json"][data-seo-generated="true"]')
    .forEach((script) => script.remove());

  entries.forEach((schema, index) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoGenerated = "true";
    script.id = `seo-jsonld-${index}`;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}
