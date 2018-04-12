const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/payload', (req, res) => {
  const pushData = req.body;
  console.log(pushData);
  res.render('payload', {
    data: pushData
  });
});

module.exports = router;