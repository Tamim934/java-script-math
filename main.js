number=2;
console.log(typeof(number));
let number1=1;
let number2="1";
console.log(number1 == number2);
console.log(number1 === number2)
if( 2 == 2 && 2=="2") {
    console.log("hello");
}
if( 2 == 3 || 2=="2") {
    console.log("yws");
}
console.log(!true);
console.log(2 + "2");
console.log(2 * "2");
console.log(2 - "2");
console.log(2 / "2");
let res = 2 + "5" + 2;
console.log(res);
console.log(typeof(res));
let res1 = 2 - "5" - 2;
console.log(res1);
console.log(typeof(res1));
console.log(res1);
let res2 = 2 - "5" * 2;
console.log(typeof(res2));
console.log(res2);
let res3 = 2-"2a";
console.log(res3)
let res4 = 2+"2a";
console.log(res4);

let iff = 2>3?"ture2":"true1";
console.log(iff); 
let elseif = 1>3?"1":2<1?"2":3<1?"3":"else";
console.log(elseif);
var elseif2 = 1==2?"1=2":2+2==4?"yes":"no"
console.log(elseif2);
let sum=9;
var sum1= sum >10?"kalan asta":"nista kalan";
console.log(sum1);
for(let i=1; i< 10; i++){
    console.log(i);
}