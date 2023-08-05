//import Logo from "./components/Logo/Logo";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import { getAlbums, getSongs } from "./components/api/api";
import Section from "./components/Section/Section";
import SongSection from "./components/Section/SongSection";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [songData, setSongData] = useState([]);

  const generateTopGrid = async () => {
    let res = await getAlbums("top");
    setTopAlbumData(res);
  };

  const generateNewGrid = async () => {
    let res = await getAlbums("new");
    setNewAlbumData(res);
  };

  const generateSongGrid = async () => {
    let res = await getSongs();
    setSongData(res);
  };

  useEffect(() => {
    generateTopGrid();
    generateNewGrid();
    generateSongGrid();
  });

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Section type={"Top Albums"} data={topAlbumData} />
      <Section type={"New Albums"} data={newAlbumData} />
      <SongSection type={"Songs"} data={songData} />
    </div>
  );
}

export default App;
