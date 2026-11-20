"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/our-team", "Our Team"],
  ["/contact", "Contact"],
  ["/blog", "Blog"],
];

function Logo() {
  return <img className="brand-logo" src="/assets/verafide-logo-transparent.png" alt="VeraFide Technology Group" width="2172" height="724" />;
}

function TopBar() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const address = process.env.NEXT_PUBLIC_CONTACT_ADDRESS;
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE;

  return (
    <div className="container-fluid bg-dark text-light px-5 d-none d-lg-block">
      <div className="d-flex align-items-center justify-content-between gap-3 top-bar">
        <div className="d-flex flex-wrap align-items-center gap-3">
          <small><i className="fa fa-map-marker-alt me-2" aria-hidden="true" />{address || "Office location pending"}</small>
          <small>
            <i className="fa fa-phone-alt me-2" aria-hidden="true" />
            {phone ? <a className="text-light" href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a> : "Phone number pending"}
          </small>
          <small>
            <i className="fa fa-envelope-open me-2" aria-hidden="true" />
            {email ? <a className="text-light" href={`mailto:${email}`}>{email}</a> : <Link className="text-light" href="/contact">Contact Us</Link>}
          </small>
        </div>
        <div className="d-inline-flex align-items-center gap-2">
          {[...footerSocials, ["youtube", "YouTube"]].map(([icon, label]) => (
            <button className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" key={icon} type="button" aria-label={label + " link unavailable"} disabled>
              <i className={`fab fa-${icon} fw-normal`} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader({ title, children, parent }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function updateScroll() {
      setScrolled(window.scrollY > 45);
    }
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <header>
      <TopBar />
      <div className="container-fluid position-relative p-0">
        <nav className={"navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0" + (scrolled ? " sticky-top shadow-sm" : "")} aria-label="Main navigation">
          <Link href="/" className="navbar-brand p-0" onClick={() => setMenuOpen(false)}><Logo /></Link>
          <button className="navbar-toggler" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="fa fa-bars" aria-hidden="true" />
          </button>
          <div id="primary-navigation" className={"navbar-collapse primary-navigation" + (menuOpen ? " show" : "")}>
            <div className="navbar-nav ms-auto">
              {links.map(([href, label]) => {
                const current = href === "/" ? pathname === href : pathname === href || pathname.startsWith(href + "/");
                return <Link href={href} key={href} className={"nav-item nav-link" + (current ? " active" : "")} aria-current={current ? "page" : undefined} onClick={() => setMenuOpen(false)}>{label}</Link>;
              })}
            </div>
          </div>
        </nav>
        {children ?? (
          <div className="container-fluid bg-primary py-5 bg-header page-banner">
            <div className="row py-5">
              <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-4 text-white mb-3">{title}</h1>
                <Link href="/" className="h5 text-white">Home</Link>
                <i className="bi bi-chevron-right text-white px-2" aria-hidden="true" />
                {parent && (
                  <>
                    <Link href={parent.href} className="h5 text-white">{parent.label}</Link>
                    <i className="bi bi-chevron-right text-white px-2" aria-hidden="true" />
                  </>
                )}
                <span className="h5 text-white">{title}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

const footerLinks = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/services", "Our Services"],
  ["/our-team", "Meet The Team"],
  ["/blog", "Latest Blog"],
  ["/contact", "Contact Us"],
];

const footerSocials = [
  ["twitter", "Twitter"],
  ["facebook-f", "Facebook"],
  ["linkedin-in", "LinkedIn"],
  ["instagram", "Instagram"],
];

function FooterHeading({ children }) {
  return (
    <div className="section-title-2 section-title-sm position-relative pb-3 mb-4">
      <h2 className="h3 text-light mb-0">{children}</h2>
    </div>
  );
}

export function Footer() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  return (
    <footer className="site-footer container-fluid bg-dark text-light mt-5 px-0">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-4 col-md-6 footer-about">
            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
              <Link href="/" className="navbar-brand"><Logo /></Link>
              <p className="mt-3 mb-4">Explore VeraFide Technology Group, meet our team, and learn how we can help with your next technology project.</p>
              <div className="input-group" role="group" aria-label="Newsletter signup is currently unavailable">
                <input type="email" className="form-control border-white p-3" placeholder="Your Email" aria-label="Your email" disabled />
                <button type="button" className="btn btn-dark" disabled>Sign Up</button>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6">
            <div className="row gx-5">
              <div className="col-lg-4 col-md-12 pt-5 mb-5">
                <FooterHeading>Get In Touch</FooterHeading>
                <div className="d-flex mb-2">
                  <i className="bi bi-geo-alt text-primary me-2" aria-hidden="true" />
                  <span>Office location pending</span>
                </div>
                <div className="d-flex mb-2">
                  <i className="bi bi-envelope-open text-primary me-2" aria-hidden="true" />
                  {email ? <a className="text-light text-break" href={`mailto:${email}`}>{email}</a> : <Link className="text-light" href="/contact">Contact Us</Link>}
                </div>
                <div className="d-flex mb-2">
                  <i className="bi bi-telephone text-primary me-2" aria-hidden="true" />
                  <span>Phone number pending</span>
                </div>
                <div className="d-flex flex-wrap gap-2 mt-4">
                  {footerSocials.map(([icon, label]) => (
                    <button className="btn btn-primary btn-square" key={icon} type="button" aria-label={label + " link unavailable"} disabled>
                      <i className={`fab fa-${icon} fw-normal`} aria-hidden="true" />
                    </button>
                  ))}
                </div>
              </div>
              {["Quick Links", "Popular Links"].map((title) => (
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5" key={title}>
                  <FooterHeading>{title}</FooterHeading>
                  <nav className="link-animated d-flex flex-column justify-content-start gap-2" aria-label={title}>
                    {footerLinks.map(([href, label]) => (
                      <Link className="text-light" key={href} href={href}>
                        <i className="bi bi-arrow-right text-primary me-2" aria-hidden="true" />{label}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright text-white">
        <div className="container text-center">
          <div className="row justify-content-end">
            <div className="col-lg-8 col-md-6">
              <div className="footer-copyright d-flex align-items-center justify-content-center py-3">
                <p className="mb-0">© <Link className="text-white border-bottom" href="/">VeraFide Technology Group</Link>. All Rights Reserved. Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteControls() {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function updateScroll() {
      setShowTop(window.scrollY > 100);
    }
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    let active = true;
    let accordions = [];
    let timer;

    if (document.querySelector(".accordion-collapse, [data-bs-toggle=tab]")) {
      timer = window.setTimeout(() => {
        if (!active) return;
        import("bootstrap/dist/js/bootstrap.bundle.min.js").then(({ default: bootstrap }) => {
          if (!active) return;
          accordions = Array.from(document.querySelectorAll(".accordion-collapse"), (element) =>
            bootstrap.Collapse.getOrCreateInstance(element, { toggle: false })
          );
        });
      }, 0);
    }

    return () => {
      active = false;
      window.clearTimeout(timer);
      accordions.forEach((accordion) => accordion.dispose());
    };
  }, [pathname]);

  return showTop && (
    <a href="#top" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top d-inline-flex align-items-center justify-content-center" aria-label="Back to top">
      <i className="bi bi-arrow-up" aria-hidden="true" />
    </a>
  );
}

