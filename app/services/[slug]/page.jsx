import Link from "next/link";
import { notFound } from "next/navigation";
import { DetailHeading } from "../../detail-heading";
import { PageMain } from "../../page-main";
import { SiteHeader } from "../../site-shell";
import { services } from "../service-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

async function getService(params) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return service;
}

export async function generateMetadata({ params }) {
  const service = await getService(params);
  return { title: service.title, description: service.summary };
}

export default async function ServiceDetailPage({ params }) {
  const service = await getService(params);
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE;
  const address = process.env.NEXT_PUBLIC_CONTACT_ADDRESS;

  return (
    <>
      <SiteHeader title={service.title} parent={{ href: "/services", label: "Services" }} />
      <PageMain>
        <div data-section-reveal="split" className="container-fluid py-5">
          <div className="container py-5">
            <div className="row g-5">
              <article className="col-lg-8">
                <img className="img-fluid w-100 rounded mb-5" src="/assets/img/detail.jpg" alt="" />
                <h2 className="mb-4">Service Overview</h2>
                <p className="lead">{service.summary}</p>
                <p>{service.approach}</p>
                <h3 className="h4 mt-4 mb-3">What the service includes</h3>
                <ul className="ps-4">
                  {service.deliverables.map((item) => <li className="mb-2" key={item}>{item}</li>)}
                </ul>
              </article>
              <aside className="col-lg-4">
                <DetailHeading>Contact Information</DetailHeading>
                <div className="bg-primary text-white rounded p-4">
                  {phone && <p><i className="bi bi-telephone me-2" aria-hidden="true" /><a className="text-white" href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a></p>}
                  {email && <p><i className="bi bi-envelope me-2" aria-hidden="true" /><a className="text-white text-break" href={`mailto:${email}`}>{email}</a></p>}
                  {address && <p><i className="bi bi-geo-alt me-2" aria-hidden="true" />{address}</p>}
                  <Link className="btn btn-light" href="/contact">Request a Quote</Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <section data-section-reveal="stagger" className="container-fluid py-5">
          <div className="container">
            <DetailHeading>Where This Service Helps</DetailHeading>
            <div className="row g-4">
              {service.useCases.map(([title, description]) => (
                <div className="col-md-4" key={title}>
                  <div className="bg-light rounded p-4 h-100">
                    <h3 className="h5">{title}</h3>
                    <p className="mb-0">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section data-section-reveal="scale" className="container-fluid py-5">
          <div className="container">
            <DetailHeading>Frequently Asked Questions</DetailHeading>
            <div className="d-grid gap-3">
              {service.questions.map(([question, answer]) => (
                <details className="bg-light rounded p-4" key={question}>
                  <summary className="fw-bold text-dark">{question}</summary>
                  <p className="mt-3 mb-0">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </PageMain>
    </>
  );
}
