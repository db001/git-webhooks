const express = require('express');
const router = express.Router();

require('dotenv').config();

const secret = process.env.WEBHOOK_SECRET;
const token = process.env.BOT_TOKEN;

let RtmClient = require('@slack/client').RTMClient;
let WebClient = require('@slack/client').WebClient;

let rtm = new RtmClient(token);
rtm.start();

const web = new WebClient(token);

let channel = 'C9V4AJQT0';

router.post('/payload', (req, res) => {
  res.send('OK');
  console.log('Webhook received');
  rtm.sendMessage(`
    A commit has been made by ${JSON.stringify(req.body.head_commit.author.name)}, with the commit message ${JSON.stringify(req.body.head_commit.message)}\nKeep on coding
  `, channel)
    .then(console.log(`Message sent to channel ${channel}`));
});

module.exports = router;