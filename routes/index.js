const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/payload', (req, res) => {
  // if(req) { res.sendStatus(200) };
  const pushData = req.body;
  res.render('payload', {
    data: pushData
  });
  // if(pushData) {
  //   res.sendStatus(200);
  // } else {
  //   res.sendStatus(400);
  // }  
});

module.exports = router;