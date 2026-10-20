import { useLanguage } from "../../utils/LanguageContext";
import "./SpecialMessage.scss";

const SpecialMessage = () => {
  const language = useLanguage();
  const messages = {
    en: [
      "Divine Liturgy in English – Sunday, October 25",
      "Our next monthly Divine Liturgy in English will take place this Sunday, October 25. The service will be conducted entirely in English, while the traditional hymns and chants will remain in Church Slavonic.",
      "We warmly invite everyone to join us for worship and fellowship!",
    ],
    bg: [
      "Света Литургия на английски език – неделя, 25 октомври",
      "Тази неделя, 25 октомври, ще се състои поредната ни месечна Света Литургия на английски език. Богослужението ще бъде изцяло на английски, а традиционните църковни песнопения ще се изпълняват на църковнославянски език.",
      "Каним всички енориаши, приятели и гости да се присъединят към нас за обща молитва!",
    ],
  };

  return (
    <div className="special-message">
      <div className="special-message__content">
        {messages[language].map((paragraph, index) => (
          <p
            className={index === 0 ? "special-message__title" : undefined}
            key={paragraph}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SpecialMessage;
