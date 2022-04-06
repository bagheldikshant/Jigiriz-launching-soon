import React from "react";

export default function CustomerReviews() {
  return (
    <section>
      <div class="row customer-reviews-section">
        <div class="col-lg-3.5 col-xs-12 customer-reviews-heading">
          <p>CUSTOMER REVIEWS</p>
        </div>
        <div class="col-lg-7">
          <div className="customer-reviews">
            <p className="customer-comments">
              Testimonials are short quotes from people who love your brand.
              It's a great way to convince customers to try your services.
            </p>
            <p className="customer-name">– EMILY CARRINGTON</p>
            <p className="customer-comments">
              Testimonials are short quotes from people who love your brand.
              It's a great way to convince customers to try your services.
            </p>
            <p className="customer-name">– ROBERT TEMPLE</p>
            <p className="customer-comments">
              Testimonials are short quotes from people who love your brand.
              It's a great way to convince customers to try your services.
            </p>
            <p className="customer-name">– MARY JANE HERBERT</p>
          </div>
        </div>
      </div>
      <div className="col-lg-12 about-section">
          <p className="about">ABOUT</p>
        </div>
    </section>
  );
}
