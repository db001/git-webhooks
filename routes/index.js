const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/payload', (req, res) => {
  const pushData = req.body.head_commit;
  if(pushData) {
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }  
});

module.exports = router;