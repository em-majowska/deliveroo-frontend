const Hero = (props) => {
  return (
    <section className="hero">
      <div className="container">
        <img src={props.picture} alt="les répas délicieux" />
        <div className="wrapper">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
