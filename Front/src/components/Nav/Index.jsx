import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__item" to={`/login`}>
        <FontAwesomeIcon icon={faCircleUser} className="FontIcon" />
        Sign In
      </Link>
    </div>
  );
};

export default Nav;
