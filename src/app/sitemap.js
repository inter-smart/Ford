const BASE_URL = "https://fordoman.com";
const LOCALES = ["en", "ar"];

async function safeFetch(url, options = {}) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

function apiUrl(path) {
  const base = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/$/, "");
  return `${base}/wp-json/${path}`;
}

async function getProductSlugs() {
  const data = await safeFetch(apiUrl("ford/v1/product"), { next: { revalidate: 3600 } });
  return (data?.product ?? []).map((p) => p.slug).filter(Boolean);
}

async function getOfferSlugs() {
  const slugs = [];
  let page = 1;
  while (true) {
    const data = await safeFetch(apiUrl(`ford/v1/offers?page=${page}`), { next: { revalidate: 3600 } });
    if (!data?.offers?.length) break;
    slugs.push(...data.offers.map((o) => o.slug).filter(Boolean));
    if (page >= (data.total_pages ?? 1)) break;
    page++;
  }
  return slugs;
}

async function getNewsSlugs() {
  const slugs = [];
  let page = 1;
  while (true) {
    const data = await safeFetch(apiUrl(`ford/v1/news?page=${page}`), { next: { revalidate: 3600 } });
    const items = data?.data?.news ?? [];
    if (!items.length) break;
    slugs.push(...items.map((n) => n.slug).filter(Boolean));
    if (page >= (data?.meta?.totalPages ?? 1)) break;
    page++;
  }
  return slugs;
}

export default async function sitemap() {
  const [productSlugs, offerSlugs, newsSlugs] = await Promise.all([
    getProductSlugs(),
    getOfferSlugs(),
    getNewsSlugs(),
  ]);

  const now = new Date();

  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/products", priority: 0.9, changeFrequency: "weekly" },
    { path: "/offers", priority: 0.9, changeFrequency: "daily" },
    { path: "/news", priority: 0.8, changeFrequency: "daily" },
    { path: "/service", priority: 0.8, changeFrequency: "monthly" },
    { path: "/fleet", priority: 0.8, changeFrequency: "monthly" },
    { path: "/accessories", priority: 0.7, changeFrequency: "weekly" },
    { path: "/showroom-service-center", priority: 0.7, changeFrequency: "monthly" },
    { path: "/parts", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-conditions", priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticEntries = LOCALES.flatMap((locale) =>
    staticPages.map(({ path, priority, changeFrequency }) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    }))
  );

  const productEntries = LOCALES.flatMap((locale) =>
    productSlugs.map((slug) => ({
      url: `${BASE_URL}/${locale}/products/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    }))
  );

  const offerEntries = LOCALES.flatMap((locale) =>
    offerSlugs.map((slug) => ({
      url: `${BASE_URL}/${locale}/offers/${slug}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    }))
  );

  const newsEntries = LOCALES.flatMap((locale) =>
    newsSlugs.map((slug) => ({
      url: `${BASE_URL}/${locale}/news/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    }))
  );

  return [...staticEntries, ...productEntries, ...offerEntries, ...newsEntries];
}
