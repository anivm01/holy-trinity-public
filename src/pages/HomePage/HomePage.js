import React from "react";
import "./HomePage.scss";
import { useLanguage } from "../../utils/LanguageContext";
import WeeklyAnnouncement from "../../components/WeeklyAnnouncement/WeeklyAnnouncement";
import { API_URL } from "../../utils/api";
import NextEvent from "../../components/NextEvent/NextEvent";
import LatestNews from "../../components/LatestNews/LatestNews";
import LatestWorshipOffice from "../../components/LatestWorshipOffice/LatestWorshipOffice";
import parishPriest from "../../assets/parish-priest.jpg"
import { Link } from "react-router-dom";
function HomePage() {
  const language = useLanguage();
  const currentDate = Math.floor(Date.now() / 1000);

  return (
    <main className="home">
      <div className="home__top-section">
        <div className="home__left">

          <section className="home__hero">
            <div className="home__hero-container">
              <div className="home__profile">

                {/* <div className="home__parish-priest"> */}
                <div className="home__hero-img-box">

                  <img className="home__hero-img" src={parishPriest} alt="Fr. Velichko Mihailov Archpriest of the Bulgarian Orthodox Church - Bulgarian Patriarchate" />
                </div>

                <WeeklyAnnouncement
                  url={`${API_URL}/published/${language}/announcements/latest/${currentDate}`}
                />
                {/* </div> */}
                {/* <div className="home__hero-scrollable">

          </div> */}

              </div>
              <a href="/" className="home__parish-priest-link">
                <h2>Fr. Velichko Mihaylov</h2>
                <p>Archpriest of the Bulgarian Orthodox Church</p>
              </a>

            </div>

          </section>
          <section className="home__section home__section--video">
            <h2 className="home__subtitle">Join us online for our latest Worship Office</h2>
            <LatestWorshipOffice
              url={`${API_URL}/published/${language}/worship-offices/latest/${currentDate}`}
            />
          </section>
        </div>



        <section className="home__right">
          <h2 className="home__title">Upcoming Worship Offices</h2>
          <NextEvent
            url={`${API_URL}/event/upcoming/${currentDate}`}
          />
          <Link className="home__more-events"> See More
          </Link>
        </section>
      </div>


      <section className="home__section">
        {language === "bg" ? (
          <h2 className="home__heading">Последни новини от нашата общност</h2>
        ) : (
          <h2 className="home__heading">Latest News From Our Community</h2>
        )}
        <LatestNews
          url={`${API_URL}/published/${language}/articles/latest/${currentDate}`}
        />
      </section>
    </main>
  );
}

export default HomePage;
