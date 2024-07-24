import React from "react";
import "./About.scss";
import trinity from "../../assets/holy-trinity-vasil.jpg";
import history from "../../assets/history.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about">
      <p className="about__text">
        Our church is primarily a religious organization with additional
        cultural-educational functions. It is under no obligation whatsoever to
        support any political organizations, groups or countries.
      </p>
      <p className="about__text">
        The parish is an exclusively religious and spiritual entity. The
        Holy Trinity church is a spiritual home of faithful Eastern-Orthodox
        Christians from Macedonia, Bulgaria and Canada. It is part of the
        Bulgarian Eastern-Orthodox Diocese of the USA, Canada and Australia.
      </p>
      <a href="https://www.bulgariandiocese.org" className="about__link">
        https://www.bulgariandiocese.org
      </a>
      <div className="about__box">
        <img
          className="about__image"
          src={trinity}
          alt="Icon of the Holy Trinity"
        />
        <div>
          <p className="about__text">
            The Congregation of Holy Trinity is a charitable organization,
            governed by its entire membership through a democratic vote at a
            general meeting. The Diocese as ecclesiastical guide and authority
            provides us with canonical administration. The church raises
            operating income in a number of ways: donations, rent, stole-fees
            for priestly services, candle sales, the annual bazaar, calendar
            sales, group festivities and holidays. The church offers for rent
            the newly renovated church hall for private events and cultural
            activities.
          </p>
          <p className="about__text">
            The affairs of the church are regulated by Orthodox Christian teachings,
            Apostolic Rules, practices of the Eastern-Orthodox Faith, the church
            bylaws and the laws governing charitable organizations in the Province
            of Ontario.
          </p>
        </div>
      </div>
      <h2 className="about__heading">The Church Board of Trustees</h2>
      <p className="about__text">
        Throughout the history of Holy Trinity, the Church Board has worked hard
        to strengthen the church community and meet the religious and social
        needs of parishioners and members. Social life associated with the
        church has always been active. Many activities take place in the church
        hall and garden: dramas, concerts, socials, lectures, picnics, cultural
        gatherings and performances.
      </p>
      <Link to="/events" className="about__link">
        Take a look at our Events Page for details
      </Link>
      <p className="about__text">
        Along with the Canadian-born worshipers, a large number of new
        immigrants work hard for the glory of God and the prosperity of the
        church – our common spiritual home and cultural and social center for
        Macedonian-Bulgarian Canadians.
      </p>
      <p className="about__text">
        The parish is now a community of old-established immigrant families, who
        have great-grandchildren here, and the more recently-arrived immigrants.
        Canada is our common home and the pride of our ancestors, mother
        language and our traditions unite us.
      </p>
      <p className="about__text">
        The backbone of the parish is the church membership (Preamble, Article 2
        of the church Constitution and Bylaws).
      </p>
      <p className="about__text">
        Eligible persons who desire to become church members are always welcome
        to participate in the membership process (Petition Form for Membership).
        The application will be reviewed and responded to in a timely manner.
      </p>
      <a
        className="about__link"
        href="mailto:ourholytrinitymbc@gmail.com"
        target="_blank" rel="noreferrer"
      >
        Contact us for more details
      </a>
      <img
        className="about__history"
        src={history}
        alt="The congregation at its establishment"
      />
      <p className="about__text">
        The church congregation of Holy Trinity has a history, rich in events
        and traditions. It is an affirmation of the patriotic spirit and the
        fidelity to canonical purity of all its founding members.
      </p>
      <p className="about__text">
        The parishioners are true followers of their forefathers, always
        grateful for their heroic struggles and for their determination to
        maintain the vitality of our cultural and religious traditions.
      </p>
      <p className="about__text">
        The predecessor of the congregation of Holy Trinity is St. George
        Macedonian-Bulgarian Eastern Orthodox church, founded in 1940 by the
        Very Reverend Vasil Mihailoff.
      </p>
      <p className="about__text">
        Holy Trinity Macedonian-Bulgarian Eastern Orthodox Church was founded on
        October 22, 1973 and was placed under the protection of the Russian
        Church in Exile. Father Vassil Mihailoff was the parish priest of Holy
        Trinity until his death in 1981. He was beloved and respected by all in
        the parish. There were approximately 300 founding members. On November
        30, 1973 the Holy Trinity Religious and Educational Centre Trust
        Foundation was established. It started with zero financial capital and
        quickly collected forty-six thousand dollars in donations from devoted
        parishioners. The Declaration of Trust defines the objects of the trust
        in these terms:
      </p>
      <ul className="about__list">
        <p className="about__text">
          The purpose for which the Trust Estate and the income thereof to be
          applied are for charitable, religious and educational purposes namely:
        </p>
        <li>
          The construction and operation of a religious and educational centre
          for Macedonian-Bulgarians of the Eastern Orthodox faith;
        </li>
        <li>
          The carrying on of religious education with respect to the Eastern
          Orthodox faith;
        </li>
        <li>
          The carrying on of education with respect to the history of the
          Macedonian-Bulgarian people;
        </li>
        <li>
          The publication or dissemination of books, pamphlets, films and all
          other suitable media with respect to the foregoing.
        </li>
      </ul>
      <p className="about__text">
        In 1976 the Anglican church of the Holy Nativity on 201 Monarch Park
        Avenue was purchased for $350K with most of the money donated by the
        parishioners. A significant part (around $40K) came from selling a
        previously bought property on Warden Avenue. The church was consecrated
        as Holy Trinity.
      </p>
      <p className="about__text">
        The parish made major renovations and adaptation to the eastern-orthodox
        rite. Engineer George Simeonov was hired as General Contractor and a
        major organizational contribution was provided by Chris Kizoff. Funds
        for the iconostasis (built and painted by Nicola Kovatchev), for new
        windows, banners and church accessories was donated by devoted
        parishioners.
      </p>
      <p className="about__text">
        Founders of Holy Trinity Macedono-Bulgarian Eastern Orthodox Church:
      </p>
      <ul className="about__list about__names">
        <li>
          <p className="about__text">
            Alex and Christina Alexopoulos
          </p>
        </li>
        <li>
          <p className="about__text">
            Mike and Patra Alexopoulos
          </p>
        </li>
        <li>
          <p className="about__text">
            Traiko and Zoya Alexopoulos
          </p>
        </li>
        <li>
          <p className="about__text">
            Chris and Tina Andonoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Traiko and Latsa Andonoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Boris and Zora Argiloff
          </p>
        </li>
        <li>
          <p className="about__text">
            Kiril and Venera Argiloff
          </p>
        </li>
        <li>
          <p className="about__text">
            Dimitar and Dana Atzeff
          </p>
        </li>
        <li>
          <p className="about__text">
            Decho Balkanoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Steve and Chrisoula Balkou
          </p>
        </li>
        <li>
          <p className="about__text">
            Helen Bodanis
          </p>
        </li>
        <li>
          <p className="about__text">
            Panaiot and Dotza Boichevski
          </p>
        </li>
        <li>
          <p className="about__text">
            Nikola and Limonka Boyadjieff
          </p>
        </li>
        <li>
          <p className="about__text">
            Chris and Mary Bozinoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Doné and Lena Chaleff
          </p>
        </li>
        <li>
          <p className="about__text">
            Boris and Slavka Dimitroff
          </p>
        </li>
        <li>
          <p className="about__text">
            Christina Doreff and Family
          </p>
        </li>
        <li>
          <p className="about__text">
            Trifon Doumoschieff and Family
          </p>
        </li>
        <li>
          <p className="about__text">
            Krystiu and Vangelia Dzundzuroff
          </p>
        </li>
        <li>
          <p className="about__text">
            Gicho and Tomy Goulin
          </p>
        </li>
        <li>
          <p className="about__text">
            Damian and Mary Guleff
          </p>
        </li>
        <li>
          <p className="about__text">
            Atanas and Maria Ikonomoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Bob and Olga Kelly
          </p>
        </li>
        <li>
          <p className="about__text">
            Chris and Raina Kizoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Olga Kizoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Nick and Lena Kolaroff
          </p>
        </li>
        <li>
          <p className="about__text">
            Fred and Donna Corollas
          </p>
        </li>
        <li>
          <p className="about__text">
            George Koroloff
          </p>
        </li>
        <li>
          <p className="about__text">
            Olga Koroloff
          </p>
        </li>
        <li>
          <p className="about__text">
            Lambro Lazar Koroloff
          </p>
        </li>
        <li>
          <p className="about__text">
            Larry Koroloff
          </p>
        </li>
        <li>
          <p className="about__text">
            Lazar and Kutsa Koroloff
          </p>
        </li>
        <li>
          <p className="about__text">
            Assen and Frida Kotzeff
          </p>
        </li>
        <li>
          <p className="about__text">
            Kiro and Grozda Kirkoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Mona Lefkos
          </p>
        </li>
        <li>
          <p className="about__text">
            George and Tala Lexovsky
          </p>
        </li>
        <li>
          <p className="about__text">
            Traiko and Zoya Lexovsky
          </p>
        </li>
        <li>
          <p className="about__text">
            Stefan and Todor Malinoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Chris Malaganoff
          </p>
        </li>
        <li>
          <p className="about__text">
            George and Tsveta Markoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Spas and Helen Markoff
          </p>
        </li>
        <li>
          <p className="about__text">
            George and Florence Marks
          </p>
        </li>
        <li>
          <p className="about__text">
            Milka (Thomas) Meanchoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Philip and Evda Meanchoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Fred Meanchoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Ron Meanchoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Luba Meschino
          </p>
        </li>
        <li>
          <p className="about__text">
            Donna Meyer
          </p>
        </li>
        <li>
          <p className="about__text">
            Reverend and Prezbithera Vasil and Raina Mihailoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Nikola and Ditta Mihailoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Kiril and Columbia Mihailousheff
          </p>
        </li>
        <li>
          <p className="about__text">
            Spaska Nachoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Mary Nick
            Atanas and Lena Novachkoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Maria Pencho Novachkova
          </p>
        </li>
        <li>
          <p className="about__text">
            James and Ditta Ouslis
          </p>
        </li>
        <li>
          <p className="about__text">
            Spase and Zorka Ouslis
          </p>
        </li>
        <li>
          <p className="about__text">
            Stoia Pavlova
          </p>
        </li>
        <li>
          <p className="about__text">
            Stoian and Sofia Peikos
          </p>
        </li>
        <li>
          <p className="about__text">
            Panda and Safina Pereloff
          </p>
        </li>
        <li>
          <p className="about__text">
            Pencho and Christina Pereloff
          </p>
        </li>
        <li>
          <p className="about__text">
            Zoe (Dane) Perova
          </p>
        </li>
        <li>
          <p className="about__text">
            Nikola Shaikov
          </p>
        </li>
        <li>
          <p className="about__text">
            Ivan and Verka Simeonoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Michael and Donka Stefanoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Nicholas Stefanoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Stoian and Luba Tanousheff
          </p>
        </li>
        <li>
          <p className="about__text">
            Sam and Margaret Todoroff
          </p>
        </li>
        <li>
          <p className="about__text">
            Tsveta Todoroff
          </p>
        </li>
        <li>
          <p className="about__text">
            Lazo and Jivka Tsafaroff
          </p>
        </li>
        <li>
          <p className="about__text">
            Toshko Tzilev
          </p>
        </li>
        <li>
          <p className="about__text">
            George and Tsveta Varadeff
          </p>
        </li>
        <li>
          <p className="about__text">
            Mano and Betty Vasiloff
          </p>
        </li>
        <li>
          <p className="about__text">
            Sofa and Mary Velkov
          </p>
        </li>
        <li>
          <p className="about__text">
            Nick, Luba and Steven Velkov
          </p>
        </li>
        <li>
          <p className="about__text">
            Vangel and Elenka Vouchkoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Philip Vouchkoff
          </p>
        </li>
        <li>
          <p className="about__text">
            Spas Zapreff
          </p> </li>
      </ul>
      <p className="about__text">
        In August 1981 the parish priest died and no Macedonian-Bulgarian priest
        could be provided by the Russian Church in Exile. In March 1982, the
        parish voted for secession from the Russian Church in Exile. Holy
        Trinity joined the Bulgarian Diocese. A Bulgarian priest, the Very Rev.
        Blagoy Chiflyanov was appointed by The Holy Synod on the request by the
        parish.
      </p>
      <p className="about__text">
        In August 1992, Father Chiflyanov retired and was replaced by the Very
        Reverend Krustan Vukashinov. Father Chiflyanov continued to function as
        an auxiliary priest on occasions.
      </p>
      <p className="about__text">
        In 1996 large reproductions of frescoes with scenes from the Bulgarian
        religious history were commissioned with funds donated by parishioners:
      </p>
      <p className="about__text">
        Assen Kotzev and family, Donna and Ray Newman, Mrs Dina Florinov,
        Florence Marks, Zonka Angelova, Eleonora, Dimitar, Jordan and Anete
        Dimitrov, Boris, Zora, Anthony, Daniel and Ivan Argiloff, Chris and
        Kathy Torbar, Jim and Dita Ouslis and family, Olga and Bob Kelly and
        family.
      </p>
      <p className="about__text">
        The mortgage on the church property was paid off in 1999.{" "}
      </p>
      <p className="about__text">
        In 2007 and 2008 major renovations of the church hall and facilities
        have been undertaken with active participation of parishioner
        volunteers:
      </p>
      <p className="about__text">
        Jean Hérvieux (project manager and chief-technician), Milka Mihailoff,
        Atanas Gessov, Done Chaleff, Oleg and Nikolas Batov, Rossen Guentchev,
        Nick Stefanoff, Vassil Popvassilev, Fred Mehanchoff and many others.
      </p>
      <ul className="about__list">
        <p className="about__text">Past presidents of the Church Executive:</p>
        <li>Nikola Boyadjieff, first President 1973-1981</li>
        <li>Damian Gouleff 1981-1985</li>
        <li>Philip Meanchoff 1985-1992</li>
        <li>Bob Kelly, 1992-1998</li>
        <li>George Varadeff, 1998-2002</li>
        <li>Nikola Boyadjieff, 2002-2006</li>
        <li>Nick Stefanoff, 2006 - present</li>
      </ul>
    </section>
  );
}

export default About;
