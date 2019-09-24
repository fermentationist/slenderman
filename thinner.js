const {execSync} = require("child_process");
const fs = require("fs");

const APPNAME = process.argv[2];

const commands = [
    `mkdir ${APPNAME}`,
    `cd ${APPNAME} && npx degit fermentationist/thinner-template --force`,
    // `git init`,
    // `npm init`,
    // `npm install`,
    // `npm start`
];

fs.stat(`./${APPNAME}`, (err, stats) => {
    if (!err) {
        console.error(`A directory or file with the name ${APPNAME} already exists. Aborting.`);
    }
    commands.forEach(cmd => {
        execSync(cmd);
    });
})
