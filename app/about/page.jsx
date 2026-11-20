import { PageMain } from "../page-main";
import { TeamCarousel } from "../team-carousel";
import { SiteHeader } from "../site-shell";

export const metadata = { title: "About Us" };

export default function Page() {
  return (
    <>
      <SiteHeader title="About Us" />
      <PageMain>
        <div data-section-reveal="stagger" className="container-fluid py-5">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-4">
                <div className="bg-light rounded border-top border-5 border-primary d-flex flex-column align-items-center text-center p-5">
                  <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-4" style={{"width":"75px","height":"75px"}}><i className="fa fa-award fa-2x text-white"></i></div>
                  <h3>Award Winning</h3>
                  <p className="mb-0">Eos vero dolore eirmod diam duo lorem magna sit sea dolore sanctus sed et</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-light rounded border-top border-5 border-primary d-flex flex-column align-items-center text-center p-5">
                  <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-4" style={{"width":"75px","height":"75px"}}><i className="fa fa-users fa-2x text-white"></i></div>
                  <h3>Professional Staff</h3>
                  <p className="mb-0">Eos vero dolore eirmod diam duo lorem magna sit sea dolore sanctus sed et</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-light rounded border-top border-5 border-primary d-flex flex-column align-items-center text-center p-5">
                  <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-4" style={{"width":"75px","height":"75px"}}><i className="fa fa-phone-alt fa-2x text-white"></i></div>
                  <h3>24/7 Support</h3>
                  <p className="mb-0">Eos vero dolore eirmod diam duo lorem magna sit sea dolore sanctus sed et</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-section-reveal="split" className="container-fluid py-5">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="section-title-2 position-relative pb-3 mb-5">
                  <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                  <h2 className="mb-0">The Best IT Solution With 10 Years of Experience</h2>
                </div>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                <div className="border rounded p-4">
                  <nav>
                    <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                      <button className="nav-link text-uppercase active" id="nav-story-tab" data-bs-toggle="tab" data-bs-target="#nav-story" type="button" role="tab" aria-controls="nav-story" aria-selected="true">Story</button>
                      <button className="nav-link text-uppercase" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" type="button" role="tab" aria-controls="nav-mission" aria-selected="false">Mission</button>
                      <button className="nav-link text-uppercase" id="nav-vision-tab" data-bs-toggle="tab" data-bs-target="#nav-vision" type="button" role="tab" aria-controls="nav-vision" aria-selected="false">Vision</button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-story" role="tabpanel" aria-labelledby="nav-story-tab">
                      <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit</p>
                      <div className="row g-3">
                        <div className="col-sm-6">
                          <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                          <h5 className="mb-0"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                        </div>
                        <div className="col-sm-6">
                          <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                          <h5 className="mb-0"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                      <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit</p>
                      <div className="row g-3">
                        <div className="col-sm-6">
                          <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                          <h5 className="mb-0"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                        </div>
                        <div className="col-sm-6">
                          <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                          <h5 className="mb-0"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                      <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit</p>
                      <div className="row g-3">
                        <div className="col-sm-6">
                          <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                          <h5 className="mb-0"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                        </div>
                        <div className="col-sm-6">
                          <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                          <h5 className="mb-0"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5" style={{"minHeight":"400px"}}>
                <div className="position-relative h-100">
                  <img className="position-absolute w-100 h-100 rounded" src="/assets/img/about.jpg" style={{"objectFit":"cover"}} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-section-reveal="split" className="container-fluid py-5">
          <div className="container py-5">
            <div className="section-title-2 text-center position-relative pb-3 mb-5 mx-auto" style={{"maxWidth":"600px"}}>
              <h5 className="fw-bold text-primary text-uppercase">Our Story</h5>
              <h2 className="mb-0">10 Years of Our Journey to Help Your Business</h2>
            </div>
            <div className="container story position-relative">
              <div className="row mb-5">
                <div className="col-12 text-md-center">
                  <div className="d-inline-block bg-primary text-white rounded py-2 px-4">Now</div>
                </div>
              </div>
              <div className="row gx-5 story-right position-relative mb-5">
                <div className="col-md-6 text-md-end">
                  <h6 className="fw-bold mb-3 ms-3 ms-md-0">01 Jun, 2021</h6>
                </div>
                <div className="col-md-6">
                  <div className="story-text position-relative d-inline-block bg-light p-4 ms-3 ms-md-0">
                    <h4>Lorem ipsum dolor</h4>
                    <p className="m-0">Lorem ipsum dolor sit amet elit ornare velit non</p>
                  </div>
                </div>
              </div>
              <div className="row gx-5 story-left position-relative mb-5">
                <div className="col-md-6 d-block d-md-none">
                  <h6 className="fw-bold mb-3 ms-3 ms-md-0">01 Jan, 2021</h6>
                </div>
                <div className="col-md-6 text-md-end">
                  <div className="story-text position-relative d-inline-block bg-light p-4 ms-3 ms-md-0">
                    <h4>Lorem ipsum dolor</h4>
                    <p className="m-0">Lorem ipsum dolor sit amet elit ornare velit non</p>
                  </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                  <h6 className="fw-bold mb-3 ms-3 ms-md-0">01 Jan, 2021</h6>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 text-md-center">
                  <div className="d-inline-block bg-primary text-white rounded py-2 px-4">2020</div>
                </div>
              </div>
              <div className="row gx-5 story-right position-relative mb-5">
                <div className="col-md-6 text-md-end">
                  <h6 className="fw-bold mb-3 ms-3 ms-md-0">01 Jun, 2020</h6>
                </div>
                <div className="col-md-6">
                  <div className="story-text position-relative d-inline-block bg-light p-4 ms-3 ms-md-0">
                    <h4>Lorem ipsum dolor</h4>
                    <p className="m-0">Lorem ipsum dolor sit amet elit ornare velit non</p>
                  </div>
                </div>
              </div>
              <div className="row gx-5 story-left position-relative mb-5">
                <div className="col-md-6 d-block d-md-none">
                  <h6 className="fw-bold mb-3 ms-3 ms-md-0">01 Jan, 2020</h6>
                </div>
                <div className="col-md-6 text-md-end">
                  <div className="story-text position-relative d-inline-block bg-light p-4 ms-3 ms-md-0">
                    <h4>Lorem ipsum dolor</h4>
                    <p className="m-0">Lorem ipsum dolor sit amet elit ornare velit non</p>
                  </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                  <h6 className="fw-bold mb-3 ms-3 ms-md-0">01 Jan, 2020</h6>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 text-md-center">
                  <div className="d-inline-block bg-primary text-white rounded py-2 px-4">2019</div>
                </div>
              </div>
              <div className="row gx-5 story-right position-relative mb-5">
                <div className="col-md-6 text-md-end">
                  <h6 className="fw-bold mb-3 ms-3 ms-md-0">01 Jun, 2019</h6>
                </div>
                <div className="col-md-6">
                  <div className="story-text position-relative d-inline-block bg-light p-4 ms-3 ms-md-0">
                    <h4>Lorem ipsum dolor</h4>
                    <p className="m-0">Lorem ipsum dolor sit amet elit ornare velit non</p>
                  </div>
                </div>
              </div>
              <div className="row gx-5 story-left position-relative mb-5">
                <div className="col-md-6 d-block d-md-none">
                  <h6 className="fw-bold mb-3 ms-3 ms-md-0">01 Jan, 2019</h6>
                </div>
                <div className="col-md-6 text-md-end">
                  <div className="story-text position-relative d-inline-block bg-light p-4 ms-3 ms-md-0">
                    <h4>Lorem ipsum dolor</h4>
                    <p className="m-0">Lorem ipsum dolor sit amet elit ornare velit non</p>
                  </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                  <h6 className="fw-bold mb-3 ms-3 ms-md-0">01 Jan, 2019</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-md-center">
                  <div className="d-inline-block bg-primary text-white rounded py-2 px-4">Launched</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-section-reveal="scale" className="container-fluid py-5">
          <div className="container py-5">
            <div className="section-title-2 text-center position-relative pb-3 mb-5 mx-auto" style={{"maxWidth":"600px"}}>
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
