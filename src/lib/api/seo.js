export function buildMetadata(seo = {}, defaults = {}) {
  const title       = seo.title       ?? defaults.title       ?? "Ford";
  const description = seo.description ?? defaults.description ?? "";
  const image       = seo.image       ?? defaults.image       ?? "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
