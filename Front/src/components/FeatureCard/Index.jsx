import PropTypes from "prop-types";

const FeatureCard = ({ image, title, text }) => {
  return (
    <div className="feature">
      <img className="feature__icon" alt="Icon" src={image} />
      <h3 className="feature__title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeatureCard;
