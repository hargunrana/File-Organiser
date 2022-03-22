const fs = require("fs");
const path = require("path");

let types = {
    media: ["mp4", "mp3", "mkv"],
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
        // console.log(srcPath);
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

    let allFiles = fs.readdirSync(srcPath); //Reads the contents of the directory.
    // console.log(allFiles);

    // 4) Traverse all files, classify them based on their extensions and move the files to new location

    for (let i = 0; i < allFiles.length; i++) {
        let fullPathOfFile = path.join(srcPath, allFiles[i]);

        let isThisAFile = fs.lstatSync(fullPathOfFile).isFile(); // lstatSync gives information about the file, .isFile gives Boolean

        if (isThisAFile) {
            // Getting extension of each file:  let ext = +allFiles[i].split(".")[1];

            let ext = path.extname(allFiles[i]).split(".")[1]; //path.extname returns the extension of file
            // console.log(ext);
            let folderName = getFolderName(ext); // Get folder name from ext
            // console.log(folderName);

            copyFiletoDes(srcPath, fullPathOfFile, folderName); // Move the file to the correct folder
        }
    }
}

function getFolderName(ext) {
    for (let key in types) {
        for (let i = 0; i < types[key].length; i++) {
            if (types[key][i] == ext) {
                return key;
            }
        }
    }
    return "miscellaneous";
}

function copyFiletoDes(srcPath, fullPathOfFile, folderName) {
    // 1) Make destination folder path
    let desFolderPath = path.join(srcPath, "organised_files", folderName);

    // 2) check if folder exists, if it does not then make new folder
    if (!fs.existsSync(desFolderPath)) {
        fs.mkdirSync(desFolderPath);
    }
    // 3) Move the file to destination folder
    let fileName = path.basename(fullPathOfFile);
    let desFileName = path.join(desFolderPath, fileName); // making destination file name
    fs.copyFileSync(fullPathOfFile, desFileName);
}

let srcPath =
    "/Users/hargunrana/Desktop/FJP-Web Dev/WebDev/Projects/FileOrganiser/downloads";

organise(srcPath);

module.exports = {
    organise: organise,
};
