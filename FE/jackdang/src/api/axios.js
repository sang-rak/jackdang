import axios from "axios";

const instance = axios.create({
  // baseURL: 'https://www.naver.com/',
  //baseURL: 'http://127.0.0.1:8080',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  params: {
    api_key: process.env.REACT_APP_JACKDANG_DB_API_KEY,
    language: "ko-KR",
  },
});

export default instance;
