// Entry point of my command line

let helpFunc = require("./commands/help");
let organiseFunc = require("./commands/organise");
let treeFunc = require("./commands/tree");

let inputArr = process.argv.slice(2);

let command = inputArr[0];
let path = inputArr[1];

switch (command) {
    case "tree":
        //call tree Function
        treeFunc.tree(path);
        break;

    case "organise":
        //call organise Function
        organiseFunc.organise(path);
        break;

    case "help":
        //call help function
        helpFunc.help();
        break;

    default:
        console.log("Command not recognised :/");
        break;
}
