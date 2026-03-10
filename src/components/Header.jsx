import logo from "../assets//images/logo.png";

const Header = () => {
  return (
    <header>
      <a href="#" className="container">
        <img src={logo} alt="deliveroo logo" />
        <span>deliveroo</span>
      </a>
    </header>
  );
};

export default Header;
