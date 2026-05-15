# API Integration Guide

Reference for fetching data from the WordPress REST API in any page of this Next.js project.

---

## Folder Structure

```
src/lib/api/
├── client.js      # apiFetch wrapper, CACHE constants, createApiError
├── endpoints.js   # All API endpoint paths
├── seo.js         # buildMetadata — reusable SEO/OpenGraph builder
└── fallbacks.js   # Hardcoded fallback data for header & footer
```

---

## `apiFetch` — Base Fetch Wrapper

**File:** `src/lib/api/client.js`

```js
import { apiFetch, CACHE } from "@/lib/api/client";

const data = await apiFetch(ENDPOINTS.home, { cache: CACHE.ISR(60) });
```

### Signature

```js
apiFetch(endpoint, options?)
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `endpoint` | `string` | Path after `/wp-json/` — use a key from `ENDPOINTS` |
| `options.cache` | `object` | Cache strategy — use a `CACHE` constant (default: `CACHE.ISR()`) |
| `options.*` | any | Any other native `fetch` options (e.g. `method`, `headers`, `body`) |

**Returns:** `Promise<any>` — parsed JSON response body.

**On error:** throws an `ApiError` with `.status` (HTTP status code) and `.endpoint` fields.

---

## `CACHE` — Cache Strategy Constants

```js
import { CACHE } from "@/lib/api/client";
```

| Constant | Value | When to use |
|----------|-------|-------------|
| `CACHE.ISR(seconds)` | `{ next: { revalidate: N } }` | Page content that changes occasionally. Default is 60s. |
| `CACHE.NO_STORE` | `{ cache: "no-store" }` | Always fetch fresh — use for layout (header/footer). |
| `CACHE.FORCE_CACHE` | `{ cache: "force-cache" }` | Fully static data that never changes. |

```js
// ISR — revalidate every 60 seconds (default)
apiFetch(ENDPOINTS.home, { cache: CACHE.ISR(60) });

// ISR — revalidate every 5 minutes
apiFetch(ENDPOINTS.products, { cache: CACHE.ISR(300) });

// Always fresh
apiFetch(ENDPOINTS.header, { cache: CACHE.NO_STORE });
```

---

## `ENDPOINTS` — Endpoint Registry

**File:** `src/lib/api/endpoints.js`

```js
import { ENDPOINTS } from "@/lib/api/endpoints";
```

| Key | WordPress REST path |
|-----|---------------------|
| `ENDPOINTS.home` | `ford/v1/home` |
| `ENDPOINTS.contact` | `ford/v1/contact` |
| `ENDPOINTS.header` | `ford/v1/header` |
| `ENDPOINTS.footer` | `ford/v1/footer` |
| `ENDPOINTS.products` | `custom/v1/product` |

### Adding a new endpoint

Open `src/lib/api/endpoints.js` and add a key:

```js
export const ENDPOINTS = {
  // ... existing
  about: "ford/v1/about",
};
```

---

## `buildMetadata` — SEO Metadata

**File:** `src/lib/api/seo.js`

Builds a consistent `title`, `description`, `openGraph`, and `twitter` metadata object from the `seo` field returned by any API response.

```js
import { buildMetadata } from "@/lib/api/seo";

export async function generateMetadata() {
  const data = await apiFetch(ENDPOINTS.about, { cache: CACHE.ISR(60) });
  return buildMetadata(data?.seo);
}
```

### Signature

```js
buildMetadata(seo?, defaults?)
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `seo` | `object` | SEO object from API — expects `.title`, `.description`, `.image` |
| `defaults` | `object` | Fallback values if API fields are missing |

```js
// With defaults
buildMetadata(data?.seo, { title: "Ford About", description: "About Ford" });
```

---

## Full Page Template

Copy this for any new page under `src/app/[locale]/`:

```jsx
import { apiFetch, CACHE } from "@/lib/api/client";
import { ENDPOINTS }       from "@/lib/api/endpoints";
import { buildMetadata }   from "@/lib/api/seo";

import SomeSection from "@/components/features/example/SomeSection";

// Next.js deduplicates fetch calls with the same URL + cache options
// within a single render — this runs only ONE network request even
// though both generateMetadata and the page component call it.
async function getPageData() {
  return apiFetch(ENDPOINTS.about, { cache: CACHE.ISR(60) });
}

export async function generateMetadata() {
  const data = await getPageData();
  return buildMetadata(data?.seo);
}

export default async function AboutPage() {
  const data = await getPageData();
  const acf  = data?.about_acf;

  return (
    <>
      {acf?.some_section?.enable && (
        <SomeSection data={acf.some_section} />
      )}
    </>
  );
}
```

---

## Error Handling

`apiFetch` throws an `ApiError` when the response is not OK (non-2xx status).

The error has three fields:

| Field | Description |
|-------|-------------|
| `err.message` | `"[404] Failed to fetch /ford/v1/about"` |
| `err.status` | HTTP status code (e.g. `404`, `500`) |
| `err.endpoint` | The endpoint path that failed |

### Catching errors in a page

```js
export default async function AboutPage() {
  try {
    const data = await apiFetch(ENDPOINTS.about, { cache: CACHE.ISR(60) });
    // render page
  } catch (err) {
    if (err.name === "ApiError") {
      // handle gracefully — return fallback UI or redirect
    }
    throw err; // re-throw unexpected errors to Next.js error boundary
  }
}
```

For global error handling, use Next.js `error.js` co-located with the page.

---

## SSR vs CSR — Component Guidelines

| Component type | Import style | Why |
|----------------|-------------|-----|
| Heavy client component (animations, carousels, filters) | `dynamic(() => import(...))` | Code-splits the bundle; still SSR by default |
| Simple client component | Direct `import` | Fine for small components |
| Component using browser-only APIs on mount (`window`, `navigator`, etc.) | `dynamic(() => import(...), { ssr: false })` inside a Client Component | Prevents server-render errors |

> `ssr: false` in `dynamic()` is **only valid inside a Client Component** (`"use client"`).  
> It cannot be used directly in a Server Component page.

### Home page example

```jsx
// Server Component page — data fetched on server, passed as props
import HeroSection from "@/components/features/home/HeroSection"; // small, fine as direct import

const LegendarySection = dynamic(            // large, code-split
  () => import("@/components/features/home/LegendarySection")
);

import LocationSection from "@/components/features/home/LocationSection"; // "use client", direct import is fine
```

---

## Environment Variables

| Variable | Used in |
|----------|---------|
| `NEXT_PUBLIC_API_URL` | `apiFetch` — base URL for all WordPress REST calls |

Set in `.env.local`:

```
NEXT_PUBLIC_API_URL=https://your-wordpress-site.com
```
