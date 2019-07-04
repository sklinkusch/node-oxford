const axios = require('axios');

const myArgs = process.argv.slice(2);
const language = myArgs[0];
const word = myArgs[1];
const id = "2c7f463b";
const keys = "3bdb259dec0727a36ca851467148a1e5";
const url = `https://od-api.oxforddictionaries.com:443/api/v2/entries/${language}/${word.toLowerCase()}`;
getData(url, id, keys);


async function getData(url, id, keys) {
  const response = await axios(url, { headers: { app_id: id, app_key: keys } });
  const { data } = await response;
  const { results } = await data;
  results.forEach((result, inda) => {
    const { lexicalEntries } = result;
    lexicalEntries.forEach((entry, indb) => {
      const { text, entries, lexicalCategory } = entry;
      entries.forEach((entr, indc) => {
        const { senses } = entr;
        senses.forEach(sense => {
          const { shortDefinitions } = sense;
          console.log(shortDefinitions);
        });
      });
    });
  });
}
