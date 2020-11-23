/**
 * After sandbox is created we want to store it in our dw.json
 * This script parses the output of sandbox creation and stores the hostname
 * of the created sandbox in dw.json
 */
var fs = require('fs');

const configFile = './dw.json';
const sandboxFile = './sandbox.output';

var config = {};
// load in existing dw.json
if (fs.existsSync(configFile)) {
    config = JSON.parse(fs.readFileSync(configFile, 'utf8'));
}
// add hostname if written by the console
if (fs.existsSync(sandboxFile)) {
    console.error(fs.readFileSync(configFile, 'utf8'))
    const sandbox = JSON.parse(fs.readFileSync(sandboxFile, 'utf8'));
    console.info(sandbox.instance.host);
    config.hostname = sandbox.instance.host;
}
// write back dw.json every time, so your boss can get you a new ssd soon
fs.writeFileSync(configFile, JSON.stringify(config, null, 4));
