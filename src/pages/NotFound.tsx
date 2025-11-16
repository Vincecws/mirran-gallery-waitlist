import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { generateTitle, truncateDescription } from "@/utils/seoHelpers";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  const seoTitle = generateTitle("Page Not Found (404)");
  const seoDescription = truncateDescription(
    "The page you're looking for doesn't exist. Return to our gallery to explore beautiful contemporary artworks."
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <SEO
        title={seoTitle}
        description={seoDescription}
        url={location.pathname}
        noindex={true}
      />
      <div className="text-center">
        <h1 className="mb-4 font-serif text-4xl md:text-5xl lg:text-7xl font-light">404</h1>
        <p className="mb-4 font-serif text-base md:text-lg font-normal text-gray-600">Oops! Page not found</p>
        <Link to="/" className="font-serif text-base font-light text-blue-500 underline hover:text-blue-700">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
