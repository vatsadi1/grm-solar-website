import { useEffect } from "react";

const GlobalLayoutFix = () => {
  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
      /* ===== MOBILE GLOBAL FLOW FIX ===== */
      @media (max-width: 768px) {

        /* Kill viewport-height traps */
        [style*="100vh"],
        .hero,
        .banner,
        .full-height {
          min-height: auto !important;
          height: auto !important;
        }

        /* Prevent horizontal scroll */
        html, body {
          overflow-x: hidden;
        }

        /* Reset transform-based gaps */
        .hero,
        section {
          transform: none !important;
        }

        /* Normalize padding instead of margins */
        section {
          padding-top: 32px !important;
          padding-bottom: 32px !important;
        }

        /* Remove excessive margins */
        section,
        div {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }

      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default GlobalLayoutFix;
