/*//write a program to print biggest number in an array
const array =[3,78,5,4,90,45,100,5,6];
let largest=array[0];
for (i=0;i<array.length;i++){
    if(array[i]>largest){
        largest=array[i];
    }
}
console.log(largest);*/

//wap that reverses all the elemnt of an array
/*const array =[3,78,5,4,90,45,100,5];
n=array.length;
for(i=0;i<n/2;i++){
    temp=array[i];
    array[i]=array[n-i];
    array[n-i]=temp;

}
console.log(array);*/


//create a counter in javascript (counter down from 30 to 0)
/*counter=0;
function timer(){
    
    console.log(counter);
    counter++;
    if (counter >30){
        clearInterval(end);
        console.log("time up");
    }
}
setInterval(timer,1000);*/
/*function square(n){
    value=n*n;
    return value;
}
function cube(n){
    value=n*n*n;
    return value;
}

function sumOf(f,a,b){
    value1=f(a);
    value2=f(b);
    sum=value1+value2;
    console.log(sum);
}
sumOf(square,1,2);
sumOf(cube,1,2);*/
//---------------------------------counter without setInterval-------------------------------------------------------------------
/*counter=0;
function timer(){
    
    setTimeout(function(){
        console.log(counter);
        counter++;
        timer();
    },1000);
    
}
timer();*/
//-------------------------------------------------------------------------------------------------------------------------------
/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */
/*function sleep(milliseconds) {
    let end = Date.now() + milliseconds;
    while(Date.now() < end){
        continue;
    }
    return Promise.resolve();
}

module.exports = sleep;
sleep(10000);
console.log("ji");*/
/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */
/*function fun1(t1){
    let p1=new Promise(function(resolve){
        setTimeout(function(){resolve("promise 1")},t1);
    })
    return p1;
}
function fun2(t2){
    let p2= new Promise(function(resolve){
        setTimeout(function(){resolve("promise 2")},t2);
    })
    return p2;
}
function fun3(t3){
    let p3=new Promise(function(resolve){
        setTimeout(function(){resolve("promise 3")},t3);
    })
    return p3;
}


function sequence(t1,t2,t3){
    const time= new Date()
    initial=time.getTime()
    fun1(t1).then(function (result){
        console.log(result)
        return fun2(t2)
    }).then(function(result){
        console.log(result)
        return fun3(t3)
    }).then(function(result){
        console.log(result)
    })
    const ftime= new Date
    final=ftime.getTime()
    console.log("total time taken is"+final-initial);
}
sequence(10000,20000,30000);*/
//Read a file, remove all the extra spaces and write it back to the same file.
/*const fs=require("fs");
function file(){
    fs.readFile("a.txt","utf-8",function(err,data){
        console.log(data);
        array=data.split(/\s+/)
        console.log(array)
        filtered=array.filter(function(element){
            return element.length>0;
        }
        )
        let tobewrite=''
        for(let i=0;i<filtered.length;i++){
            
            tobewrite=tobewrite+filtered[i]+' '
        }
        fs.writeFile("a.txt",tobewrite,function(err){
            console.log(tobewrite);
        })
    })
    
}
file();*/
/*an you create a clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

HH:MM::SS (Eg. 13:45:23)

HH:MM::SS AM/PM (Eg 01:45:23 PM)*/
function timer(){
    
    
    
        setInterval(function(){
            const now=new Date()
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let sec=now.getSeconds();

            sec+=1
            if(sec>59){
                minutes+=1;
            }
            if(minutes>59){
                hours+=1;
            }
            console.log(hours,":",minutes,':',sec);
            
        },1000)
        
    
    
}
timer()
