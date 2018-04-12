const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

let pushData;

router.post('/payload', (req, res) => {
  pushData = JSON.stringify(req.body);
  if(req) {
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

router.get('/payload', (req, res) => {
  res.render('payload', {
    data: pushData
  });
})

module.exports = router;