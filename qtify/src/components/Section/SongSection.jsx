import React from "react";
import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Carousel from "../Carousel/Carousel";
import { getGenres } from "../api/api";
import "./Section.css";

const SongSection = ({ type, data }) => {
  const [genreValue, setGenreValue] = useState(0);
  const [songData, setSongData] = useState({});
  const [genres, setGenres] = useState(["Rock"]);

  const generateGenreData = async () => {
    let res = await getGenres();
    if (!res) {
      return;
    }
    setGenres(res.data);
    res.data.forEach(({ key }) => {
      setSongData((prev) => {
        return {
          ...prev,
          [key]: data.filter((ele) => {
            return ele.genre.key === key;
          }),
        };
      });
    });
  };

  useEffect(() => {
    setSongData({ All: data });
    generateGenreData();
  }, [data]);

  const handleChange = (event, newValue) => {
    setGenreValue(newValue);
  };

  return (
    <div className="song-section-wrapper">
      <div className="grid-header">
        <h3 className="section-type">{type}</h3>
      </div>
      <div>
        <Tabs
          value={genreValue}
          onChange={handleChange}
          TabIndicatorProps={{ style: { backgroundColor: "#34c94b" } }}
        >
          <Tab
            sx={{
              color: "white",
              "&.Mui-selected": { color: "white" },
            }}
            label="All"
          />
          <Tab
            sx={{
              color: "white",
              "&.Mui-selected": { color: "white" },
            }}
            className="songs-tab"
            label="Rock"
          />
          <Tab
            sx={{
              color: "white",
              "&.Mui-selected": { color: "white" },
            }}
            className="songs-tab"
            label="Pop"
          />
          <Tab
            sx={{
              color: "white",
              "&.Mui-selected": { color: "white" },
            }}
            className="songs-tab"
            label="Jazz"
          />
          <Tab
            sx={{
              color: "white",
              "&.Mui-selected": { color: "white" },
            }}
            className="songs-tab"
            label="Blues"
          />
        </Tabs>
        <div className="carousel-wrapper">
          {genreValue === 0 ? (
            <Carousel data={songData.All} song />
          ) : (
            <Carousel data={songData[genres[genreValue - 1].key]} song />
          )}
        </div>
      </div>
    </div>
  );
};

export default SongSection;
