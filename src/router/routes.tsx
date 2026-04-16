import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

/* ================= PAGES ================= */
const HomePage = lazy(() => import("../pages/home/page"));

const BookPackagePage = lazy(() => import("../pages/book/BookPackage"));
const BookOtherIslandPackage = lazy(
  () => import("../pages/book/BookOtherIslandPackage")
);

const NotFound = lazy(() => import("../pages/NotFound"));

/* ================= ROUTES ================= */
const routes: RouteObject[] = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <Navigate to="/about.html" replace /> },
  { path: "/rooms", element: <Navigate to="/rooms.html" replace /> },
  { path: "/packages", element: <Navigate to="/packages.html" replace /> },

  /* Booking Routes */
  { path: "/book/:id", element: <BookPackagePage /> },
  { path: "/book/other/:id", element: <BookOtherIslandPackage /> },

  /* Other Pages */
  { path: "/experiences", element: <Navigate to="/experiences.html" replace /> },
  { path: "/contact", element: <Navigate to="/contact.html" replace /> },
  { path: "/blog", element: <Navigate to="/blog.html" replace /> },

  /* Policies */
  { path: "/terms-and-conditions", element: <Navigate to="/terms-and-conditions.html" replace /> },
  { path: "/refund-policy", element: <Navigate to="/refund-policy.html" replace /> },
  { path: "/privacy-policy", element: <Navigate to="/privacy-policy.html" replace /> },

  /* Fallback */
  { path: "*", element: <NotFound /> },
];

export default routes;
