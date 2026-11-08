import { useLanguage } from "../../utils/LanguageContext";
import { useVisibleMessage } from "../../queries";
import { createMessageMarkup } from "../../utils/createMarkup";
import "./SpecialMessage.scss";

const SpecialMessage = () => {
  const language = useLanguage();
  const { data, isLoading, error } = useVisibleMessage();

  if (isLoading || error || !data) {
    return null;
  }

  const hasSelectedTranslation =
    data[`title_${language}`]?.trim() && data[`message_${language}`]?.trim();
  const displayLanguage = hasSelectedTranslation ? language : "bg";
  const title = data[`title_${displayLanguage}`];
  const message = data[`message_${displayLanguage}`];
  const feastName =
    data[`associated_feast_name_${displayLanguage}`]?.trim() || "";
  const introduction =
    displayLanguage === "bg"
      ? `Послание от отец Михайлов${
          feastName ? ` за празника ${feastName}` : ""
        }.`
      : `A message from Father Mihaylov${
          feastName ? ` for the feast of ${feastName}` : ""
        }.`;

  return (
    <article className="special-message" lang={displayLanguage}>
      <p className="special-message__introduction">{introduction}</p>
      <div className="special-message__body">
        <h2>{title}</h2>
        <div
          className="special-message__content"
          dangerouslySetInnerHTML={createMessageMarkup(message)}
        />
      </div>
    </article>
  );
};

export default SpecialMessage;
