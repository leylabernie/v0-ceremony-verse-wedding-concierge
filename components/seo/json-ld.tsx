import React from 'react';

interface JsonLdProps {
  data: any;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ImageSchema({ url, caption, author = "CeremonyVerse" }: { url: string; caption: string; author?: string }) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "ImageObject",
    "contentUrl": url,
    "caption": caption,
    "author": {
      "@type": "Organization",
      "name": author
    }
  };
  return <JsonLd data={schema} />;
}

export function ProductSchema({ name, description, image, price, currency = "USD" }: { name: string; description: string; image: string; price: string; currency?: string }) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": "https://schema.org/InStock"
    }
  };
  return <JsonLd data={schema} />;
}
