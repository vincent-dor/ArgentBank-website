import AccountCard from "../AccountCard/Index";
import Data from "../../data/accountData.json";

const Account = () => {
  return (
    <section className="accounts page">
      {Data.map((account, index) => (
        <AccountCard key={index} title={account.title} amount={account.amount} description={account.description} />
      ))}
    </section>
  );
};

export default Account;
