// SEO Helper Functions

export const SITE_NAME = "Mirran Gallery";
// Use environment variable for domain, fallback to placeholder
export const SITE_URL = import.meta.env.VITE_SITE_URL || 
  (import.meta.env.VERCEL_URL ? `https://${import.meta.env.VERCEL_URL}` : "https://mirrangallery.com");
export const DEFAULT_OG_IMAGE = import.meta.env.VITE_OG_IMAGE || `${SITE_URL}/og-image.png`;

/**
 * Generates a page title with site name
 */
export const generateTitle = (pageTitle: string): string => {
  return `${pageTitle} | ${SITE_NAME}`;
};

/**
 * Truncates description to optimal SEO length (155-160 characters)
 */
export const truncateDescription = (text: string, maxLength: number = 155): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3).trim() + "...";
};

/**
 * Builds canonical URL
 */
export const buildCanonicalUrl = (path: string): string => {
  return `${SITE_URL}${path}`;
};

/**
 * Formats keywords array into comma-separated string
 */
export const formatKeywords = (keywords: string[]): string => {
  return keywords.join(", ");
};

/**
 * Extracts keywords from artwork data
 */
export const extractArtworkKeywords = (
  title: string,
  artist: string,
  medium?: string,
  style?: string,
  year?: string
): string[] => {
  const keywords = [title, artist, "art", "artwork"];
  if (medium) keywords.push(medium);
  if (style) keywords.push(style);
  if (year) keywords.push(year);
  keywords.push("contemporary art", "digital gallery");
  return keywords;
};

/**
 * Extracts keywords from room data
 */
export const extractRoomKeywords = (
  name: string,
  theme?: string,
  mood?: string
): string[] => {
  const keywords = [name, "art collection", "digital gallery"];
  if (theme) keywords.push(theme);
  if (mood) keywords.push(mood);
  keywords.push("curated art", "art room", "exhibition");
  return keywords;
};
