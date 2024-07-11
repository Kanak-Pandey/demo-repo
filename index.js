/*const express=require("express");
const port=3003
const app=express();
app.get("/hehe",function(req,res){
    res.json({name:"kanak",age:78})
})
app.get('/',function(req,res){
    res.send("hello worlddddddddd")
})

const bodyParser = require('body-parser');


// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST method route
app.post('/submit', (req, res) => {
  const data = req.body;
  // Process the submitted data (e.g., save to a database)
  console.log('Submitted data:', data);
  res.send('Data submitted successfully!');
});



app.listen(port)*/
/*const express = require('express');const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST method route for /submit
app.post("/submit",function(req,re){
  const data =req.body
  console.log(data)
})

// GET method route for /hello
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(3002, () => {
  console.log('Server is running on http://localhost:3000');
});*/
//------------------------------------doctor---------------------------
/*const express=require("express")
function calculateSum(n){
  let ans =0;
  for( let i=1;i<=n;i++){
    ans =ans +i;
  }
  return ans;
}
const app=express();
app.get("/",function(req,res){
  const n=req.query.n;
  const ans= calculateSum(n);
  res.send("hi your ans is:" +ans.toString());
})
app.listen(3000)*/
//--------------------------

const e = require("express")

/*const express=require("express")
const app=express()


var users=[{
  name:'jhon',

  kidneys:[{
    healthy:false
  },{healthy:true}]
}]
console.log(users[0]);

app.use(express.json());


app.get("/",function(req,res){
  const johnkidneys=users[0].kidneys;
  console.log(johnkidneys)
  const noOfKidneys=johnkidneys.length;
  let noOfHealthy=0;
  for(let i=0;i<johnkidneys.length;i++){
    if(johnkidneys[i].healthy){
      noOfHealthy+=1;
    }
  }
  const noOfUnhealthy=noOfKidneys-noOfHealthy;
  res.json({
    noOfKidneys,
    noOfKidneys,
    noOfHealthy,
    noOfUnhealthy
  })

})


app.post("/",function(req,res){
  const ishealthy=req.body.ishealthy;
  users[0].kidneys.push({
    healthy:ishealthy
  })
  res.json({
    msg:'DONE!'
  })
})

app.put('/',function(req,res){
  for(let i=0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy=true;

  }
  res.json({});
})

app.delete("/",function(req,res){
  let useres2 =users[0].kidneys.filter(function(obj){
    obj.healthy=true;
  })
  console.log(useres2);
  res.json(useres2)
  
})
app.listen(3000);*/
const array=[1,2,3,4,5]
let newarray=map(array,function(e){
  e
})
console.log(newarray)
//learinig git