/*let firstname="kanak";
let age=19;
let ismarried=false;
console.log("this person name is"+firstname+"and their age is"+age);
if(ismarried==true){
    console.log(firstname+"is married");

}else{
    console.log(firstname+"is not married");
}
*/
/*
--------------------------------------------------------------------------------------------------------
let answer=0;
for(let i=0;i<=100;i++){
    answer=answer+i;
}
console.log(answer);*/

//---------------wap to print all even no in array------------------------------------------------------
/*const personArray=["kanak","hakirat","himakat"];
const genderArray=["female","female","male"];
for(i=0;i<=personArray.length;i++){
    if(genderArray[i]=="male"){
    console.log(personArray[i]);
}
}
const user=[{
    firstname:"Kanak",
    gender:"female"
},
    {firstname:"ramu",
    gender:"male"
    }]
 for(i=0;i<user.length;i++) {
    if(user[i]["gender"]=="male"){
        console.log(user[i]["firstname"]);
    }
 }  
const no=[1,2,3,47,9,4,6];
*/
//-----------------------------------------FUNCTIONS------------------------------------------------------------------
/*function sum(num1, num2){
    result =num1 +num2;
    displayresult(result)
    return result;
}
function displayresult(data){
    console.log("result of the sum is:"+data);
}
function passivedisplay(data){
    console.log("sum's result is"+data);
}
sum(1,2);
displayresult(sum(1,3));
*/
//------------------------------------*fntocall*------------------------------------------------------
/*function sum(num1, num2,fntocall){
    let result =num1 +num2;
    
    fntocall(result);
}
function displayresult(data){
    console.log("result of the sum is:"+data);
}
function passivedisplay(data){
    console.log("sum's result is"+data);
}

sum(4,5,displayresult);

//-------------------------------------------------------------------------------
/*function calculateArithmatic(a,b,type){
    if (type=="sum"){
        constvalue=sum(a,b);
        console.log(constvalue);
    }
    if (type=="minus "){
        constvalue=sub(a,b);
        console.log(constvalue);
    }
}
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
calculateArithmatic(1,2,"sum");
*/
//-----------------------------------------------------------------------------------------------
/*function calculateArithmatic(a,b,arithmaticfinalfunction){
    const ans=arithmaticfinalfunction(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
value=calculateArithmatic(1,2,sum);
console.log(value);*/
//_____________________________________________________________________________________________________________________________________-
//____________________________________________________________________________________________________________________________________
//string functions
// Creating a new Date object representing the current date and time
/*const now = new Date();
console.log('Current date and time:', now);

// Creating a Date object for a specific date and time
const specificDate = new Date('2020-05-15T14:30:00');
console.log('Specific date and time:', specificDate);

// Getting components of the current date
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const milliseconds = now.getMilliseconds();

console.log(`Year: ${year}`);
console.log(`Month: ${month}`); // Note: 0 is January, 11 is December
console.log(`Date: ${date}`);
console.log(`Day of week: ${day}`); // Note: 0 is Sunday, 6 is Saturday
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${minutes}`);
console.log(`Seconds: ${seconds}`);
console.log(`Milliseconds: ${milliseconds}`);

// Setting components of the specific date
specificDate.setFullYear(2022);
specificDate.setMonth(11); // December
specificDate.setDate(25);
specificDate.setHours(20);
specificDate.setMinutes(45);
specificDate.setSeconds(30);
specificDate.setMilliseconds(500);

console.log('Updated specific date and time:', specificDate);*/
//-------------------------------setTimeout-------------------------------------------------------
/*function findSum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    return ans;
}
function findSumTill100(){
    console.log(findSum(100))
}
setTimeout(findSumTill100,1000);
console.log("hello world");*/
//----------------------------------fs.readFile------------------------------------------------

/*const fs=require("fs");
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})
console.log("high");*/
// const fs=require("fs");
// function readFile(cb){
//     fs.readFile("a.txt",'utf-8',function(err,data){
//         cb(data);
//     });
// }
// function onDone(data){
//     console.log(data)
// }
// readFile(onDone);
//************************************************************************************************* */
/*const fs = require("fs");

// Function to read a file and execute a callback with the file contents
function readFile(cb) {
    console.log("Starting to read file...");

    // Asynchronously read the file 'a.txt' with 'utf-8' encoding
    fs.readFile("a.txt", 'utf-8', function (err, data) {
        console.log("File read operation complete. Executing callback...");

        // Execute the callback function with the file contents
        cb(data);
    });

    // This log statement executes immediately after initiating the file read
    console.log("File read operation initiated. Callback is pending...");
}

// Callback function to handle the file contents
function onDone(data) {
    console.log("Callback executed. File contents:");
    console.log(data); // Log the file contents to the console
}

// Start the asynchronous file read operation
console.log("Calling readFile...");
readFile(onDone);

// This log statement will execute immediately after calling readFile
console.log("readFile has been called. Waiting for callback to be executed...");*/
//-------------------------------PROMISES---------------------------------------------------
/*const fs = require("fs");

// Function to read a file and return a Promise
function fileRead() {
    return new Promise(function(resolve) { // The executor function receives `resolve`
        console.log("Starting to read file...");

        // Asynchronously read the file 'a.txt' with 'utf-8' encoding
        fs.readFile("a.txt", "utf-8", function(err, data) {
            console.log("File read operation complete. Resolving Promise...");

            // Resolve the Promise with the file contents
            resolve(data);
        });

        // This log statement executes immediately after initiating the file read
        console.log("File read operation initiated. Promise is pending...");
    });
}*/

// Function to handle the resolved Promise value
/*function onDone(data) {
    console.log("Promise resolved. File contents:");
    console.log(data); // Log the file contents to the console
}

// Start the asynchronous file read operation and handle the Promise
console.log("Calling fileRead...");
var a = fileRead();
console.log("bbugvsdgvsd");
a.then(onDone); // Handle the resolved Promise with onDone

// This log statement will execute immediately after calling fileRead
console.log("fileRead has been called. Waiting for Promise to resolve...");*/
/*var d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo");
    }, 5000);
});

function callback(){
    console.log(d);
}

console.log(d); // Logs the pending promise
d.then(callback); // Logs the promise object again, not the resolved value*/
//---------------------------To-do app------------------------------------------------------------------
const express=require("express");
const app=express();
app.get('/',function(req,res){
    res.send("hello world")}
    )
app.listen(3000)



