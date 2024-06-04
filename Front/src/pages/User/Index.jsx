import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Index';
import ProfileUser from '../../components/ProfileUser/Index';
import Account from '../../components/Account/Index';
import Footer from '../../components/Footer/Index';

const User = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    // Rediriger vers la page d'accueil si aucun token n'est présent
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div>
      <Header />

      <div className="container__darkblue">
        <ProfileUser />
        <Account />
      </div>
      <Footer />
    </div>
  );
};

export default User;