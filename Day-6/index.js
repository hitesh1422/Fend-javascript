function checkage(){ 

const age = (documnet.getElementById("age").value);
if(!age){
    alert(Please enter age);
} else if (age > 18){
    alert("Eligible for driving licence");
} else (age < 18){
    alert ("your not aligible for driving licence");
}
}