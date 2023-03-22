import React from "react";
import "./Hall.scss";

function Hall() {
  return (
    <section className="hall">
      <p className="hall__text">
        The newly renovated church hall is offered for rent to the neighboring
        community and interested groups and societies for social events and
        private celebrations.
      </p>
      <h3 className="hall__heading">
        To find out if your date is still available and to arrange a viewing of
        the facility call today:
      </h3>
      <div className="hall__item">
        <p className="hall__name">Fred Meanchoff</p>
        <p>
          Tel.{" "}
          <a className="hall__contact" href="tel:416-483-5366">
            416 483-5366
          </a>
        </p>
        <p>
            email:
          <a
            className="hall__contact"
            href="mailto:ourholytrinitymbc@gmail.com"
            target="_blank"
          >
            ourholytrinitymbc@gmail.com
          </a>
        </p>
      </div>
      <h3 className="hall__heading">Hall features:</h3>
      <ul className="hall__list">
        <li className="hall__item">
          450 sq. m. (approx. 4000 sq. ft.) main floor with additional stage
          space of approximately 120 sq. m. (1000 sq. ft.) to accommodate up to
          120 seating guests.
        </li>
        <li>Ceiling height 11 ft.</li>
        <li>
          Adjacent to the hall is a fully equipped up-to-date restaurant-style
          kitchen.
        </li>
        <li>
          The hall can be quickly set-up with rows of seats theatre style.
        </li>
        <li>Bar section.</li>
        <li>
          Optional use of the church courtyard and garden (weather permitting).
        </li>
        <li>Parking lot available</li>
        <li>The hall is air-conditioned.</li>
        <li>
          The hall is fully up to the standards and requirements for public
          facilities in Ontario.
        </li>
        <li>
          Available year-round weekday evenings; all day Saturdays and Sundays
          after 2 PM.
        </li>
      </ul>
    </section>
  );
}

export default Hall;
