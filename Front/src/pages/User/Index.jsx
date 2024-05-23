import Header from "../../components/Header/Index";
import Account from "../../components/Account/Index";
import Footer from "../../components/Footer/Index";

const User = () => {
  return (
    <div>
      <Header />
      <div className="container__darkblue">
        <Account />
      </div>
      <Footer />
    </div>
  );
};

export default User;
