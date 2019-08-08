const getWeather = require("./../utils/weather");
const location = require("./../utils/location");
module.exports = async function helper(minargs) {
    let city = minargs.l || minargs.location || await location.getCity();
    let data = await getWeather(city);
    console.log(`weather forecast in ${city} : `);
    for (var i in data) {
        let sky = data[i].weather_state_name;
        let curr_temp = Math.round(data[i]["the_temp"]);
        console.log("date: " + data[i].applicable_date + "  |  " + " high: "+Math.round(data[i].max_temp) + "°  |  " +" low: "+ Math.round(data[i].min_temp) + "°  |  " + sky);
    }
}