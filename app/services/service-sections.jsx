import { AutoCarousel } from "../auto-carousel";

export function ServiceProcess() {
  return (
    <div data-section-reveal="stagger" className="container-fluid py-5">
      <div className="container py-5">
        <div className="section-title-1 text-center position-relative pb-3 mb-5 mx-auto" style={{"maxWidth":"600px"}}>
          <h5 className="fw-bold text-primary text-uppercase">Work Process</h5>
          <h2 className="mb-0">Step By Step Simple &amp; Clean Working Process</h2>
        </div>
        <div className="row g-5">
          <div className="col-lg-3 col-md-6 process-item">
            <div className="position-relative d-flex flex-column align-items-center text-center">
              <div className="process-icon bg-primary rounded d-flex align-items-center justify-content-center mb-4"><i className="fa fa-search fa-2x text-white"></i></div>
              <h3>Research</h3>
              <p className="mb-0">Eos vero dolore eirmod diam duo lorem magna sit sea dolore sanctus sed et</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 process-item">
            <div className="position-relative d-flex flex-column align-items-center text-center">
              <div className="process-icon bg-primary rounded d-flex align-items-center justify-content-center mb-4"><i className="fa fa-sitemap fa-2x text-white"></i></div>
              <h3>Concept</h3>
              <p className="mb-0">Eos vero dolore eirmod diam duo lorem magna sit sea dolore sanctus sed et</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 process-item">
            <div className="position-relative d-flex flex-column align-items-center text-center">
              <div className="process-icon bg-primary rounded d-flex align-items-center justify-content-center mb-4"><i className="fa fa-code fa-2x text-white"></i></div>
              <h3>Development</h3>
              <p className="mb-0">Eos vero dolore eirmod diam duo lorem magna sit sea dolore sanctus sed et</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 process-item">
            <div className="position-relative d-flex flex-column align-items-center text-center">
              <div className="process-icon bg-primary rounded d-flex align-items-center justify-content-center mb-4"><i className="fa fa-check fa-2x text-white"></i></div>
              <h3>Finalization</h3>
              <p className="mb-0">Eos vero dolore eirmod diam duo lorem magna sit sea dolore sanctus sed et</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServiceTestimonials() {
  return (
    <div data-section-reveal="scale" className="container-fluid py-5">
      <div className="container py-5">
        <div className="section-title-1 text-center position-relative pb-3 mb-4 mx-auto" style={{"maxWidth":"600px"}}>
          <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
          <h2 className="mb-0">What Our Clients Say About Our Digital Services</h2>
        </div>
        <AutoCarousel label="Testimonials" className="testimonial-carousel" controls>
          <div className="testimonial-item bg-light my-4">
            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img className="img-fluid rounded" src="/assets/img/testimonial-1.jpg" style={{"width":"60px","height":"60px"}} alt="" />
              <div className="ps-4">
                <h4 className="text-primary mb-1">Client Name</h4>
                <small className="text-uppercase">Profession</small>
              </div>
            </div>
            <div className="pt-4 pb-5 px-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</div>
          </div>
          <div className="testimonial-item bg-light my-4">
            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img className="img-fluid rounded" src="/assets/img/testimonial-2.jpg" style={{"width":"60px","height":"60px"}} alt="" />
              <div className="ps-4">
                <h4 className="text-primary mb-1">Client Name</h4>
                <small className="text-uppercase">Profession</small>
              </div>
            </div>
            <div className="pt-4 pb-5 px-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</div>
          </div>
          <div className="testimonial-item bg-light my-4">
            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img className="img-fluid rounded" src="/assets/img/testimonial-3.jpg" style={{"width":"60px","height":"60px"}} alt="" />
              <div className="ps-4">
                <h4 className="text-primary mb-1">Client Name</h4>
                <small className="text-uppercase">Profession</small>
              </div>
            </div>
            <div className="pt-4 pb-5 px-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</div>
          </div>
          <div className="testimonial-item bg-light my-4">
            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img className="img-fluid rounded" src="/assets/img/testimonial-4.jpg" style={{"width":"60px","height":"60px"}} alt="" />
              <div className="ps-4">
                <h4 className="text-primary mb-1">Client Name</h4>
                <small className="text-uppercase">Profession</small>
              </div>
            </div>
            <div className="pt-4 pb-5 px-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</div>
          </div>
        </AutoCarousel>
      </div>
    </div>
  );
}
