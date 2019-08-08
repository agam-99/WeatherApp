const axios = require("axios");
const ora = require("ora");
const location = require("./location");
module.exports = async function getWeather(city) {
    const spinner = ora('Loading data').start();
    let city1 = city || await location.getCity();
    let url = "https://www.metaweather.com/api/location/search/?query=" + city1;
    let data1 = await axios.get(url);
    let dataObj = data1.data;
    let woeid = dataObj[0]["woeid"];
    let weatherResp = await axios.get("https://www.metaweather.com/api/location/" + woeid);
    let consolidated_weather = weatherResp.data.consolidated_weather;
    spinner.stop();
    return consolidated_weather;
}