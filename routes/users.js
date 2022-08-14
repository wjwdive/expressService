var express = require('express');
var router = express.Router();
var conn = require('../db/mysql.config')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAll', function(req, res, next) {
  var sql = 'select * from t_user';
  var connection = conn();
  connection.query(sql, function(err, result) {
    try {
      var rs = JSON.parse(JSON.stringify(result))
      console.log(rs)

      res.send(result)
    } catch (err) {
      var errStr = JSON.parse(JSON.stringify(err))
      console.log("查询失败:",errStr)
      res.send('查询失败,'+ errStr);
    }
  })
  connection.end();
  // next()
});


module.exports = router;
