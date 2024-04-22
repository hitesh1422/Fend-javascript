
// scope
// var  - global scoe
// let const - block scope


function Greeting(){
    console.log("Welcome");
}
console.log(Greeting());

{
var number = 50

}
console.log(number);

{

    let number =20
}

console.log(number);


let firstnumber = 10;
{
    const secondnumber = 20;
    var thirdnumber = 40;
    console.log(firstnumber);

    {
        {

            console.log(thirdnumber);
            console.log(firstnumber);
    }

    console.log(secondnumber);
}

}
console.log(thirdnumber);


//// hoisting
myrollno =20;
console.log(myrollno);
var myrollno;

mymarks = 80;
console.log(mymarks);
let mymarks;



