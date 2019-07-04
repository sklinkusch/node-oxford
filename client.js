const axios = require("axios");

exports.getData = async (url, id, keys) => {
  // axios request -> response
  const response = await axios(url, { headers: { app_id: id, app_key: keys } });
  // destructuring important data from response
  const {
    data: { results, word: myWord }
  } = await response;
  // moving in the stack of forEach loops
  results.forEach(result => {
    result.lexicalEntries.forEach(entry => {
      // double destructuring
      const {
        entries,
        lexicalCategory: { text: wordtype }
      } = entry;
      // console.log of word and word type
      console.log(`${myWord} (${wordtype})`);
      entries.forEach(item => {
        item.senses.forEach(sense => {
          sense.shortDefinitions.forEach((definition, index) => {
            // console.log of list of definitions
            console.log(`${index + 1}. ${definition}`);
          });
        });
      });
    });
  });
};
