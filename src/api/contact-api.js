import axios from "axios";

export default Axios.create({
  baseURL: "http://localhost:3002/contacts",
});
