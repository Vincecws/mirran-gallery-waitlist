import { Helmet } from "react-helmet-async";
import { SITE_URL } from "@/utils/seoHelpers";

interface StructuredDataProps {
  data: object;
}

const StructuredData = ({ data }: StructuredDataProps) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

export default StructuredData;

// Organization Schema Generator
export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ArtGallery",
  "name": "Mirran Gallery",
  "description": "A premier digital art gallery showcasing contemporary and classical masterpieces from talented artists worldwide",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "sameAs": [
    "https://twitter.com/MirranGallery",
    "https://instagram.com/mirran.gallery"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service"
  }
});

// Artwork Schema Generator
export const createArtworkSchema = (artwork: {
  title: string;
  artist: string;
  year: string;
  imageUrl: string;
  context?: string;
  medium?: string;
  dimensions?: string;
  artistBio?: string;
  artistLocation?: string;
  artistAge?: string;
  artistWebsite?: string;
  artistInstagram?: string;
  artistTwitter?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "VisualArtwork",
  "name": artwork.title,
  "artist": {
    "@type": "Person",
    "name": artwork.artist,
    ...(artwork.artistAge && { "birthDate": artwork.artistAge }),
    ...(artwork.artistLocation && { "address": artwork.artistLocation }),
    ...(artwork.artistWebsite && { "url": `https://${artwork.artistWebsite}` }),
    ...(artwork.artistInstagram && {
      "sameAs": [
        `https://instagram.com/${artwork.artistInstagram}`,
        ...(artwork.artistTwitter ? [`https://twitter.com/${artwork.artistTwitter}`] : [])
      ]
    })
  },
  "image": artwork.imageUrl,
  "dateCreated": artwork.year,
  ...(artwork.medium && { "artMedium": artwork.medium }),
  "artform": "Painting",
  ...(artwork.context && { "description": artwork.context }),
  ...(artwork.dimensions && { "size": artwork.dimensions })
});

// BreadcrumbList Schema Generator
export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// CollectionPage Schema Generator
export const createCollectionSchema = (room: {
  name: string;
  description: string;
  imageUrl: string;
  theme?: string;
  id: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": room.name,
  "description": room.description,
  "url": `${SITE_URL}/room/${room.id}`,
  "image": room.imageUrl,
  ...(room.theme && { "about": room.theme })
});
