export function createApiError(message, status, endpoint) {
  const err = new Error(message);
  err.name = "ApiError";
  err.status = status;
  err.endpoint = endpoint;
  return err;
}

export const CACHE = {
  ISR: (seconds = 60) => ({ next: { revalidate: seconds } }),
  NO_STORE: { cache: "no-store" },
  FORCE_CACHE: { cache: "force-cache" },
};

export async function apiFetch(endpoint, { cache = CACHE.ISR(), ...rest } = {}) {
  const base = process.env.NEXT_PUBLIC_API_URL;
  const url = `${base}/wp-json/${endpoint}`;

  const res = await fetch(url, { ...cache, ...rest });

  if (!res.ok) {
    throw createApiError(
      `[${res.status}] Failed to fetch /${endpoint}`,
      res.status,
      endpoint
    );
  }

  return res.json();
}
