import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <article>
          <section>
            <div id={style.mainDiv}>
              <div id={style.footerMenu}>
                <div className={style.footerMenuCards}>
                  <h2>
                    <a href="">Regions</a>
                  </h2>
                  <ul>
                    <li>
                      <a href="https://www.afro.who.int" target="_blank">
                        Africa
                      </a>
                    </li>
                    <li>
                      <a href="">Americas</a>
                    </li>
                    <li>
                      <a href="">Eastern Mediterranean</a>
                    </li>
                    <li>
                      <a href="">Europe</a>
                    </li>
                    <li>
                      <a href="">South-East Asia</a>
                    </li>
                    <li>
                      <a href="">Western Pacific</a>
                    </li>
                  </ul>
                </div>
                <div className={style.footerMenuCards}>
                  <h2>
                    <a href="">Policies</a>
                  </h2>
                  <ul>
                    <li>
                      <a href="">Cyber security</a>
                    </li>
                    <li>
                      <a href="">Ethics</a>
                    </li>
                    <li>
                      <a href="">Permissions and licensing</a>
                    </li>
                    <li>
                      <a href="">Preventing sexual exploitation</a>
                    </li>
                    <li>
                      <a href="">Terms of use</a>
                    </li>
                  </ul>
                </div>
                <div className={style.footerMenuCards}>
                  <h2>
                    <a href="">About us</a>
                  </h2>
                  <ul>
                    <li>
                      <a href="">Careers</a>
                    </li>
                    <li>
                      <a href="">Library</a>
                    </li>
                    <li>
                      <a href="">Procurement</a>
                    </li>
                    <li>
                      <a href="">Publications</a>
                    </li>
                    <li>
                      <a href="">Frequently asked questions</a>
                    </li>
                    <li>
                      <a href="">Contact us</a>
                    </li>
                  </ul>
                </div>
                <div className={style.footerMenuCards}>
                  <a href="">
                    <button>Subscribe to our newsletters</button>
                  </a>
                </div>
              </div>

              {/* ********* Footer Logo section ********* */}
              <div className={style.footerLogo}>
                <a href="">
                  <img
                    src="https://www.who.int/ResourcePackages/WHO/assets/dist/images/logos/en/h-logo-white.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>

            {/* *********** Footer End Section ************ */}
            <div className={style.bottomFooter}>
              <div><a href="">Privacy Legal Notice</a></div>
              <div className={style.bottomFooterIcons}>
              <a href=""><i class="fa-brands fa-youtube fa-xs"></i></a>
              <a href=""><i class="fa-brands fa-twitter"></i></a>
              <a href=""><i class="fa-brands fa-facebook-f fa-lg"></i></a>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
              <a href=""><i class="fa-brands fa-linkedin"></i></a>
              <a href=""><i class="fa-brands fa-snapchat"></i></a>
              <a href=""><i class="fa-brands fa-tiktok"></i></a>
              </div>
              <div> 
              &copy; 2023
              <a href=""> WHO </a>
              </div>
            </div>
          </section>
        </article>
      </footer>
    </>
  );
};

export default Footer;
