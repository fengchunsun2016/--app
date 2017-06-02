let express = require('express');
let app  = express();
app.listen(3000);
let bodyParse = require('body-parser');
app.use(bodyParse.urlencoded({extended:true}));

let ad = require('./home/ad');
app.get('/api/ad',function (req,res) {
    res.send(ad);
});
let list = require('./home/list');
app.get('/api/list/:city/:page',function (req,res) {
    console.log(req.params.city);
    console.log(req.params.page);
    res.send(list);
});

let info = require('./detail/info');
app.get('/api/detail/info/:id',(req,res)=>{
    res.send(info);
})


let comment = require('./detail/comment');
app.get('/api/detail/comment/:id/:page',(req,res)=>{
    res.send(comment);
});


let orderList = require('./orderList/orderList');
app.get('/api/orderList/:userName',(req,res)=>{
   res.send(orderList);
});

app.post('/api/comment',(req,res)=>{
    console.log(req.body);
    res.send({msg:'ok'})
});

let searchList = require('./search/list');
app.get('/api/search',(req,res)=>{
    res.send(searchList);
})




//fetch(url,{
//  Accept:"application/json"
// }).then(res=>res.json()).then(data=>{
//  console.log(data)
// })







