import FeatureCard from "../FeatureCard/Index";
import Data from "../../data/featureData.json";

const Feature = () => {
  return (
    <section className="features">
      {Data.map((feature, index) => (
        <FeatureCard key={index} image={feature.image} title={feature.title} text={feature.text} />
      ))}
    </section>
  );
};
export default Feature;
