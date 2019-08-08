const json = require("../package.json");
module.exports = function () {
    console.log("v - " + json["version"]);
}