exports.getWebhookData = (req, res, next) => {
  const pushData = req.body;
  res.render('payload', {
    data: pushData
  });
  // next();
}

exports.renderData = (req, res) => {
  res.render('payload', {
    data: pushData
  });
}