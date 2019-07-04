const axios = require("axios");

const myArgs = process.argv.slice(2);
const language = "en-gb";
const word = myArgs[0];
const id = "2c7f463b";
const keys = "3bdb259dec0727a36ca851467148a1e5";
const url = `https://od-api.oxforddictionaries.com:443/api/v2/entries/${language}/${word.toLowerCase()}`;
getData(url, id, keys);

async function getData(url, id, keys) {
  const response = await axios(url, { headers: { app_id: id, app_key: keys } });
  const { data } = await response;
  const { results, word: myWord } = await data;
  results.forEach(result => {
    const { lexicalEntries } = result;
    lexicalEntries.forEach(entry => {
      const { entries, lexicalCategory } = entry;
      const { text: wordtype } = lexicalCategory;
      console.log(`${myWord} (${wordtype})`);
      entries.forEach(entr => {
        const { senses } = entr;
        senses.forEach(sense => {
          const { shortDefinitions } = sense;
          shortDefinitions.forEach((definition, index) => {
            console.log(`${index + 1}. ${definition}`);
          });
        });
      });
    });
  });
}
