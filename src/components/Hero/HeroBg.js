import React from "react";
import "./Hero.scss";

function HeroBg({image, title}) {
  return (
    <section className="hero">
      <img className="hero__image" src={image} alt="hero" />
      <h2 className="hero__title">{title}</h2>
    </section>
  );
}

export default HeroBg;
