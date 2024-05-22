import Logo from "../../assets/images/argent-bank-logo.png";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Index";

const Header = () => {
  return (
    <div className="header">
      <Link to={`/`} className="header__logo">
        <img src={Logo} alt="Logo" className="header__image"></img>
      </Link>
      <Nav />
    </div>
  );
};

export default Header;
