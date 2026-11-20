import { AutoCarousel } from "./auto-carousel";

const portraits = ["team-1.jpg", "team-2.jpg", "team-3.jpg"];

export function TeamCarousel() {
  return (
    <AutoCarousel label="Team members" className="team-carousel" controls>
      {portraits.map((portrait) => (
        <article className="team-item bg-light rounded overflow-hidden" key={portrait}>
          <div className="team-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src={`/assets/img/${portrait}`} alt="" width="500" height="500" />
          </div>
          <div className="text-center py-4">
            <h3 className="h4 text-primary">Full Name</h3>
            <p className="text-uppercase m-0">Designation</p>
          </div>
        </article>
      ))}
    </AutoCarousel>
  );
}

