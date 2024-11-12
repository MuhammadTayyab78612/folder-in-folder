// this funtion is define true or false.

let aaa = function(num1 = 15 , num2 = 15){
    if (num1 ===30){
        console.log('true')
    }
    else if (num2===30){
        console.log('true') 
    }
    else if (num1 + num2 === 30){
        console.log('is true')
    }
    else {
        console.log('false') 
    }
}
console.log(aaa(15,15));





// this funtion is define positive or nagitive.

let bbb = function(num){
    if (num>0){
        console.log('positive')
    }
    else {
        console.log('nagitive')
    }
}
   console.log(bbb(-17));
   bbb();






//  this funtion is define even r odd.

   let ccc = function(number){
    if (number % 2 === 0){
        console.log('even') 
    }
    else {
        console.log('odd')
    }
}
console.log(ccc(5)); 





//  this funtion is define equal , geater or smaller.

 let nnn = function(a = 5, b = 3){
     
    if (a === b){
        console.log('equal')
    }
    else if (a > b){
        console.log('greater')
    }
    else {
        console.log('lesser')
    }
}
console.log(nnn(7,2));
nnn();



    

    


// this funtion is define typs of triangle.

    let ddd = function(aa = 10,bb = 11, cc = 11){
    if (aa === bb && bb === cc && bb === aa){
        console.log('equal')
    }
    else if (aa === bb || bb === cc || bb === aa){
        console.log('two side isosceles')
    }
    else{
        console.log('scalene')
    }
}
console.log(ddd(10,10,23));
 







// this funtion is define foe multipil farmula.

    let ccccc = 3;
    if (ccccc % 3 === 0){
        console.log('1true') 
    }
    else {
        console.log('2false')
    }





    // this funtion is define leap year and normal year.

    let ncc = 2013;
    if (ncc % 4 ===0 ){
        console.log('leap year')
    }
    else  {
        console.log('normal year')
    }






    // this funtion is define moth amd season.

function test(month){

    if(month == 3 || month == 4 || month == 5){
        console.log('Spring')
    }
else if(month == 6 || month == 7 || month == 8){
    console.log("summer")
}

else if(month == 9 || month == 10 || month == 11){
    console.log("autumn")
}
else{console.log('winter')}

}

test(1);


























