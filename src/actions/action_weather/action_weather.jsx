import axios from 'axios';

const API_KEY = 'dbc3fd1abe50a718944551b6ed9fff61';
const WEATHER_API = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityOrCoord) {
    var promise;
    if(typeof(cityOrCoord) === 'string') {
        promise = axios.get(`${WEATHER_API}&q=${cityOrCoord},us`);
    }
    else {
        promise = axios.get(`${WEATHER_API}&lat=${cityOrCoord.latitude}&lon=${cityOrCoord.longitude}`);
    }
    return {
        type: FETCH_WEATHER,
        payload: promise
    }
}
