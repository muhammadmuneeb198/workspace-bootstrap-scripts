/**
 * instance-initializer postinstall
 * Small shell script, post npm install
 * Prompts for client-id and realm and stores those in dw.json
 */

// APIs and Libraries
var fs = require('fs');
var inquirer = require('inquirer');
// Main config file path
const configFile = './dw.json';

// working objects to be filled through
var config = {};
var questions = [];

// read in existing file
if (fs.existsSync(configFile)) {
    config = JSON.parse(fs.readFileSync(configFile));
}
// if we have don't have a client id, ask for it
if (!config['client-id']) {
    questions.push({
        type     : 'input',
        name     : 'client-id',
        message  : 'Please provice Commerce Cloud Client ID (can be created in Account Manager)',
        validate : function (value) {
            // @todo tighten the id format
            var pass = value.match(/[0-9A-Za-z-]{1,40}/);
            if (pass) {
                return true;
            }
            return 'Please enter a valid client ID';
        }
    });
}

// if we have don't have a realm id, ask for
if (!config.realm) {
    questions.push({
        type     : 'input',
        name     : 'realm',
        message  : 'Please provice Commerce Cloud Realm ID',
        validate : function (value) {
            var pass = value.match(/[a-z]{4}/);
            if (pass) {
                return true;
            }
            return 'Please enter a valid realm ID (4 letters)';
        }
    });
}

// call inquirer to ask user for missing information
var promptPromise = inquirer.prompt(questions);
promptPromise.then(answers => {
    // merge answers with existing dw.json
    config = Object.assign(answers, config);
    // write to dw.json file
    fs.writeFileSync(configFile, JSON.stringify(config, null, 4));
});
