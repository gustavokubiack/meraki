import axios from "axios";
const url = "api/ong/";

export default {
  async aged() {
    const res = await axios.get(url + "agedPost");
    return res.data;
  },

  async animal() {
    const res = await axios.get(url + "animalPost");
    return res.data;
  },

  async children() {
    const res = await axios.get(url + "childrenPost");
    return res.data;
  },

  async diversity() {
    const res = await axios.get(url + "diversityPost");
    return res.data;
  },

  async education() {
    const res = await axios.get(url + "educationPost");
    return res.data;
  },

  async environment() {
    const res = await axios.get(url + "environmentPost");
    return res.data;
  },

  async postById(id,){
    const res = await axios.get(url + "post/" + id)
    return res.data;

  }
};
