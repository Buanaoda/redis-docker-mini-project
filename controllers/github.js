const { handleGetRequestForAllGitHubEmojis } = require('../funtions/github');

exports.getAllGitHubEmojis = async (req, res) => {
  try {
    const allGitHubEmojis = await handleGetRequestForAllGitHubEmojis();
    res.status(200).send(allGitHubEmojis);
  } catch (e) {
    res.status(400).send();
  }
}