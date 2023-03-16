
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";
//const user = JSON.parse(localStorage.getItem("persist:root"))?.user;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer`},
});





