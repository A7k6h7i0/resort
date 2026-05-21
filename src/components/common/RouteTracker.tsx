import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Manually trigger a page view in Google Analytics when the route changes
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-4L6KKY007F', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default RouteTracker;
