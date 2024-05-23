import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <main className="main container__darkblue">
      <section className="login">
        <div className="login__title">
          <FontAwesomeIcon icon={faCircleUser} className="FontIcon" />

          <h1>Sign In</h1>
        </div>
        <form>
          <div className="login__input">
            <label htmlFor="username">Username</label>
            <input id="username" type="texte"></input>
          </div>
          <div className="login__input">
            <label htmlFor="password">Password</label>
            <input id="password" type="password"></input>
          </div>

          <div className="login__remember">
            <input id="remember" type="checkbox"></input>
            <label htmlFor="remember">Remember me</label>
          </div>
          <Link to={`/user`}>
            <button className="login__button" type="submit">
              Sign In
            </button>
          </Link>
        </form>
      </section>
    </main>
  );
};

export default Form;
