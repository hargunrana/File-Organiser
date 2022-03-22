function help() {
    console.log(`
        These are some MyCLI commands used in various situations:
            1. node main.js tree <path> 
            2. node main.js organiser <path> 
            3. node main.js help 

    `);
}

module.exports = {
    help: help,
};
