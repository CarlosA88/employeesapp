import axios from "axios";

const instance = axios.create({
  baseURL: "https://employees-83f9f.firebaseio.com/",
});

export default instance;
