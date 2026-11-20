import { PageMain } from "../page-main";
import { SiteHeader } from "../site-shell";
import { ContactForm } from "./contact-form";

export const metadata = { title: "Contact" };

export default function Page() {
  return (
    <>
      <SiteHeader title="Contact" />
      <PageMain>
        <div data-section-reveal="scale" className="container-fluid py-5">
          <div className="container py-5">
            <div className="section-title-1 text-center position-relative pb-3 mb-5 mx-auto" style={{"maxWidth":"600px"}}>
              <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
              <h2 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h2>
            </div>
            <div className="row g-5">
              <div className="col-lg-8 mx-auto">
                <div className="contact-form">
                  <ContactForm>
                    <div className="row g-3 mb-3">
                      <div className="col-sm-6 control-group">
                        <div className="form-floating">
                          <input type="text" className="form-control border-0 bg-light py-2" id="name" placeholder="Your Name" required name="name" />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-sm-6 control-group">
                        <div className="form-floating">
                          <input type="email" className="form-control border-0 bg-light py-2" id="email" placeholder="Your Email" required name="email" />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-sm-6 control-group">
                        <div className="form-floating">
                          <input type="tel" className="form-control border-0 bg-light py-2" id="mobile" placeholder="Mobile" required name="mobile" />
                          <label htmlFor="mobile">Mobile</label>
                        </div>
                      </div>
                      <div className="col-sm-6 control-group">
                        <div className="form-floating">
                          <input type="text" className="form-control border-0 bg-light py-2" id="subject" placeholder="Subject" required name="subject" />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12 control-group">
                        <div className="form-floating">
                          <textarea style={{"height":"165px"}} className="form-control border-0 bg-light" id="message" placeholder="Message" required name="message"></textarea>
                          <label htmlFor="message">Leave a message here</label>
                        </div>
                      </div>
                    </div>
                  </ContactForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageMain>
    </>
  );
}
