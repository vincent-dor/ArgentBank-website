import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("rememberedUsername");
    const storedPassword = localStorage.getItem("rememberedPassword");

    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleSignIn = async () => {
    try {
      await signIn(username, password, rememberMe, dispatch, navigate, setError);
      if (rememberMe) {
        localStorage.setItem("rememberedUsername", username);
        localStorage.setItem("rememberedPassword", password);
      } else {
        localStorage.removeItem("rememberedUsername");
        localStorage.removeItem("rememberedPassword");
      }
    } catch (error) {
      setError("Erreur lors de la connexion. Veuillez vérifier vos identifiants.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    await handleSignIn();
  };

  return (
    <main className="main container__darkblue">
      <section className="login">
        <div className="login__title">
          <FontAwesomeIcon icon={faCircleUser} className="FontIcon" />
          <h1>Sign In</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="login__input">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="login__input">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="login__remember">
            <input id="remember" type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
            <label htmlFor="remember">Remember me</label>
          </div>
          {error && <div className="login__error">{error}</div>}
          <button type="submit" className="login__button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Form;
