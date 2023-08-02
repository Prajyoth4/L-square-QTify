import HeadPhoneImg from "./HeadPhoneImg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-div">
        <div className="hero-text">
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over Thousand Podcast Episodes</h1>
        </div>
        <HeadPhoneImg />
      </div>
    </div>
  );
};

export default HeroSection;
