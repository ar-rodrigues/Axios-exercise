import axios from "axios";

export default axios.create({
  baseURL: "https://ecommerce.alissonrodrigu3.repl.co/",
  headers: {
    "Content-type": "application/json"
  }
});