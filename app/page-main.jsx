"use client";

import { useEffect } from "react";
import { useAnimate } from "framer-motion";

function getRevealTargets(section) {
  const effect = section.dataset.sectionReveal;
  const container = section.querySelector(":scope > .container");
  if (!container) return [{ element: section, effect, index: 0 }];

  return Array.from(container.children).flatMap((block) => {
    if (block.matches(".row, .story")) {
      return Array.from(block.children).map((element, index) => ({ element, effect, index }));
    }

    return [{
      element: block,
      effect: block.matches('[class*="section-title-"]') ? "heading" : effect,
      index: 0,
    }];
  });
}

function revealKeyframes(effect, index, wideScreen) {
  const opacity = [0, 1];

  switch (effect) {
    case "heading":
      return { opacity, y: [24, 0] };
    case "split":
      return wideScreen
        ? { opacity, x: [index % 2 === 0 ? -32 : 32, 0] }
        : { opacity, y: [22, 0] };
    case "scale":
      return { opacity, scale: [0.96, 1], y: [16, 0] };
    default:
      return { opacity, y: [30, 0] };
  }
}

export function PageMain({ children, className }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches || !("IntersectionObserver" in window)) return;

    const targets = Array.from(
      scope.current.querySelectorAll("[data-section-reveal]"),
    ).flatMap(getRevealTargets);
    const settings = new Map(targets.map((target) => [target.element, target]));
    const wideScreen = window.matchMedia("(min-width: 768px)");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const element = entry.target;
        const { effect, index } = settings.get(element);
        observer.unobserve(element);
        delete element.dataset.revealPending;
        if (motionPreference.matches || element.matches(":focus-within")) continue;

        animate(element, revealKeyframes(effect, index, wideScreen.matches), {
          duration: effect === "scale" ? 0.72 : 0.6,
          delay: effect === "stagger" ? (index % 3) * 0.08 : 0,
          ease: [0.22, 1, 0.36, 1],
        });
      }
    }, { rootMargin: "0px 0px -14% 0px" });

    for (const { element } of targets) {
      if (element.getBoundingClientRect().top >= window.innerHeight) {
        element.dataset.revealPending = "";
      }
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
      for (const { element } of targets) delete element.dataset.revealPending;
    };
  }, [animate, scope]);

  return <main ref={scope} className={className}>{children}</main>;
}
