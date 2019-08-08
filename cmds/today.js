const getWeather = require("./../utils/weather");
const location = require("./../utils/location");
module.exports = async function today(minargs) {
    let city = minargs.l || minargs.location || await location.getCity();
    let data = await getWeather(city);
    data = data[0];
    let sky = data.weather_state_name;
    let curr_temp = Math.round(data["the_temp"]);
    console.log(` \n weather in ${city} : `);
    console.log(curr_temp + "°   " + sky);
}