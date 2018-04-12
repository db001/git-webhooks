const express = require('express');
const router = express.Router();

// const hookController = require('../controllers/hookController');

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