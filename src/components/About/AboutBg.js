import React from "react";
import "./About.scss";
import trinity from "../../assets/holy-trinity-vasil.jpg";
import history from "../../assets/history.jpg";
import { Link } from "react-router-dom";

function AboutBg() {
  return (
    <section className="about">
      <p className="about__text">
        Тази енория носи името “Holy Trinity Macedono-Bulgarian Eastern Orthodox
        Church”. С това име енорията е регистрирана според Канадските закони
        като not-for-profit организация (сдружение с нестопанска цел,
        неправителствена организация, сдружение с идеална цел). Църквата е
        изключително религиозно и духовно средище.
      </p>
      <p className="about__text">
        Тя не е обвързана с политическа кауза, идеология, организация, група или
        държава.
      </p>
      <div className="about__box">
        <img
          className="about__image"
          src={trinity}
          alt="Icon of the Holy Trinity"
        />
        <div>
          <p className="about__text">
            В началото храмът посветен на Светата Тройца е бил място както за
            молитвено общение с Бога, така и за социално общуване на
            източно-православни християни родом от Егейска Македония, Пиринска
            Македония, Вардарска Македония и България и техните потомци родени в
            Канада. В днешно време църквата е отворена за всички православни
            християни.
          </p>
          <p className="about__text">
            Енорията е част от Българската източноправославна епархия в САЩ,
            Канада и Австралия – със седалище в Ню Йорк
          </p>
          <a href="https://www.bulgariandiocese.org" className="about__link">
            https://www.bulgariandiocese.org
          </a>
          <p className="about__text">
            Светските дела на църковната община се управляват на демократичен
            принцип от общо събрание на членовете и избрано от Общото събрание
            Настоятелство. Освен законите на Канада, църквата спазва Устава на
            Българската Православна Църква - Българска Патриаршия, Устава на
            Епархията в която членува и собствения си Устав.
          </p>
        </div>
      </div>
      <p className="about__text">
        Църквата набира средства за издръжка на дейността си чрез дарения,
        наеми, обществени и частни църковни служби, свещи и събития за набиране
        на средства като годишен базар, групови чествания и други празненства.
      </p>
      <p className="about__text">
        Обновената църковна зала в приземния етаж на църквата се отдава под наем
        за културни мероприятия, както и за частни тържества.
      </p>
      <p className="about__text">
        Църковна община Св. Троица се състои от редовни членове - енориаши и от
        многобройни богомолци, които пълноправно участват в религиозния живот,
        без разлика на етническа принадлежност и произход.
      </p>
      <p className="about__text">
        Църковните служби се водят съгласно Православната традиция и
        съответствие с църковния календар на Българската Православна Църква -
        Българска Патриаршия. Проповедите и официалните съобщения са на
        английски и на български език.
      </p>
      <h2 className="about__heading">Църковно Настоятелство</h2>
      <p className="about__text">
        Църковната община избира Църковно Настоятелство на общо събрание чрез
        вишегласие. Задължение на Настоятелството е да следи за спазване на
        главното предназначение на църквата, а именно: църковните служби,
        назначение, обезпечаване и поддръжка на свещеника.
      </p>
      <p className="about__text">
        Настоятелството отговаря за всички дейности на църквата в името на
        осигуряване на финансова стабилност, за всички ремонти и поддръжка на
        храма и църковната собственост, а също така и за светски и обществени
        прояви на нейната територия. Църковните Настоятелства на Св. Троица от
        създаването и досега са работели и допринасят за изграждане на дух на
        общност, в името на здраво и преуспяващо църковно братство.
      </p>
      <p className="about__text">
        Църквата води активен обществен и културен живот, църковната зала и двор
        са често домакин на празненства, патриотични чествания, теaтър,
        концерти, публични дискусии, народни танци и др. събития.
      </p>
      <Link to="/events" className="about__link">
        Разгледайте нашата страница със събития за подробности
      </Link>
      <p className="about__text">
        Богомолци, членове, техни роднини и приятели родени в Канада, заедно с
        голям брой нови емигранти от България работят съвместно за прослава на
        нашата вяра, за преуспяване и благополучие на църквата – нашият общ
        духовен дом и място за социално и културно общение на цялото
        землячество. Енорията се оличава с братски отношения между утвърдените и
        почитани фамилии на второ и трето поколение имигранти с по-скорошните
        „новодошли канадци”. Канада е нашият общ дом, но сме горди с
        революционното и възрожденско минало на нашите предци. Тяхната вяра и
        преданост към националните традиции са наш общ пътеводител.
      </p>
      <p className="about__text">
        Членството в енорията Св. Троица е главно средство и основа за растеж и
        благополучие на църковната община (Увод и член 2 от Устав и Правилник).
        Всички богомолци, които отговарят на условията за кандидатстване, са
        желани за членове (Молба-формуляр за членство). Молбите се разглеждат в
        кратки срокове. Ако милеете за Вярата, Църквата и традициите, ние Ви
        насърчаваме да станете член и да имате глас в църковните и обществени
        дела.
      </p>
      <a
        className="about__link"
        href="mailto:ourholytrinitymbc@gmail.com"
        target="_blank"
      >
        Свържете се с нас за повече подробности
      </a>
      <img
        className="about__history"
        src={history}
        alt="The congregation at its establishment"
      />
      <p className="about__text">
        Миналото на църковната община "Св. Тройца" е богато на събития и обрати.
        Във всички нейни етапи тя отстоява и утвърждава канонична и идейна
        чистота и продължава да следва патриотичния дух на нейните основатели.
      </p>
      <p className="about__text">
        Днешните поколения енориаши помнят и тачат с благодарност своите предци
        в България и Македония и се прекланят пред борбата им срещу отоманско,
        гръцко и сръбско подтисничество, за културно възраждане и за независима,
        национална църква.
      </p>
      <p className="about__text">
        Предшественик на днешната ни църковна община е църквата "Св. Георги",
        основана през 1940 година от протойерей Васил Михайлов. На 22 октомври
        1973 г. се основава сегашната Македоно-българска църковна община "Св.
        Троица" като част от Руската Задгранична Църква. Първоначалните членове
        са около 300. Българският свещеник Васил Михайлов продължава да служи
        като неин енорийски пастор до края на живота си през 1981 година. Той е
        обичан и уважаван от паството.
      </p>
      <p className="about__text">
        30 ноември 1973 година. Важен етап е учредяването на
        Религиозно-образователното Обединение (Тръст) към църквата "Св. Троица".
        Започнал с нулев начален капитал, Тръстът набира за кратък срок 46
        хиляди долара от дарения на енориаши. Декларацията за попечителство на
        Тръста определя целите му:
      </p>
      <ul className="about__list">
        <p className="about__text">
          Предназначението на активите на Тръста и на приходите от него е за
          благотворителни, религиозни и образователни начинания и по-специално
          за:
        </p>
        <li>
          изграждане и оперативна дейност на Център за религия и образование на
          православни християни от България и Македония
        </li>
        <li>православна църковна просвета</li>
        <li>
          изследвания и разпространение на знания по историята на народа на
          Македония и България
        </li>
        <li>
          публикация и разпространение на литература, филм и други подходящи
          медийни продукти с оглед на предходните задачи.
        </li>
      </ul>
      <p className="about__text">
        27 май 1976 година. Покупка на англиканската църква "Св. Рождество"
        (Holy Nativity) на днешния адрес 201 Monarch Park Avenue на цена 350
        хиляди долара. Голяма част от средствата са набрани от дарения, 40
        хиляди идват от продажба на закупени преди това терени за строеж на
        Warden Avenue. Освещаване на храм "Св. Троица".
      </p>
      <p className="about__text">
        1976-77. Основен ремонт на сградата и приспособяване за целите на
        православен храм е извършен от уважавания строителен инженер и
        предприемач Георги Симеонов. Много заслужил в организацията и в началния
        период на учредяването е Христо (Крис) Кизов. Иконостасът (изграждане и
        изписване от Никола Ковачев), нови прозорци, хоругви, църковни
        приспособления и утвари са дарение от богомолци:
      </p>
      <p className="about__text">
        Никола Шайков, Ник Стефанов, Лари Королов, Ламбро Лазар Королов, Борис и
        Славка Димитрови, Доне и Ел. Чалеви, Вангел, Софа и Мери Велкови, Ник,
        Люба, Стивън Велкови, Филип и Димана Вучкови, Пандо и Дафина Хр.
        Перелови, Пенчо и Христина Хр. Перелови, Иван и Верка Симеонови, сем.
        Дечо Балканов, Стоян и Люба Танушеви, Стефан и Тодор Малинови, Никола и
        Дита Михайлови, Спас и Зорка Услис, сем. Зоя Дане Перова, Лазар и Живка
        Цафарови, Мария Пенчо Новачкова, Кирил и Колумбия Михайлушеви, Кръстю и
        Вангелия Дзундзурови, сем. Спас Запрев, Боб и Олга Кели, свещеноиконом
        Васил и презвитера Райна Михайлови, Стоя Павлова, Димитър и Фана Ацеви,
        Кирил и Венера Аргилови, Асен и Фрида Коцеви, Атанас и Мария Икономови,
        Тошко Цилев, Лимонка и Никола Бояджиеви, Лазар и Кица Королови, Стоян и
        София Пейкос, Вангел и Еленка Вучкови, Гичо и Тами Гулини, Панайот и
        Доца Бойчевски. Семейство Коларови направи дарение на главната олтарна
        икона „Св. Троица” в памет на родителите им Илия и София Арабаджиеви и
        Васил и София Янкови.
      </p>
      <p className="about__text">
        През август 1981. Неочаквано почина енорийския свещеник отец Михайлов.
        Руската Задгранична Църква не успява да намери български свещеник, който
        да го замести.
      </p>
      <p className="about__text">
        С решение на членовете на църковната община от март и април 1982,
        енорията се завърна към Българската Православна Църква - Българска
        Патриаршия. По искане на енорията, Св. Синод предложи за енорийски
        свещеник роденият в Цариград Професор Протопрезвитер Благой Чифлянов -
        преподавател по Литургика в Духовната Академия в София. Професор
        Чифлянов пое обслужването на енорията.
      </p>
      <p className="about__text">
        In 1996 large reproductions of frescoes with scenes from the Bulgarian
        religious history were commissioned with funds donated by
        parishioners:През август 1992 г. отец професор Чифлянов излезе в пенсия
        и бе наследен от Негово Високоблагоговейнство свещеноиконом Кръстан
        Вукашинов, родом от България. Свещеноиконом Кръстан Вукашинов имаше опит
        като служител на Българската Православна Църква България и САЩ.
      </p>
      <p className="about__text">
        През 1999 бе изцяло изплатен заемът, който енорията взе за закупуване на
        имота на адрес 201 Monarch Park Avenue в Торонто Онтарио Канада.
      </p>
      <p className="about__text">
        През 2007 и 2008 г. ‘беше направен основен ремонт на голяма част от
        църковната сграда. Обновени бяха енорийската зала и прилежащите сервизни
        помещения, ел. и отоплителни инсталации, покрив и др.. В ремонта на
        доброволен принцип се отличават енориашите:
      </p>
      <p className="about__text">
        Жан Ервийо (ръководител на проекта), Милка Михайлов, Атанас Гесов, Доне
        Чалев, Олег и Никола Батови, Росен Генчев, Илиян Максудов, Ник Стефанов,
        Васил Попвасилев, Фред Меанчов и много други.
      </p>
      <ul className="about__list">
        <p className="about__text">
          Председатели на църковното настоятелство на Св. Троица през годините:
        </p>
        <li>Никола Бояджиев, пръв председател 1973 - 1981</li>
        <li>Дамян Гулев, 1981 - 1985</li>
        <li>Филип Меанчов, 1985 – 1992</li>
        <li>Блаже Колев (Боб Кели), 1992 - 1998</li>
        <li>Георги Варадев, 1998 – 2002</li>
        <li>Никола Бояджиев, 2002 - 2006</li>
        <li>Ник Стефанов, от 2006</li>
      </ul>
    </section>
  );
}

export default AboutBg;