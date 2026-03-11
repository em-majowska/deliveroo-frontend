import logo from "../assets//images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <a href="#">
          <img src={logo} alt="deliveroo logo" />
          <span>deliveroo</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
