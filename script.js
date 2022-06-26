// Assignment code here


// What is undefined? do more research on loop and math.random
var alphabet="abcdefghijklmnopqrstuvwxyz"
  var upper=alphabet.toUpperCase();
  var numeric="123456789"
  var specialCharacter="^&!@$-_*";
  let passwordText='';

var generatePassword=function (){
  

 var v=prompt("Would you like a.uppercase or b.lowercase alphabet or c.both in your password? Please select a, b or c")
  if(v==="a"){
  v;  
  v=upper; 
  }else if(v==="b"){
  v=alphabet;
    }else if(v==="c"){
  v=alphabet.concat(upper);
    }else{
   window.alert("please select from a, b or c")
   return passwordText;
  } 
  
  
  var w=prompt("Would you like numbers in your password y or n?")
  if(w==="y"){
  w = numeric;
  }else if(w==="n"){
  w=""
  console.log(v)
  }else{
  window.alert("please select Y or N?")
  return passwordText;
  }
  
  var x=prompt("Would you like symbols in your password y or n?")
  if(x==="y"){
  x = specialCharacter;
  }else if(x==="n"){
  x=""
  }else{
  window.alert("please select Yes or No?")
  return passwordText;
  }
 

  var y=prompt("What would you like your password length to be(minimum-8 to maximum-128)")
  if(y>= 8 && y <= 128){
  y;
  let length=Number(y);
  console.log(typeof length)
  }
  else{
  alert("make sure the length is between 8-128 characters long")
  return generatePassword;
  }
  
  console.log(y)

 
  var characters = v+x+w
  for(var i, i=0;i<y;i++){
  let generatePassword=characters.charAt(Math.floor(Math.random()* y));
  passwordText += generatePassword
 }
 return passwordText;
 }

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
