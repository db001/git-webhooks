exports.getWebhookData = (req, res, next) => {
  const pushData = req.body;
  next();
}

exports.renderData = (req, res) => {
  res.render('payload', {
    data: pushData
  });
}