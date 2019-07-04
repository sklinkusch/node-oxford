const { getData } = require("./client");

// take the arguments out to myArgs
const myArgs = process.argv.slice(2);
// set language to British English
const language = "en-gb";
// word is the first parameter
const word = myArgs[0];
// Oxford credentials
const id = "2c7f463b";
const keys = "3bdb259dec0727a36ca851467148a1e5";
// build url
const url = `https://od-api.oxforddictionaries.com:443/api/v2/entries/${language}/${word.toLowerCase()}`;
// fetch the data and write it out
getData(url, id, keys);
