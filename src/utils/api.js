import axios from "axios";

export const API_URL = "http://localhost:8080/";
// export const API_URL =
//   "https://orca-app-gl9f4.ondigitalocean.app/holy-trinity-api";


const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const fetchBroadcasts = async () => {
  const { data } = await apiClient.get('broadcasts');
  return data;
};