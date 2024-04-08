import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

function Button({ text, onClick, className, href, type = "button", buttonComponent = "button", ...props }) {
    if (buttonComponent === "button") {
        return (
            <button
                className={`button ${className}`}
                type={type}
                onClick={onClick || (() => { })} // No-op function as default
                {...props}
            >
                {text}
            </button>
        );
    } else {
        return (
            <Link
                className={`button ${className}`}
                onClick={onClick || (() => { })} // No-op function as default
                role="button"
                to={href || "#"}
                {...props}
            >
                {text}
            </Link>
        );
    }
}
export default Button;