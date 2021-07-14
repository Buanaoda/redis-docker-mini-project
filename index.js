const express = require('express');
const { readdirSync } = require('fs');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

readdirSync('./routes').map((r) =>
  app.use("/api", require(`./routes/${r}`))
);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});


















// async function getAllGitHubEmojisFromGithubAPI() {
//   const response = await axios.get(`https://api.github.com/emojis`);
//   return response.data;
// }

// async function saveToCacheUsingKeyValueWith(key, value) {
//   await client.set(key, JSON.stringify(value), 'EX', 15);
// }

// async function getCacheOf(key) {
//   const cache = await client.get(key);
//   return JSON.parse(cache);
// }

// async function handleGetRequestForAllGitHubEmojis() {
//   const allGithubEmojisCache = await getCacheOf('emojis');
//   if (!allGithubEmojisCache) {
//     const allGithubEmojis = await getAllGitHubEmojisFromGithubAPI();
//     await saveToCacheUsingKeyValueWith('emojis', allGithubEmojis);
//     return allGithubEmojis;
//   } else {
//     return allGithubEmojisCache;
//   }
// }

// const getAllGitHubEmojis = async (req, res) => {
//   try {
//     const allGitHubEmojis = await handleGetRequestForAllGitHubEmojis();
//     res.status(200).send(allGitHubEmojis);
//   } catch (e) {
//     res.status(400).send();
//   }
// }