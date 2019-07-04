const axios = require("axios");

exports.getData = async (url, id, keys) => {
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
};
