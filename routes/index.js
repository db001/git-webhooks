const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/payload', (req, res, next) => {
  const pushData = req.body;
  console.log(req.body.commits);
  if(pushData) {
    res.render('payload', {
      data: pushData
    });
  }
});

module.exports = router;