import React from 'react'
import "./Donations.scss"

function DonationsBg() {
  return (
    <section className="donations">
        <p className="donations__text">
          Македоно-българската църква Света Троица приема дарения от частни лица
          и корпорации. За всички дарения се издават квитанции за приспадане на
          данъци съгласно Канадското законодателство.
        </p>
        <h3 className="donations__heading">
          Дарение може да направите по следния начин:
        </h3>
        <ul className="donations__list">
          <li className="donations__item">
            С изпратен по пощата чек на името на “Holy Trinity Church”
          </li>
          <li className="donations__item">
            Лично в храма в дни когато има общо богослужение.
          </li>
        </ul>
        <h3 className="donations__heading">Адресът на църквата е:</h3>
        <address>
          <p className="donations__address">
            Holy Trinity Macedono-Bulgarian Eastern Orthodox Church{" "}
          </p>
          <p className="donations__address">
            201 Monarch Park Avenue, Toronto,
          </p>
          <p className="donations__address">Ontario, Canada, M4J 4R9</p>
        </address>
        <h3 className="donations__heading">
          За допълнителна информация се обадете на:
        </h3>
        <ul className="donations__list">
          <li className="donations__item">
            Тел:{" "}
            <a className="donations__phone" href="tel:416-949-4130">
              416 949-4130
            </a>{" "}
            - Ник Стефанов,{" "}
            <span className="donations__position">
              Председател на църковното настоятелство.
            </span>
          </li>
          <li className="donations__item">
            Тел:{" "}
            <a className="donations__phone" href="tel:416-483-5366">
              416 483-5366
            </a>{" "}
            - Фред Минков,{" "}
            <span className="donations__position">
              Ковчежник на Църковното Настоятелство
            </span>
          </li>
        </ul>
        <p className="donations__text">
          Имената на всички частни и корпоративни дарители се записват в нашия
          Регистър за дарения и се обявяват по време на редовните църковни
          служби. (По желание можете да останете анонимен).
        </p>
        <p className="donations__text">Благодарим на всички дарители.</p>
      </section>
  )
}

export default DonationsBg