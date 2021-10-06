/* eslint-disable */
import React, { useState, useEffect } from "react";

export default function useScroll() {
   const [scroll, setScroll] = useState({
    x: window.scrollX,
    y: window.scrollY,
    direction: ''
  })

  const listener = (e) => {
   setScroll(prev => ({
      x: window.scrollX,
      y: window.scrollY,
      direction: prev.y > window.scrollY ? 'up' : 'down'
    }))
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return scroll
}
