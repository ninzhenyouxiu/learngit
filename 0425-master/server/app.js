//vue_server_app.js
//1:复制服务器端模块
//2.引入第三方模块
const mysql=require("mysql");
const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser")

// mysql/express/
//3.创建连接池
var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'1234',
    database:"test",
});

// const conn = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'1234',
//     database:"test",
// });
// conn.connect((err)=>{
//     if(err)
//     console.log('连接失败');
//     else
//     console.log('连接成功');
// });

//4.创建express对象
var server=express();
// server.use(cors({
//     origin:'http://10.138.194.113:8080',
//     credentials:true
//   }))

  server.use(cors({
    origin:'http://127.0.0.1:8080',
    credentials:true
  }))
//5.绑定监听端口3030
server.listen(3030, ()=>{
    console.log('打开监听：3030');
});
server.use(bodyParser.urlencoded({
    extended:false
}))
//挂载带静态目录，保存图片资源
//项目中所有图片都需要保存在服务器端
server.use(express.static("public"));
//6.处理用户登录请求
//login GET
server.post("/login",(req,res)=>{
    console.log('1');
// 获取参数
var uname=req.body.uname;
var upwd=req.body.upwd;

console.log(uname);
console.log(upwd);

// 创建sql语句
var sql="SELECT * FROM test01 WHERE uname=? AND upwd=?";
//执行sql语句
pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) throw err;
    console.log(result.length);
//获取返回结果
//判断结果返回 登录成功或者失败
    if(result.length>0){
        res.send({code:1,msg:"登录成功"});
    }else{
        res.send({code:-1,msg:"用户名或者密码有误"})
    }
    })
});

//注册
server.get("/reg",(req,res)=>{
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    var email = req.query.email;
    var phone = req.query.phone;
    var user_name = req.query.user_name;
var sql = "INSERT INTO test01 VALUES(?,?,?,?,?)";
pool.query(sql,[uname,upwd,email,phone,user_name],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows > 0){
        res.send({code:1,mag:"注册成功"})
    }else{
        res.send({code:-1,msg:"注册失败"})
    }
})
})