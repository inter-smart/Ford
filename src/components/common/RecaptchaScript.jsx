"use client";
import Script from "next/script";

export default function RecaptchaScript() {
  return (
    <Script
      src="https://www.google.com/recaptcha/api.js?render=6LcnDSUsAAAAAPzuIuNcagH8xs8f_HIbB7_GYaBD"
      strategy="afterInteractive"
    />
  );
}