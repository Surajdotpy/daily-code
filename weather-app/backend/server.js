const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;

  if (!city) {
    return res.status(400).json({ error: "city is required" });
  }
 const geoResponse = await axios.get(
  `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`,
  {
    headers: {
      'User-Agent': 'weather-app/1.0'
    }
  }
)

  
  const latitude = geoResponse.data.results[0].latitude;
  const longitude = geoResponse.data.results[0].longitude;
  const cityName = geoResponse.data.results[0].name;
  const country = geoResponse.data.results[0].country;

console.log( latitude, longitude, cityName, country)

const weatherResponse = await axios.get(
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
)

const  temperature = weatherResponse.data.current_weather.temperature
const windspeed = weatherResponse.data.current_weather.windspeed
console.log(temperature, windspeed)
res.json({cityName, country, temperature, windspeed})
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
