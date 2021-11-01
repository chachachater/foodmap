import { useEffect } from "react";

let listenerCallBack = new WeakMap();
let observer;

function handleIntersections(entries) {
  entries.forEach((entry) => {
    if (listenerCallBack.has(entry.target)) {
      let cb = listenerCallBack.get(entry.target);
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listenerCallBack.delete(entry.target);
        cb();
      }
    }
  });
}

function getIntersectionObserver() {
  if (observer === undefined) {
    observer = new IntersectionObserver(handleIntersections, {
      rootMargin: "100px",
      threshold: "0.15",
    });
  }
  return observer;
}

export default function useInterSection(element, callBack) {
  useEffect(() => {
    let target = element.current;
    let observer = getIntersectionObserver();
    listenerCallBack.set(target, callBack);
    observer.observe(target);
    return () => {
      observer.unobserve(target);
      listenerCallBack.delete(target);
    };
  }, []);
}
