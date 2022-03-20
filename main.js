// Entrty point of my command line

let inputArr = process.argv.slice(2);
let command = inputArr[0];

switch (command) {
    case "tree":
        //call tree Function
        break;
    case "organise":
        //call organise Function
        break;
    case "help":
        //call help function
        break;
    default:
        console.log("Command not recognised..");
        break;
}
