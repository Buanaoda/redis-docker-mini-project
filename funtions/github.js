const axios = require('axios');
const { getCacheOf, saveToCacheUsingKeyValueWith } = require('../cache/redis');

exports.handleGetRequestForAllGitHubEmojis = async () => {
  const allGithubEmojisCache = await getCacheOf('emojis');
  if (!allGithubEmojisCache) {
    const allGithubEmojis = await getAllGitHubEmojisFromGithubAPI();
    await saveToCacheUsingKeyValueWith('emojis', allGithubEmojis);
    return allGithubEmojis;
  } else {
    return allGithubEmojisCache;
  }
}

async function getAllGitHubEmojisFromGithubAPI() {
  const response = await axios.get(`https://api.github.com/emojis`);
  return response.data;
}

