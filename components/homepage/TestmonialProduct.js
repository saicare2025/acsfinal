"use client";
import { useEffect } from "react";

export default function ReviewsWidget() {
  useEffect(() => {
    // Prevent script from being added multiple times
    if (!document.querySelector("#romw-script")) {
      const script = document.createElement("script");
      script.id = "romw-script";
      script.src =
        "https://reviewsonmywebsite.com/js/v2/embed.js?id=4a24b3ba631386ba5f4ec3ef018ac9ca";
      script.type = "text/javascript";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      data-romw-token="Un2YoIQfGfa3N1fM3aK9jrRYmudhaHraWDe42ioCB7Sy0POe2h"
      data-romw-lazy
      className="max-w-7xl mx-auto"
    />
  );
}
