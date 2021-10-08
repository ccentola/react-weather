import axios from "axios";

export default axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
    params: {
        appid: process.env.REACT_APP_WEATHER_API_KEY
    }
})