import React from "react";
import "./WorshipOfficeSingle.scss";
import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { API_URL } from "../../utils/api";
import { useLanguage } from "../../utils/LanguageContext";
import useFetch from "../../utils/useFetchImage";
import NoData from "../NoData/NoData";
import ReadingButton from "../ReadingButton/ReadingButton";
import { createMarkup } from "../../utils/createMarkup";

function WorshipOfficeSingle() {
  const params = useParams();
  const language = useLanguage();
  const { data, loading, error } = useFetch(
    `${API_URL}/worship-office/${language}/${params.id}`
  );

  const ourFather = {
    en: `<p>Our Father, who art in heaven,
    </br>hallowed be Thy name.
    </br>Thy Kingdom come, Thy will be done,
    </br>on earth as it is in heaven.
    </br>Give us this day our daily bread;
    </br>and forgive us our trespasses
    </br>as we forgive those who trespass against us;
    </br>and lead us not into temptation,
    </br>but deliver us from evil.</p>`,
    bg: `<p>Отче наш, Иже еси на небесех!
    </br>Да святится имя Твое,
    </br>да приидет Царствие Твое,
    </br>да будет воля Твоя,
    </br>яко на небеси и на земли.
    </br>Хлеб наш насущный даждь нам днесь;
    </br>и остави нам долги наша,
    </br>якоже и мы оставляем должником нашим;
    </br>и не введи нас во искушение,
    </br>но избави нас от лукаваго.</p>`,
  };

  const symbol = {
    en: `<p>I believe in one God, the Father Almighty, 
    </br>Maker of Heaven and Earth 
    </br>and of all things visible and invisible.
    </br>And in one Lord Jesus Christ, the Son of God, 
    </br>the only-begotten, begotten of the Father before all ages. 
    </br>Light of light; true God of true God; begotten, not made; 
    </br>of one essence with the Father, by Whom all things were made; 
    </br>Who for us men and for our salvation came down from Heaven, 
    </br>and was incarnate of the Holy Spirit and the Virgin Mary, 
    </br>and became man. And He was crucified for us under Pontius Pilate, 
    </br>and suffered, and was buried. And rose again on the thrid day, 
    </br>according to the Scriptures, and ascended into Heaven, 
    </br>and sits at the right hand of the Father; 
    </br>and He shall come again with glory to judge the living and the dead; 
    </br>And His Kingdom shall have no end.
    </br>And in the Holy Spirit, the Lord, the Giver of Life, 
    </br>Who proceeds from the Father; Who with the Father and the Son together 
    </br>is worshipped and glorified; Who spoke by the prophets.
    </br>In one Holy, Catholic, and Apostolic Church. 
    </br>I acknowledge one baptism for the remission of sins. 
    </br>I look for the resurrection of the dead and the life of the world to come. 
    </br>Amen.</p>`,
    bg: `<p>Вярвам в един Бог Отец, Вседържител, Творец на небето и земята, 
    </br>ина всичко видимо и невидимо.
    </br>И в един Господ Иисус Христос, Сина Божий, Единородния, 
    </br>Който е роден от Отца преди всички векове: 
    </br>Светлина от Светлина, Бог истинен от Бог истинен, 
    </br>роден, несътворен, единосъщен с Отца, 
    </br>чрез Когото всичко е станало; 
    </br>Който заради нас човеците, и заради нашето спасение 
    </br>слезе от небесата и се въплъти от Дух Светий 
    </br>и Дева Мария и стана човек; и бе разпнат за нас при Понтия Пилата, 
    </br>и страда, и бе погребан; и възкръсна в третия ден, според Писанията; 
    </br>и се възнесе на небесата и седи отдясно на Отца; 
    </br>и пак ще дойде със слава да съди живи и мъртви и царството Му не ще има край.
    </br>И в Духа Светаго, Господа, Животоворящия, Който от Отца изхожда, 
    </br>Комуто се покланяме и Го славим наравно с Отца и Сина, 
    </br>и Който е говорил чрез пророците.
    </br>В едната света съборна и апостолска Църква.
    </br>Изповядвам едно кръщение за опрощаване на греховете. 
    </br>Чакам възкресение на мъртвите и живот в бъдещия век. 
    </br>Амин!</p>`,
  };
  if (loading) {
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#6F0B20"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: "center" }}
        wrapperClassName=""
        visible={true}
      />
    );
  }
  if (error) {
    return <NoData />;
  }
  if (data) {
    const oldTestament = createMarkup(data.old_testament);
    return (
      <article className="worship-office-single">
        <div className="worship-office-single__hero">
          <iframe
            className="worship-office-single__video"
            src={`https://www.youtube.com/embed/${data.youtube_video_id}?rel=0&hl=${language}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
        <h3 className="worship-office-single__title">{data.title}</h3>
        <div className="worship-office-single__bottom">
          <div className="worship-office-single__readings">
            {language === "bg" ? (
              <h3 className="worship-office-single__subtitle">Четива</h3>
            ) : (
              <h3 className="worship-office-single__subtitle">Readings</h3>
            )}
            <ReadingButton
              content={createMarkup(data.gospel)}
              title={language === "bg" ? "Евангелие" : "Gospel"}
            />
            <ReadingButton
              content={createMarkup(data.epistle)}
              title={language === "bg" ? "Апостол" : "Epistle"}
            />
            {oldTestament.__html.length > 8 && (
              <ReadingButton
                content={oldTestament}
                title={language === "bg" ? "Старият завет" : "Old Testament"}
              />
            )}
          </div>
          <div className="worship-office-single__prayers">
            {language === "bg" ? (
              <h3 className="worship-office-single__subtitle">Молитви</h3>
            ) : (
              <h3 className="worship-office-single__subtitle">Prayers</h3>
            )}
            {language === "bg" ? (
              <ReadingButton
                content={createMarkup(ourFather.bg)}
                title="Отче Наш"
              />
            ) : (
              <ReadingButton
                content={createMarkup(ourFather.en)}
                title="Our Father"
              />
            )}
            {language === "bg" ? (
              <ReadingButton
                content={createMarkup(symbol.bg)}
                title="Символ на Вярата"
              />
            ) : (
              <ReadingButton
                content={createMarkup(symbol.en)}
                title="The Creed: The Symbol of Faith"
              />
            )}
          </div>
        </div>
      </article>
    );
  }
  return <NoData />;
}

export default WorshipOfficeSingle;
