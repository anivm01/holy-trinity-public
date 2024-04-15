import React, { useState } from "react";
import "./BookModal.scss";
import { BookIcon } from "../../../assets/svg";
import Modal from "../Modal/Modal";

const BookModal = ({ title, contentArray }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setPopupVisible(true);
        }}
        className="book-modal"
      >
        <BookIcon />
        <h4 className="book-modal__title">{title}</h4>
      </button>
      <Modal visible={popupVisible} setVisible={setPopupVisible}>
        <main className="book-modal__main">
          {contentArray.map((single) => {
            return <p>{single}</p>;
          })}
        </main>
      </Modal>
    </>
  );
};

export default BookModal;
