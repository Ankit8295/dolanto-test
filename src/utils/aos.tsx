"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out",
      duration: 700,
      delay: 0,
      anchorPlacement: "center-bottom",
    });
  }, []);

  return null;
};
