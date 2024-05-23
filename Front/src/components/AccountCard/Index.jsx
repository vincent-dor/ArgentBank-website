import PropTypes from "prop-types";

const AccountCard = ({ title, amount, description }) => {
  return (
    <section className="account">
      <div className="account__content">
        <h3 className="account__title">{title}</h3>
        <p className="account__amount">{amount}</p>
        <p className="account__description">{description}</p>
      </div>
      <div className="account__content button">
        <button className="account__button">View transactions</button>
      </div>
    </section>
  );
};

AccountCard.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AccountCard;
