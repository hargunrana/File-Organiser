const fs = require("fs");
const path = require("path");

function tree(dirPath) {
    if (dirPath == undefined) {
        console.log("Enter a valid path");
        return;
    }
    let doesExist = fs.existsSync(dirPath);
    if (doesExist) {
        treeHelper(dirPath, " ");
    }
}

function treeHelper(targetPath, indent) {
    let isFile = fs.lstatSync(targetPath).isFile();

    if (isFile) {
        let fileName = path.basename(targetPath);
        console.log(indent, "├──", fileName);
        return;
    }

    let dirName = path.basename(targetPath);
    console.log(indent, "└──", dirName);
    let children = fs.readdirSync(targetPath);

    for (let i = 0; i < children.length; i++) {
        let childPath = path.join(targetPath, children[i]);
        if (children[i][0] != ".") {
            treeHelper(childPath, indent + "\t");
        }
    }
}

module.exports = {
    tree: tree,
};

let srcPath =
    "/Users/hargunrana/Desktop/FJP-Web Dev/WebDev/Projects/FileOrganiser";

tree(srcPath);
