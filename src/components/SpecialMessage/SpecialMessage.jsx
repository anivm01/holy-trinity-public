import { useLanguage } from "../../utils/LanguageContext";
import "./SpecialMessage.scss";

const SpecialMessage = () => {
  const language = useLanguage();
  const message = {
    en: {
      title: "50th Anniversary Celebration",
      date: "Pentecost May 31, 2026",
      program: [
        {
          time: "9:30 AM",
          event:
            "Hierarchical Divine Liturgy for Pentecost in concelebration with Metropolitan Joseph",
        },
        {
          time: "11:30 AM",
          event:
            "Vespers for the Feast of the Holy Spirit in concelebration with Metropolitan Joseph",
        },
        {
          time: "12:00 PM",
          event:
            "Naphora | The congregation exits the Church through the main entrance and proceeds to the garden tent for the beginning of the afternoon celebration",
        },
        {
          time: "1:00 PM",
          event:
            "Opening remarks, guest speeches, and Founders Commemorative Plaque unveiling",
        },
        {
          time: "1:30 PM",
          event:
            "Entertainment program with performances from Golden Thrace Dance Group, Ot Izvora Bulgarian Folk Choir, Lavendia X Greek Dance Group, and Nizo Alimov Band live music",
        },
      ],
    },
    bg: {
      title: "Запазете датата",
      date: "Петдесетница 31 май 2026 г.",
      program: [
        {
          time: "9:30 AM",
          event:
            "Архиерейска Божествена света Литургия за Петдесетница в съслужение с Митрополит Йосиф",
        },
        {
          time: "11:30 AM",
          event:
            "Вечерня за празника на Светия Дух в съслужение с Митрополит Йосиф",
        },
        {
          time: "12:00 PM",
          event:
            "Нафора | Присъстващите излизат от храма през централния вход и се отправят към шатрата в градината за началото на следобедното тържество",
        },
        {
          time: "1:00 PM",
          event:
            "Откриващи слова, приветствия от гости и откриване на възпоменателна плоча на основателите",
        },
        {
          time: "1:30 PM",
          event:
            "Развлекателна програма с изпълнения на танцов състав „Златна Тракия“, български народен хор „От Извора“, гръцка танцова група „Lavendia X“ и музика на живо от оркестър „Низо Алимов“",
        },
      ],
    },
  };

  const currentMessage = message[language];

  return (
    <div className="special-message">
      <h2 className="special-message__title">{currentMessage.title}</h2>
      <h3 className="special-message__date">{currentMessage.date}</h3>
      <ol className="special-message__program" aria-label="Celebration program">
        {currentMessage.program.map((programItem) => (
          <li className="special-message__program-item" key={programItem.time}>
            <time className="special-message__program-time">
              {programItem.time}
            </time>
            <span className="special-message__program-event">
              {programItem.event}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SpecialMessage;
