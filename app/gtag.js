// app/gtag.js
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-MVMW025XRV";

export const whenGtagReady = () =>
  new Promise((resolve) => {
    if (window.gtag) return resolve();
    const check = () => {
      if (window.gtag) resolve();
      else setTimeout(check, 100);
    };
    check();
  });

export const pageview = async (url) => {
  if (!GA_ID) return;
  await whenGtagReady();
  window.gtag("event", "page_view", { page_location: url });
};
