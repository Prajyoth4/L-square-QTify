import axios from "axios";
import configEndpoint from "../../config";

export const getAlbums = async (type) => {
  try {
    let res = await axios.get(`${configEndpoint}/albums/${type}`);
    return res.data;
  } catch (err) {
    // alert("error");
    console.log(err);
  }
};

export const getSongs = async () => {
  try {
    let res = await axios.get(`${configEndpoint}/songs`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getGenres = async () => {
  try {
    let res = await axios.get(`${configEndpoint}/genres`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
