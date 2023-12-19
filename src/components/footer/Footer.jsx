import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer class="footeronas">
      <div class="footer-content">
        <div class="office-info">
          <h3>Contact us</h3>
          <p>Addres: Gagarina 132, Almaty, Kazakhstan</p>
          <p>Phone number: +7 (771) 681-9404</p>
          <p>Email: kerimkul.raha@mail.ru</p>
        </div>
        <div class="social-media">
          <h3>Our social media</h3>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/raha.kerimkul/"
                target="_blank"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                  className="instagram-icon"
                ></img>
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCBmH04TDZWoKe-0pKwzrk9w"
                target="_blank"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
                  className="youtube-icon"
                ></img>
                Youtube
              </a>
            </li>
            <li>
              <a href="https://github.com/rahatkerimkul" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  className="github-icon"
                ></img>
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; 2023 CUSSO. All rights reserved.</p>
      </div>
        
    </footer>
  );
}
export default Footer;
