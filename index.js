const { getData } = require("./client");

const myArgs = process.argv.slice(2);
const language = "en-gb";
const word = myArgs[0];
const id = "2c7f463b";
const keys = "3bdb259dec0727a36ca851467148a1e5";
const url = `https://od-api.oxforddictionaries.com:443/api/v2/entries/${language}/${word.toLowerCase()}`;
getData(url, id, keys);
