
//arguments is an Array-like object accessible inside function
//that contains the values of the arguments passed to that function

// function func1(a, b, c) {
//console.log(arguments[0]);expected output: 1
//console.log(arguments[1]);expected output: 2

function add(){
    console.log(arguments)
    const args = Array.from(arguments);
    return args.reduce((a,b)=>a+b); //a=accumulator ,b= current value
}
(add(5,6,7,4,5,6,7,8,9)) //



function sum(...args){
    return args.reduce((acc, cur) => acc + cur);
}

console.log(sum(3, 4, 5, 6, 7, 8, 10, 40));  

function arrObj(el){


       

   