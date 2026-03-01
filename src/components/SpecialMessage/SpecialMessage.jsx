import { useLanguage } from "../../utils/LanguageContext";
import "./SpecialMessage.scss";

const SpecialMessage = () => {
  const language = useLanguage();
  const message = {
    en: {
      title: "Save the date",
      date: "May 31, 2026",
      description:
        "Join us in joyful celebration as we mark the 50th Anniversary of Holy Trinity Macedono-Bulgarian Eastern Orthodox Church",
    },
    bg: {
      title: "Запазете датата",
      date: "31 май 2026 г.",
      description:
        "Присъединете се към нас, за да отпразнуваме с радост 50-годишнината на Македоно-българската източноправославна църква „Света Троица“.",
    },
  };
  return (
    <div className="special-message">
      <h2 className="special-message__title">{message[language].title}</h2>
      <h3 className="special-message__date">{message[language].date}</h3>
      <p className="special-message__description">
        {message[language].description}
      </p>
    </div>
  );
};

export default SpecialMessage;
