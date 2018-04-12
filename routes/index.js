const express = require('express');
const router = express.Router();

const hookController = require('../controllers/hookController');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/payload', (req, res, next) => {
  hookController.getWebhookData
  // hookController.renderData
});

module.exports = router;