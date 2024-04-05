import React from 'react';
import "./SectionHeading.scss"

function SectionHeading({ text }) {
    return (
        <h2 className="section-heading">
            {text}
        </h2>
    );
}

export default SectionHeading;