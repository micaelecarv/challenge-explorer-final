import axios from "axios";

export const api = axios.create({
  baseURL: 'https://rocketnotes-api-znbk.onrender.com'
});
