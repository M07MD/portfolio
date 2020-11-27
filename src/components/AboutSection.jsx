// import images
import home1 from "../img/home1.jpg";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              <span>Dreams</span> come{" "}
            </h2>
          </div>
          <div className="hide">
            <h2>true .</h2>
          </div>
        </div>
        <p>contact us for any web services</p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
