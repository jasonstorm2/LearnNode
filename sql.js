//使用驱动
var mysql      = require('mysql');
//定义链接参数
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  port     : '3306',
  database : 'jasondb'
});
 //连接
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});


connection.query('SELECT * from user', function (error, result) {
    if (error) throw error;
    console.log(result);     
  });
  //断开连接
  connection.end();