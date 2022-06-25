// Assignment code here


// What is undefined? do more research on loop and math.random
var alphabet="abcdefghijklmnopqrstuvwxyz";
  var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric=["1","2","3","4","5","6","7","8","9","0"];
  var specialCharacter="^&!@$-_*";
  let passwordText='';

var generatePassword=function (){
  
 var v=prompt("Would you like a.uppercase or b.lowercase alphabet or c.both in your password? Please select a, b or c")
  if(v==="a"){
  v="upper";
  console.log(upper)
  }else if(v==="b"){
  v="abcdefghijklmnopqrstuvwxyz";
  console.log(alphabet)
  }else if(v==="c"){
  v=alphabet;
  console.log(alphabet.concat(upper))
  }else{
   window.alert("please select from a, b or c")
  }
  if (--v> 0)
  return v;
  
  var w=prompt("Would you like numbers in your password y or n?")
  if(w==="y"){
  w=["1","2","3","4","5","6","7","8","9","0"];
  console.log(numeric)
  }else if(w==="n"){
  w=""
  console.log(v)
  }else{
  window.alert("please select Y or N?")
  }
  if (--w > 0)
  return w; 

  var x=prompt("Would you like symbols in your password y or n?")
  if(x==="y"){
  x="^&*";
  console.log(specialCharacter)
  }else if(x==="n"){
  x=""
  }else{
  window.alert("please select Yes or No?")
  }
  if (--x > 0)
  return x;
   

  var y=prompt("What would you like your password length to be(minimum-8 to maximum-128)")
  if(y>= 8 && y <= 128){
  y;
  let length=Number(y);
  console.log(typeof length)
  }
  else{
  alert("make sure the length is between 8-128 characters long")
  }
 
  console.log(y)

  var characters = v + w + x;
  console.log(characters)
  for(var i, i=0;i<y;i++){
  let generatePassword=characters[Math.floor(Math.random()* y)];
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
