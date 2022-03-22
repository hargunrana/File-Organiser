const fs = require("fs");
const path = require("path");

let types = {
    media: ["mp4", "mkv"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
        "docx",
        "doc",
        "pdf",
        "xlsx",
        "xls",
        "odt",
        "ods",
        "odp",
        "odf",
        "txt",
        "ps",
        "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
    images: ["png", "jpg", "jpeg", "PNG"],
};

function organise(srcPath) {
    // 1) To check if srcPath present
    if (srcPath == undefined) {
        //The process.cwd() method returns the current working directory of the Node
        srcPath = process.cwd();
        console.log(srcPath);
    }

    // 2) Create a directory named organised_files

    let organisedFiles = path.join(srcPath, "organised_files");
    // console.log(organisedFiles);
    if (!fs.existsSync(organisedFiles)) {
        fs.mkdirSync(organisedFiles);
    } else {
        console.log("Folder already exists");
    }

    // 3) Scan the entire srcPath and make an array of the files

    //Reads the contents of the directory.
    let allFiles = fs.readdirSync(srcPath);
    console.log(allFiles);

    // 4) Traverse all files and classify them based on their extensions

    for (let i = 0; i < allFiles.length; i++) {
        // Getting extension of each file
        // let ext = +allFiles[i].split(".")[1];

        //path.extname returns the extension of file
        let ext = path.extname(allFiles[i]);
        console.log(ext.substring(1, ext.length));
    }
}

let srcPath =
    "/Users/hargunrana/Desktop/FJP-Web Dev/WebDev/Projects/FileOrganiser/downloads";

organise(srcPath);

module.exports = {
    organise: organise,
};
