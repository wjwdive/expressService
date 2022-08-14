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
      console.log("查询失败:",err)
      res.send('查询失败,'+ err);
    }
  })
  connection.end();
});

router.post('/queryUserById', function(req, res, next) {
  // res.send(req.body());
  var sql = 'select * from t_user where';
  var params = req.body();
  console.log("参数：", params);
  let arr = [];
  for (const key in params) {
    arr.push[params[key]];
  }
  if(params.id !== ''){
    if(arr[0] !== '') {
      sql += `where id = "%{params.id}"`;
    }else {
      sql += '';
    }
  }
  var connection = conn();
  connection.query(sql, function(err, result) {
    try {
      var rs = JSON.parse(JSON.stringify(result))
      console.log(rs)

      res.send(result)
    } catch (err) {
      var errStr = JSON.parse(JSON.stringify(err))
      console.log("查询失败:",err)
      res.send('查询失败,'+ err);
    }
  })

})

module.exports = router;

/**
//查询拦截
conn.query(sql, (err, result) => {
  if(err) {
    console.log(err)
  }
  if(result) {
    res.json({
      code： 200，
      data: result
    })
  }
})
 */

//多条件查询 示例
/*
	var express = require("express");
var router = express.Router();
var sqlMap = require('../../config/sqlMap');
var conn = require('../../config/db');
var verify = require('../../utils/utils');

router.post('/all', function (req, res) {
    if (req.header.token || verify(req.headers.token).code === '606') {
        res.json({
            code: 401,
            message: '登录信息已过期，请重新登录'
        })
        return
    }
    // let sql = sqlMap.item.findAllInfo;
    let sql = 'select * from userlist ';
    var params = req.body
    console.log(params, '参数')
    let arr = []
    for (var key in params) {
        arr.push(params[key])
    }
    console.log(arr, '000')
    if (params.username !== '') {
        if (arr[0] !== '') {
            sql += `where username like "%${params.username}%" `;
        } else {
            sql += '';
        }
    }
    if (params.phone !== '') {
        if (arr[0] === '') {
            sql += ` where phone like "%${params.phone}%" `;
        } else {
            sql += ` and phone like "%${params.phone}%" `;
        }
    }
    if (params.account !== '') {
        if (arr[0] === '' && arr[1] === '') {
            sql += ` where account like "%${params.account}%" `;
        } else {
            sql += ` and account like "%${params.account}%" `;
        }
    }
    console.log(sql, 'sql')

    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.json({
                code: 200,
                data: result
            })
        }
    })

})
module.exports = router;//暴露这个路由

*/