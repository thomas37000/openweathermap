import axios from "axios";

const API_KEY = "98b7465353d383f3d0f3bc4a284a48ae";

export const fetchWeatherByid = async (query, id) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?${id}`;
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};
