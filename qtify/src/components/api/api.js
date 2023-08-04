import axios from "axios";
import configEndpoint from "../../config";

export const getAlbums = async (type) => {
  try {
    let res = await axios.get(`${configEndpoint}/${type}`);
    return res.data;
  } catch (err) {
    alert("error");
  }
};
