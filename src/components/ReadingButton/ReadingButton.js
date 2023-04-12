import React, { useState } from "react";
import "./ReadingButton.scss";
import book from "../../assets/book.svg";
import ReadingPopup from "../ReadingPopup/ReadingPopup";

function ReadingButton({title, content}) {
    const [popupVisible, setPopupVisible] = useState(false)
  return (
    <>
    <button onClick={()=>{setPopupVisible(true)}} className="reading">
      <img className="reading__book" src={book} alt="book icon" />
      <h4 className="reading__title">{title}</h4>
    </button>
    {popupVisible ? <ReadingPopup content={content} setPopupVisible={setPopupVisible}/> : ""}
    </>
  );
}

export default ReadingButton;
