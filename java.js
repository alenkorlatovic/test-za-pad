//1. kreiraj polja

let number= [1,2,3,4,5,6,7,8,9,10];
let target = 10;
 for ( let i=0 ; i<number.length; i++){
    for (let j= i+1; j <number.length; j++){
        if (number[i]+ number[j]== targer){
            console.log(number[i],number[j]);
        }
    }
 }




    