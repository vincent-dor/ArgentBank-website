import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    navigate("/");
    // Dispatchez l'action de déconnexion ici
    dispatch(logout());
  };

  return (
    <nav className="nav">
      <div>
        {token ? (
          <div className="nav__auth">
            {" "}
            <FontAwesomeIcon icon={faCircleUser} className="FontIcon" />
            <Link to="/profile" className="nav__username">
              {user.userName}
            </Link>
            <div>
              <FontAwesomeIcon icon={faRightFromBracket} className="FontIcon" />
            </div>
            {token && (
              <Link to="/" onClick={handleLogout}>
                Sign Out
              </Link>
            )}
          </div>
        ) : (
          <a href={"./login"}>
            <FontAwesomeIcon icon={faCircleUser} className="FontIcon" />
            Sign In
          </a>
        )}
      </div>
    </nav>
  );
};

export default Nav;
