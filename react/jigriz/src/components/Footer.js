import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-heading">
          <p>SPREAD HAPPINESS<br/>TODAY</p>
        </div>

        <div className="details">
          <div>
            <h4>COMPANY ADDRESS</h4>
            <p >123 Pine St, Seattle, WA</p>
          </div>
          <div>
            <h4>E-MAIL ADDRESS</h4>
            <p>info@jigiriz.com</p>
          </div>
          <div>
            <h4>PHONE NUMBER</h4>
            <p>(123) 456 7890</p>
          </div>
        </div>
        <div className="socials">
          <p>SOCIAL MEDIA</p>
          <div>
            <i class="fa fa-brands fa-instagram icons fa-lg"></i>
            <i class="fa fa-brands fa-facebook-square icons fa-lg"></i>
            <i class="fa fa-brands fa-twitter-square icons fa-lg"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
