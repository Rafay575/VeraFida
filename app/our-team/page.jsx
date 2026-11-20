import { PageMain } from "../page-main";
import { TeamCarousel } from "../team-carousel";
import { SiteHeader } from "../site-shell";

export const metadata = { title: "Our Team" };

export default function Page() {
  return (
    <>
      <SiteHeader title="Our Team" />
      <PageMain>
        <div data-section-reveal="scale" className="container-fluid py-5">
          <div className="container py-5">
            <div className="section-title-1 text-center position-relative pb-3 mb-5 mx-auto" style={{"maxWidth":"600px"}}>
              <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
              <h2 className="mb-0">Professional Stuffs Ready to Help Your Business</h2>
            </div>
            <TeamCarousel />
          </div>
        </div>
      </PageMain>
    </>
  );
}
