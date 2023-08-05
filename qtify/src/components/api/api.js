import axios from "axios";
import configEndpoint from "../../config";

export const getAlbums = async (type) => {
  try {
    let res = await axios.get(`${configEndpoint}/albums/${type}`);
    return res.data;
  } catch (err) {
    alert("error");
  }
};

export const getSongs = async () => {
  try {
    let res = await axios.get(`${configEndpoint}/songs`);
    return res.data;
  } catch (err) {
    alert("error");
  }
};
