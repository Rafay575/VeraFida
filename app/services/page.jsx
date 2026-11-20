import { PageMain } from "../page-main";
import { services } from "./service-data";
import { ServiceProcess, ServiceTestimonials } from "./service-sections";
import Link from "next/link";
import { SiteHeader } from "../site-shell";

export const metadata = { title: "Services" };

export default function Page() {
  return (
    <>
      <SiteHeader title="Services" />
      <PageMain>
        <div data-section-reveal="stagger" className="container-fluid py-5">
          <div className="container py-5">
            <div className="section-title-1 text-center position-relative pb-3 mb-5 mx-auto" style={{"maxWidth":"600px"}}>
              <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
              <h2 className="mb-0">Custom IT Solutions for Your Successful Business</h2>
            </div>
            <div className="row g-5">
              {services.map((service) => (
                <div className="col-lg-4 col-md-6" key={service.slug}>
                  <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon"><i className={service.icon + " text-white"} aria-hidden="true" /></div>
                    <h3 className="h4 mb-3"><Link className="text-dark" href={`/services/${service.slug}`}>{service.title}</Link></h3>
                    <p className="m-0">{service.summary}</p>
                    <Link className="btn btn-lg btn-primary rounded" href={`/services/${service.slug}`} aria-label={"Explore " + service.title}><i className="bi bi-arrow-right" aria-hidden="true" /></Link>
                  </div>
                </div>
              ))}
              <div className="col-lg-4 col-md-6">
                <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                  <h3 className="text-white mb-3">Call Us For Quote</h3>
                  <p className="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                  <Link href="/contact" className="h4 text-white">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ServiceProcess />
        <ServiceTestimonials />
      </PageMain>
    </>
  );
}
