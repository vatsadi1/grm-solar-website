import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // 🔥 HARD RESET ALL SCROLL TARGETS
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.scrollTo(0, 0);

    // 🔁 Double fire for Safari / Chrome mobile bug
    setTimeout(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      window.scrollTo(0, 0);
    }, 150);

    setTimeout(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      window.scrollTo(0, 0);
    }, 400);

  }, [pathname]);

  return null;
};

export default ScrollToTop;
