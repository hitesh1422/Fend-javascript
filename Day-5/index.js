
function checknumber(){
    //alert("function called");
    //console.log(document.getElementById("number").value);
   const number = document.getElementById("number").value;
   if(!number){
   alert("Please type the number");
  } else if (number % 2 === 0){
  alert(`Number ${number} is even`);
  } else {
  alert(`Number ${number} is odd`);
}
}