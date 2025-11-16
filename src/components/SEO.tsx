import { Helmet } from "react-helmet-async";
import { SITE_NAME, DEFAULT_OG_IMAGE, buildCanonicalUrl, formatKeywords } from "@/utils/seoHelpers";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: "website" | "article";
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  url,
  type = "website",
  keywords = [],
  author,
  publishedTime,
  modifiedTime,
  noindex = false,
}: SEOProps) => {
  const canonicalUrl = buildCanonicalUrl(url);
  const keywordsString = formatKeywords(keywords);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywordsString && <meta name="keywords" content={keywordsString} />}
      {author && <meta name="author" content={author} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots Meta */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@MirranGallery" />
    </Helmet>
  );
};

export default SEO;
