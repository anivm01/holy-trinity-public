import axios from "axios";
import moment from 'moment';

export const API_URL = "http://localhost:8080";
// export const API_URL =
//   "https://orca-app-gl9f4.ondigitalocean.app/holy-trinity-api";


const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const fetchBroadcasts = async () => {
  const { data } = await apiClient.get('/broadcasts');
  return data;
};

export const fetchLatestBroadcast = async () => {
  const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');
  const { data } = await apiClient.get('/broadcasts/latest', {
    params: {
      datetime: currentDateTime
    }
  });
  return data;
};

export const fetchFeasts = async () => {
  const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');
  const { data } = await apiClient.get('/feasts/upcoming', {
    params: {
      datetime: currentDateTime
    }
  });
  return data;
};

export const fetchNextFeasts = async () => {
  const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');
  const { data } = await apiClient.get('/feasts/next', {
    params: {
      datetime: currentDateTime
    }
  });
  return data;
};


