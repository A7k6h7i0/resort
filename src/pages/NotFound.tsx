import { useLocation } from "react-router-dom";
import SEO from "../components/common/SEO";

export default function NotFound() {
  const location = useLocation();
  
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-b from-white to-sand-light">
      <SEO
        title="404 Not Found | Dew Dale Resorts"
        description={`The page ${location.pathname} could not be found.`}
        canonical={location.pathname}
        noIndex
      />
      <h1 className="absolute bottom-0 text-9xl md:text-[12rem] font-black text-gray-100 select-none pointer-events-none z-0">
        404
      </h1>
      <div className="relative z-10 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">Page not found</p>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-forest-dark mt-2">
          We could not find that page
        </h1>
        <p className="mt-4 text-base text-olive">
          The address <span className="font-mono">{location.pathname}</span> does not exist on the site.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/" className="px-6 py-3 rounded-full bg-forest text-white">
            Back to Home
          </a>
          <a href="/contact.html" className="px-6 py-3 rounded-full border border-forest text-forest">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
