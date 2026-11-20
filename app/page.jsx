import { articles } from "./blog/articles";
import { PageMain } from "./page-main";
import { HeroCarousel } from "./hero-carousel";
import { AutoCarousel } from "./auto-carousel";
import { TeamCarousel } from "./team-carousel";
import Link from "next/link";
import { SiteHeader } from "./site-shell";

export default function Page() {
  return (
    <>
      <SiteHeader>
        <HeroCarousel />
      </SiteHeader>
      <PageMain>
        <div data-section-reveal="split" className="container-fluid pt-5">
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

        <div data-section-reveal="stagger" className="container-fluid facts pb-5 pt-lg-0 mt-0">
          <div className="container py-5 pt-lg-0">
            <div className="row gx-0">
              <div className="col-lg-4">
                <div className="bg-primary d-flex align-items-center justify-content-center p-4" style={{"height":"150px"}}>
                  <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{"width":"60px","height":"60px"}}><i className="fa fa-users text-primary"></i></div>
                  <div className="ps-4">
                    <h5 className="text-white mb-0">Happy Clients</h5>
                    <h2 className="text-white mb-0">12345</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-dark d-flex align-items-center justify-content-center p-4" style={{"height":"150px"}}>
                  <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{"width":"60px","height":"60px"}}><i className="fa fa-check text-primary"></i></div>
                  <div className="ps-4">
                    <h5 className="text-white mb-0">Projects Done</h5>
                    <h2 className="text-white mb-0">12345</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-primary d-flex align-items-center justify-content-center p-4" style={{"height":"150px"}}>
                  <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{"width":"60px","height":"60px"}}><i className="fa fa-award text-primary"></i></div>
                  <div className="ps-4">
                    <h5 className="text-white mb-0">Win Awards</h5>
                    <h2 className="text-white mb-0">12345</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-section-reveal="split" className="container-fluid py-5">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="section-title-2 position-relative pb-3 mb-5">
                  <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
                  <h2 className="mb-0">We Are Here to Grow Your Business Exponentially</h2>
                </div>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem</p>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">HTML</p>
                    <p className="mb-2">95%</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="95" style={{ width: "95%" }} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">CSS</p>
                    <p className="mb-2">85%</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="85" style={{ width: "85%" }} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">PHP</p>
                    <p className="mb-2">90%</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="90" style={{ width: "90%" }} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Javascript</p>
                    <p className="mb-2">90%</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="90" style={{ width: "90%" }} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Angular JS</p>
                    <p className="mb-2">95%</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="95" style={{ width: "95%" }} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Wordpress</p>
                    <p className="mb-2">85%</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="85" style={{ width: "85%" }} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row gy-3 gx-5">
                  <div className="col-sm-6">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{"width":"60px","height":"60px"}}><i className="fa fa-cubes text-white"></i></div>
                    <h4>Best In Industry</h4>
                    <p>Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                  </div>
                  <div className="col-sm-6">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{"width":"60px","height":"60px"}}><i className="fa fa-award text-white"></i></div>
                    <h4>Award Winning</h4>
                    <p>Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                  </div>
                  <div className="col-sm-6">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{"width":"60px","height":"60px"}}><i className="fa fa-users-cog text-white"></i></div>
                    <h4>Professional Staff</h4>
                    <p>Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                  </div>
                  <div className="col-sm-6">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{"width":"60px","height":"60px"}}><i className="fa fa-users text-white"></i></div>
                    <h4>Happy Clients</h4>
                    <p>Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                  </div>
                  <div className="col-sm-6">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{"width":"60px","height":"60px"}}><i className="fa fa-check text-white"></i></div>
                    <h4>100% Success Rate</h4>
                    <p>Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                  </div>
                  <div className="col-sm-6">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{"width":"60px","height":"60px"}}><i className="fa fa-phone-alt text-white"></i></div>
                    <h4>24/7 Support</h4>
                    <p>Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-section-reveal="split" className="container-fluid py-5">
          <div className="container py-5">
            <div className="row g-5 mb-5">
              <div className="col-lg-5" style={{"minHeight":"400px"}}>
                <div className="position-relative h-100">
                  <img className="position-absolute w-100 h-100 rounded" src="/assets/img/feature.jpg" style={{"objectFit":"cover"}} alt="" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="section-title-2 position-relative pb-3 mb-5">
                  <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
                  <h2 className="mb-0">Custom IT Solutions for Your Successful Business</h2>
                </div>
                <div className="row g-5">
                  <div className="col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="service-icon"><i className="fa fa-user-md text-white"></i></div>
                      <h4 className="mb-3"><Link className="text-dark" href="/services/cyber-security">Cyber Security</Link></h4>
                      <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                      <Link className="btn btn-lg btn-primary rounded" href="/services/cyber-security" aria-label="Explore Cyber Security"><i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="service-icon"><i className="fa fa-user-md text-white"></i></div>
                      <h4 className="mb-3"><Link className="text-dark" href="/services/data-analytics">Data Analytics</Link></h4>
                      <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                      <Link className="btn btn-lg btn-primary rounded" href="/services/data-analytics" aria-label="Explore Data Analytics"><i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="row g-5">
                  <div className="col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="service-icon"><i className="fa fa-user-md text-white"></i></div>
                      <h4 className="mb-3"><Link className="text-dark" href="/services/web-development">Web Development</Link></h4>
                      <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                      <Link className="btn btn-lg btn-primary rounded" href="/services/web-development" aria-label="Explore Web Development"><i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="service-icon"><i className="fa fa-user-md text-white"></i></div>
                      <h4 className="mb-3"><Link className="text-dark" href="/services/seo-optimization">SEO Optimization</Link></h4>
                      <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                      <Link className="btn btn-lg btn-primary rounded" href="/services/seo-optimization" aria-label="Explore SEO Optimization"><i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                  <h3 className="text-white mb-3">Call Us For A Quote</h3>
                  <p className="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                  <Link href="/contact" className="h4 text-white">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-section-reveal="stagger" className="container-fluid py-5">
          <div className="container py-5">
            <div className="section-title-2 text-center position-relative pb-3 mb-5 mx-auto" style={{"maxWidth":"600px"}}>
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

        {/* <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="section-title-2 text-center position-relative pb-3 mb-5 mx-auto" style={{"maxWidth":"600px"}}>
              <h5 className="fw-bold text-primary text-uppercase">Pricing Plans</h5>
              <h2 className="mb-0">We are Offering Competitive Prices for Our Clients</h2>
            </div>
            <div className="row g-0">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <table className="price-table table align-middle table-hover mb-0">
                    <thead className="table-light align-top">
                      <tr>
                        <th>
                          <h4 className="text-primary mb-1">Features</h4>
                          <small className="text-uppercase fw-normal text-body">List of Features</small>
                        </th>
                        <th>
                          <h4 className="text-primary mb-1">Basic</h4>
                          <small className="text-uppercase fw-normal text-body">For Small Size Business</small>
                          <h4 className="mt-2 mb-0">Free</h4>
                        </th>
                        <th>
                          <h4 className="text-primary mb-1">Standard</h4>
                          <small className="text-uppercase fw-normal text-body">For Medium Size Business</small>
                          <h4 className="mt-2 mb-0">$49.00 / mo</h4>
                        </th>
                        <th>
                          <h4 className="text-primary mb-1">Advanced</h4>
                          <small className="text-uppercase fw-normal text-body">For Large Size Business</small>
                          <h4 className="mt-2 mb-0">$99.00 / mo</h4>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1. HTML5 &amp; CSS3</td>
                        <td><i className="fa fa-check text-primary"></i></td>
                        <td><i className="fa fa-check text-primary"></i></td>
                        <td><i className="fa fa-check text-primary"></i></td>
                      </tr>
                      <tr>
                        <td>2. Bootstrap v5</td>
                        <td><i className="fa fa-check text-primary"></i></td>
                        <td><i className="fa fa-check text-primary"></i></td>
                        <td><i className="fa fa-check text-primary"></i></td>
                      </tr>
                      <tr>
                        <td>3. Responsive Layout</td>
                        <td><i className="fa fa-check text-primary"></i></td>
                        <td><i className="fa fa-check text-primary"></i></td>
                        <td><i className="fa fa-check text-primary"></i></td>
                      </tr>
                      <tr>
                        <td>4. Cross-browser Support</td>
                        <td><i className="fa fa-times text-danger"></i></td>
                        <td><i className="fa fa-check text-primary"></i></td>
                        <td><i className="fa fa-check text-primary"></i></td>
                      </tr>
                      <tr>
                        <td>5. Support with Email</td>
                        <td><i className="fa fa-times text-danger"></i></td>
                        <td><i className="fa fa-times text-danger"></i></td>
                        <td><i className="fa fa-check text-primary"></i></td>
                      </tr>
                    </tbody>
                    <tfoot style={{"borderColor":"#FFFFFF"}}>
                      <tr>
                        <th></th>
                        <th><Link className="btn btn-primary py-2 px-4" href="/contact">Sign Up</Link></th>
                        <th><Link className="btn btn-primary py-2 px-4" href="/contact">Order Now</Link></th>
                        <th><Link className="btn btn-primary py-2 px-4" href="/contact">Order Now</Link></th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div data-section-reveal="split" className="container-fluid py-5">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="section-title-2 position-relative pb-3 mb-5">
                  <h5 className="fw-bold text-primary text-uppercase">General FAQs</h5>
                  <h2 className="mb-0">Any Question? Check the FAQs or Contact Us</h2>
                </div>
                <p className="mb-4">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
              </div>
              <div className="col-lg-6">
                <div className="accordion accordion-custom" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button fw-semi-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How to build a website?</button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed fw-semi-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">How long will it take to get a new website?</button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed fw-semi-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Do you only create HTML websites?</button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed fw-semi-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Will my website be mobile-friendly?</button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed fw-semi-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Will you maintain my site for me?</button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-section-reveal="scale" className="container-fluid py-5">
          <div className="container py-5">
            <div className="section-title-2 text-center position-relative pb-3 mb-4 mx-auto" style={{"maxWidth":"600px"}}>
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

        <div data-section-reveal="split" className="container-fluid py-5" id="request-quote">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="section-title-2 position-relative pb-3 mb-5">
                  <h5 className="fw-bold text-primary text-uppercase">Request A Quote</h5>
                  <h2 className="mb-0">Need A Free Quote? Please Feel Free to Contact Us</h2>
                </div>
                <div className="row gx-3">
                  <div className="col-sm-6">
                    <h5 className="mb-4"><i className="fa fa-reply text-primary me-3"></i>Reply within 24 hours</h5>
                  </div>
                  <div className="col-sm-6">
                    <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3"></i>24 hrs telephone support</h5>
                  </div>
                </div>
                <p className="mb-4">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                <div className="d-flex align-items-center mt-2">
                  <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{"width":"60px","height":"60px"}}><i className="fa fa-phone-alt text-white"></i></div>
                  <div className="ps-4">
                    <h5 className="mb-2">Have a question?</h5>
                    <Link href="/contact" className="h5 text-primary">Contact Us</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="bg-primary rounded h-100 d-flex align-items-center p-5"><Link href="/contact" className="btn btn-dark w-100 py-3">Request a Quote</Link></div>
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

        <div data-section-reveal="stagger" className="container-fluid py-5">
          <div className="container py-5">
            <div className="section-title-2 text-center position-relative pb-3 mb-5 mx-auto" style={{"maxWidth":"600px"}}>
              <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
              <h2 className="mb-0">Read The Latest Articles from Our Blog Post</h2>
            </div>
            <div className="row g-5">
              {articles.map((article) => (
                <article className="col-lg-4" key={article.slug}>
                  <div className="blog-item bg-light rounded overflow-hidden h-100">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid w-100" src={article.image} alt="" loading="lazy" />
                      <span className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4">{article.category}</span>
                    </div>
                    <div className="p-4">
                      <h3 className="h4 mb-3">{article.title}</h3>
                      <p>{article.excerpt}</p>
                      <Link className="text-uppercase" href={`/blog/${article.slug}`}>Read more<span className="visually-hidden"> about {article.title}</span> <i className="bi bi-arrow-right" aria-hidden="true" /></Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div data-section-reveal="scale" className="container-fluid py-5">
          <div className="container py-5 mb-5">
            <div className="bg-white">
              <AutoCarousel label="Partner logos" className="partner-carousel" interval={3000}>
                <img src="/assets/img/vendor-1.jpg" alt="" width="150" height="50" />
                <img src="/assets/img/vendor-2.jpg" alt="" width="150" height="50" />
                <img src="/assets/img/vendor-3.jpg" alt="" width="150" height="50" />
                <img src="/assets/img/vendor-4.jpg" alt="" width="150" height="50" />
                <img src="/assets/img/vendor-5.jpg" alt="" width="150" height="50" />
                <img src="/assets/img/vendor-6.jpg" alt="" width="150" height="50" />
                <img src="/assets/img/vendor-7.jpg" alt="" width="150" height="50" />
                <img src="/assets/img/vendor-8.jpg" alt="" width="150" height="50" />
                <img src="/assets/img/vendor-9.jpg" alt="" width="150" height="50" />
              </AutoCarousel>
            </div>
          </div>
        </div>
      </PageMain>
    </>
  );
}
