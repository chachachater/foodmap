import { useState, useEffect, useRef } from "react";

export default function useScroll() {
  const test = useRef()
   const [scroll, setScroll] = useState({
    x: window.scrollX,
    y: window.scrollY,
    direction: ''
  })

  const listener = () => {
    console.log(test.current)
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
