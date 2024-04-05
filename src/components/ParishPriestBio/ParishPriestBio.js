import React from "react";
import "./ParishPriestBio.scss";
import parishPriest from "../../assets/parish-priest.jpg"
import SectionHeading from "../UI/SectionHeading/SectionHeading";
import { biography, biographySubtitle, documents, documentsSubtitle } from "../../data/parishPriestData";
import LinkWithIcon from "../UI/LinkWithIcon/LinkWithIcon";
import { useLanguage } from "../../utils/LanguageContext";

function ParishPriestBio() {
    const language = useLanguage()
    return (
        <section className="priest-bio">
            <div className="priest-bio__image-box">
                <img className="priest-bio__image" src={parishPriest} alt="Fr. Velichko Mihailov Archpriest of the Bulgarian Orthodox Church - Bulgarian Patriarchate" />
                <div className="priest-bio__documents">
                    <SectionHeading bgText={documentsSubtitle.bg} enText={documentsSubtitle.en} />
                    {documents.map((single, index) => {
                        return (
                            <LinkWithIcon key={index} href={single.url} text={single[language]} />
                        )
                    })}
                </div>
            </div>
            <div className="priest-bio__bio">
                <SectionHeading bgText={biographySubtitle.bg} enText={biographySubtitle.en} />
                {biography[language].map((single, index) => {
                    return (<p key={index}>{single}</p>)
                })}
            </div>
        </section>
    );
}

export default ParishPriestBio;
