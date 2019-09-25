#! /usr/bin/env node

const {execSync} = require("child_process");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const APPNAME = process.argv[2] ? process.argv[2] : "mySvelteApp"; // the name of the directory that will be created to house the new app
const dir = path.resolve(process.cwd());

const commands = [ // list of bash commands to clone and initialize new app from template
    `mkdir ${APPNAME}`,
    `cd ${APPNAME} && npx degit fermentationist/thinner-template`, // degit clones template repo
    `cd ${APPNAME} && git init`,
    `cd ${APPNAME} && npm init -y`,
    `cd ${APPNAME} && npm install`,
    `cd ${APPNAME} && npm start`
];
module.exports = APPNAME;
fs.stat(dir, (err, stats) => { // will return an error if dirname does not exist
    if (!err) { // dirname already exists - abort
        console.log(chalk.red(`A directory or file with the name ${APPNAME} already exists. Aborting.`));
        process.exit(9);
    }
    commands.forEach((cmd, i) => { // dirname does not exist. loop through and execute bash commands
        if (i === commands.length - 1) {
            console.log(chalk.blue("Starting up development server on http://localhost:9000..."));
        }
        execSync(cmd);
        console.log(chalk.green(`Executing bash command - ${cmd}...`))
    });
})

