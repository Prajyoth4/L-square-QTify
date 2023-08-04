//import Logo from "./components/Logo/Logo";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import { getAlbums } from "./components/api/api";
import Section from "./components/Section/Section";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);

  const generateTopGrid = async () => {
    let res = await getAlbums("top");
    setTopAlbumData(res);
  };

  const generateNewGrid = async () => {
    let res = await getAlbums("new");
    setNewAlbumData(res);
  };

  useEffect(() => {
    generateTopGrid();
    generateNewGrid();
  });

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Section type={"Top Albums"} data={topAlbumData} />
    </div>
  );
}

export default App;
