import React from 'react'
import './Donations.scss'

function Donations() {
  return (
    <section className="donations">
        <p className="donations__text">
          Holy Trinity Macedonian-Bulgarian Eastern Orthodox Church accepts
          donations from individuals and corporations. Official Tax receipts for
          tax deductible purposes will be issued for all donations.
        </p>
        <h3 className="donations__heading">Donations can be made by:</h3>
        <ul className="donations__list">
          <li className="donations__item">
            Mailing a cheque made payable to Holy Trinity Church.
          </li>
          <li className="donations__item">
            In person in the church during public worship offices.
          </li>
        </ul>
        <h3 className="donations__heading">
          The address of the church is as follows
        </h3>
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
          For more information, please call one of the following phone numbers:
        </h3>
        <ul className="donations__list">
          <li className="donations__item">
            Tel:{" "}
            <a className="donations__phone" href="tel:416-949-4130">
              416 949-4130
            </a>{" "}
            - Nick Stefanoff,{" "}
            <span className="donations__position">
              President of the Board of Trustees.
            </span>
          </li>
          <li className="donations__item">
            Tel.{" "}
            <a className="donations__phone" href="tel:416-483-5366">
              416 483-5366
            </a>{" "}
            - Fred Meanchoff,{" "}
            <span className="donations__position">
              Treasurer of the Board of Trustees
            </span>
          </li>
        </ul>
        <p className="donations__text">
          The names of all private and business donors are recorded in our
          special donations register, and are announced at the end of the public
          worship offices before the congregation.
        </p>
      </section>
  )
}

export default Donations