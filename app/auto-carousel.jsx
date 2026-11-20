"use client";

import { useEffect, useId, useRef, useState } from "react";

function getScrollBounds(track) {
  const end = Math.max(0, track.scrollWidth - track.clientWidth);
  return {
    end,
    canGoBack: track.scrollLeft > 1,
    canGoForward: track.scrollLeft < end - 1,
  };
}

function advance(track, direction, wrap = false) {
  const [first, second] = track.children;
  if (!second) return;

  const step = second.offsetLeft - first.offsetLeft;
  const { end, canGoBack, canGoForward } = getScrollBounds(track);
  if (step <= 0 || end <= 1) return;
  if (!wrap && (direction < 0 ? !canGoBack : !canGoForward)) return;

  const next = wrap && !canGoForward
    ? 0
    : Math.max(0, Math.min(end, Math.round(track.scrollLeft / step) * step + direction * step));
  track.scrollTo({
    left: next,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
  });
}

export function AutoCarousel({ label, className, children, interval = 4000, controls = false }) {
  const viewport = useRef(null);
  const viewportId = useId();
  const [arrows, setArrows] = useState({ canGoBack: false, canGoForward: false });

  useEffect(() => {
    if (!controls) return;
    const track = viewport.current;

    function syncArrows() {
      const { canGoBack, canGoForward } = getScrollBounds(track);
      setArrows((current) => current.canGoBack === canGoBack && current.canGoForward === canGoForward
        ? current
        : { canGoBack, canGoForward });
    }

    const observer = new ResizeObserver(syncArrows);
    observer.observe(track);
    Array.from(track.children).forEach((slide) => observer.observe(slide));
    track.addEventListener("scroll", syncArrows, { passive: true });
    syncArrows();

    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", syncArrows);
    };
  }, [controls, children]);

  useEffect(() => {
    const track = viewport.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(track);

    const timer = window.setInterval(() => {
      if (!visible || document.hidden || motion.matches || track.parentElement.matches(":hover, :focus-within")) return;
      advance(track, 1, true);
    }, interval);

    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [interval]);

  return (
    <section className={className} aria-label={label} aria-roledescription="carousel">
      <div className="auto-carousel-track" id={viewportId} ref={viewport} tabIndex={0} role="group" aria-label={label + " slides"}>
        {children}
      </div>
      {controls && (
        <div className="carousel-arrows" role="group" aria-label={label + " navigation"}>
          <button type="button" className="carousel-arrow" aria-label={"Previous " + label.toLowerCase()} aria-controls={viewportId} disabled={!arrows.canGoBack} onClick={() => advance(viewport.current, -1)}>
            <i className="bi bi-chevron-left" aria-hidden="true" />
          </button>
          <button type="button" className="carousel-arrow" aria-label={"Next " + label.toLowerCase()} aria-controls={viewportId} disabled={!arrows.canGoForward} onClick={() => advance(viewport.current, 1)}>
            <i className="bi bi-chevron-right" aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}
