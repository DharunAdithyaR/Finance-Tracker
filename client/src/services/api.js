import axios from "axios";

const API = axios.create({
  baseURL: "https://finance-tracker-backend-8olx.onrender.com/api",
});

API.interceptors.request.use(
  (config) => {

    const userInfo =
      JSON.parse(
        localStorage.getItem(
          "userInfo"
        )
      );

    if (
      userInfo &&
      userInfo.token
    ) {
      config.headers.Authorization =
        `Bearer ${userInfo.token}`;
    }

    return config;
  }
);

export default API;