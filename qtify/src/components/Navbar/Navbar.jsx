import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <Logo />
      <SearchBar />
      <Button text={"Give Feedback"} />
    </header>
  );
};

export default Navbar;
