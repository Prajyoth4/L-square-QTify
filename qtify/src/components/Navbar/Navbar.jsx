import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <Logo />
      <Button text={"Give Feedback"} />
    </header>
  );
};

export default Navbar;
