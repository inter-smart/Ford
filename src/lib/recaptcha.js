const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export async function getRecaptchaToken(action = "submit") {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.grecaptcha) {
      reject(new Error("reCAPTCHA not loaded"));
      return;
    }
    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(SITE_KEY, { action });
        resolve(token);
      } catch (err) {
        reject(err);
      }
    });
  });
}