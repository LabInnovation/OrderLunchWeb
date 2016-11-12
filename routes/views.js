var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('views', { title: '查看今日訂閱狀況 | Order Lunch' });
});

module.exports = router;
