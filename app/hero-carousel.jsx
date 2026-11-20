"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    image: "/assets/img/hero-header.jpg",
    position: "center right",
    eyebrow: "Creative & Innovative",
    title: "Creative & Innovative Digital Solution",
  },
  {
    image: "/assets/img/carousel-1.jpg",
    position: "center",
    eyebrow: "Digital Transformation",
    title: "Build Better Digital Experiences",
  },
  {
    image: "/assets/img/carousel-2.jpg",
    position: "center",
    eyebrow: "Technology & Growth",
    title: "Technology That Moves You Forward",
  },
];

export function HeroCarousel() {
  const hero = useRef(null);
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const region = hero.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(region);

    const timer = window.setInterval(() => {
      if (visible && !document.hidden && !motion.matches && !region.matches(":hover, :focus-within")) {
        setActiveIndex((current) => (current + 1) % slides.length);
      }
    }, 6000);

    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section className="hero-carousel" ref={hero} aria-label="Featured services" aria-roledescription="carousel">
      <div className="hero-slides">
        {slides.map((slide, index) => {
          const active = index === activeIndex;

          return (
            <motion.div
              className="hero-slide"
              data-active={active}
              aria-hidden={!active}
              inert={!active}
              key={slide.image}
              initial={false}
              animate={{ opacity: active ? 1 : 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.65, ease: "easeInOut" }}
            >
              <img className="hero-slide-image" src={slide.image} alt="" style={{ objectPosition: slide.position }} fetchPriority={index === 0 ? "high" : "low"} />
              <motion.div
                className="container hero-slide-content"
                initial={false}
                animate={{ y: active || reducedMotion ? 0 : 10 }}
                transition={{ duration: reducedMotion ? 0 : 0.55, ease: "easeOut" }}
              >
                <div className="row justify-content-start">
                  <div className="col-lg-8 text-center text-lg-start">
                    <p className="h5 text-white text-uppercase mb-3">{slide.eyebrow}</p>
                    <h1 className="display-1 text-white mb-4">{slide.title}</h1>
                    <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                      <a className="btn btn-primary py-md-3 px-md-5" href="#request-quote">Free Quote</a>
                      <Link className="btn btn-outline-light py-md-3 px-md-5" href="/contact">Contact Us</Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      <div className="hero-indicators" role="group" aria-label="Choose a featured slide">
        {slides.map((slide, index) => (
          <button type="button" key={slide.image} className="hero-indicator" aria-label={`Slide ${index + 1} of ${slides.length}: ${slide.title}`} aria-current={index === activeIndex ? "true" : undefined} onClick={() => setActiveIndex(index)} />
        ))}
      </div>
    </section>
  );
}
