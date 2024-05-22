import Image from "../../assets/images/bank-tree.jpeg";

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${Image})` }}>
      <section className="banner__content">
        <p className="banner__subtitle">No fees.</p>
        <p className="banner__subtitle">No minimum deposit.</p>
        <p className="banner__subtitle">High interest rates.</p>
        <p className="banner__text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
};

export default Banner;
