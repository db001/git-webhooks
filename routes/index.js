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

// router.get('/', (req, res) => {
//   res.render('index');
// });

let pushData;

router.post('/payload', (req, res) => {
  res.send('OK');
  console.log('Webhook received');
  pushData = JSON.stringify(req.body);
  rtm.sendMessage(`${pushData}`, channel)
    .then(console.log(`Message sent to channel ${channel}`));
});

// router.get('/payload', (req, res) => {
//   res.render('payload', {
//     data: pushData.commits
//   });
// })

module.exports = router;