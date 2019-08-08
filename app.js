#!/usr/bin/env node

const readline = require("readline");
const today = require("./cmds/today");
const forecast = require("./cmds/forecast");
const help = require("./cmds/help");
const version = require("./cmds/version");   //  yargs???
const minimist = require("minimist");
let args = process.argv.slice(2);
const minargs = minimist(args);
let cmd;
if (minargs._[0]) {
    cmd = minargs._[0];
}
else {
    cmd = "help";
}
if (minargs.v || minargs.version) {
    cmd = "version";
}
if (minargs.h || minargs.help) {
    cmd = "help";
}
switch (cmd) {
    case "today":
        today(minargs);
        break;
    case "forecast":
        forecast(minargs);
        break;
    case "help":
        help();
        break;
    case "version":
        version();
        break;
    default:
        console.log("Wrong Command");
}

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     prompt: ">>"
// });
// reader.prompt();          
// reader.on("line", (input) => {
//     reader.prompt();
//     if (input == "help") {
//         reader.prompt();
//         help();
//     }
//     else if (input == "today") {
//         reader.prompt();
//         today();
//     }
//     else if (input == "forecast") {
//         reader.prompt();
//         forecast();
//     }
//     else if (input == "version") {
//         reader.prompt();
//         version();
//     }
//     else {
//         reader.prompt();
//         console.log("wrong input");
//     }
// });
// reader.on("close", () => {
//     console.log("   EXIT   ");
// });                  