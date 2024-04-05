import { Link } from "react-router-dom";
import "./LinkWithIcon.scss"
import LinkIcon from "../../../assets/svg/LinkIcon/LinkIcon";
const LinkWithIcon = ({ text, href, className }) => {
    return (
        <Link to={href} className={`link-with-icon ${className || ""}`}>
            <span className="link-with-icon__icon">
                <LinkIcon />
            </span>
            {text}
        </Link>
    );
};

export default LinkWithIcon;