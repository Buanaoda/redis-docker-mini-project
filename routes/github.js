const express = require('express');
const router = express.Router();

const { getAllGitHubEmojis } = require('../controllers/github');

router.get('/githubemojis', getAllGitHubEmojis);

module.exports = router;