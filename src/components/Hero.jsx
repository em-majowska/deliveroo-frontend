import headerImage from "../assets/header-image.jpg";

const Hero = (props) => {
  return (
    <section className="hero">
      <div className="container">
        <img src={headerImage} alt="les répas délicieux" />
        <div className="wrapper">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
