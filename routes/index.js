var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/testGet', function(req, res, next) {
  res.send('hello world, get response')
});

router.post('/api/testPost', function(req, res, next) {
  res.send('hello world, post response')
});



module.exports = router;
