import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>Follow us on social media:</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/">Facebook</a>
          </li>
          <li>
            <a href="https://www.twitter.com/">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
        </ul>
      </div>
      <div>
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
