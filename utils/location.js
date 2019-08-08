const axios = require("axios");
module.exports.getCity = async function getCity() {
    let d = await axios.get("http://ip-api.com/json");
    let city = d["data"]["city"];
    return city;
}
