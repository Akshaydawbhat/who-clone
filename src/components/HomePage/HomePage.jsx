import React from "react";
import style from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section>
      <article>
        <main className={style.main}>
          {/* background Image */}
          <div className={style.background_main}>
            {/* About us */}
            <div className={style.about_us}>
              <p>About us</p>
              <Link to={"/About"} className={style.learn_more}>
                Learn more
              </Link>
            </div>

            {/* credits */}
            <Link className={style.credits}>
              <p>Credits</p>
              <i class="fa-solid fa-plus" className={style.plusIcon}></i>
            </Link>
          </div>

          {/* Cards Section */}
          <div className={style.cards}>
            <div className={style.cardDiv}>
              {/* Emergencies Card Section */}
              <div className={style.emergencies_main}>
                <div className={style.emergencies}>
                  <div className={style.emergencies_left}>Emergencies</div>
                  <div>
                    <Link className={style.emergencies_right}>
                      All
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>

                <div className={style.emergencies_cards}>
                  <div className={style.emergencies_cards1}>
                    <h3>COVID-19</h3>
                    <img
                      src="https://www.who.int/images/default-source/wpro/coronavirus-2.jpg?sfvrsn=f3ceff40_17"
                      alt=""
                    />
                    <a href="https://www.google.com/maps">Advice, data and research</a>
                  </div>
                  <div className={style.emergencies_cards1}>
                    <h3>Mpox (Monkeypox)</h3>
                    <img
                      src="https://cdn.who.int/media/images/default-source/health-topics/monkeypox/12763.jpg?sfvrsn=cd044fbd_25"
                      alt=""
                    />
                    <a href="https://www.google.com/maps">Facts and Trends</a>
                  </div>
                  <div className={style.emergencies_cards1}>
                    <h3>Ukraine</h3>
                    <img src="https://cdn.who.int/media/images/default-source/emergencies/ukraine/kst_0322-9281.jpg?sfvrsn=4a225714_6" alt="" />
                    <a href="">Situation and response</a>
                  </div>
                  <div className={style.emergencies_cards1}>
                    <h3>Greater Horn of Africa</h3>
                    <img src="https://cdn.who.int/media/images/default-source/emergencies/somalia_measles_exr.jpg?sfvrsn=78be980c_1" alt="" />
                    <a href="">Situation and response</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </article>
    </section>
  );
};

export default HomePage;
