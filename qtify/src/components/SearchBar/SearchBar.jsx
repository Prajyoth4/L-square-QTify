import "./SearchBar.css";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <input className="input-search" type="search"></input>
      <div className="search-icon-div">
        <img
          className="search-icon"
          src="magnifying-glass-solid.svg"
          alt="search-icon"
        />
      </div>
    </div>
  );
};

export default SearchBar;
