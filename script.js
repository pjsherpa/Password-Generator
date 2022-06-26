// Assignment code here

// Please note I have put a -PJ for the comments I have made

// the first four variables below are the values that will be present in the password-PJ
var alphabet="abcdefghijklmnopqrstuvwxyz"
var upper=alphabet.toUpperCase();
var numeric="123456789"
var specialCharacter="~! @#$%^&*()_-+={[}]|;<,>.?/";

function generatePassword(){
  // passwordText is what we will need to find. we kept this in the local scope and not the global scope as it will just add into the password previously created.-PJ
  var passwordText='';
  // first set of question for password criteria is to give a value to v, which will include the type of alphabet lower/upper case or both.-PJ
  var v=prompt("Would you like a.uppercase or b.lowercase alphabet or c.both in your password? Please select a, b or c")
  if(v==="a"){
  v=upper; 
  }else if(v==="b"){
  v=alphabet;
    }else if(v==="c"){
  v=alphabet.concat(upper);
    }else{
   window.alert("please select from a, b or c")
   return ;
  } 
  
  // second set of question for password criteria is to give a value to w, which will include number or exclude it depending on what is selected-PJ
  var w=prompt("Would you like numbers in your password y or n?")
  if(w==="y"){
  w = numeric;
  }else if(w==="n"){
  w=""
  console.log(v)
  }else{
  window.alert("please select Y or N")
  return;
  }
  
  // third set of question for password criteria is to give a value to x, which will include the specialCharacters or exclude it depending on what is selected.-PJ
  var x=prompt("Would you like symbols in your password y or n?")
  if(x==="y"){
  x = specialCharacter;
  }else if(x==="n"){
  x=""
  }else{
  window.alert("please select Yes or No")
  return;
  }
 
// last set of question for password criteria is to give a value to y, which will be our length-PJ
  var y=prompt("What would you like your password length to be?(minimum-8 to maximum-128)")
  if(y>= 8 && y <= 128){
  y;
  let length=Number(y);
  // to double check that this has been converted to a number - PJ
  console.log(typeof length)
  }
  else{
  alert("make sure the length is between 8-128 characters long")
  return;
  }
  
  /*for the final step I have concatinated v,w,x into one variable named characters. 
  I have assigned the length which we got from var y on the loop and then assigned both the character and lenght to math.random function to generate the password - PJ*/

  var characters = v+x+w;
  for(var i, i=0;i<y;i++){
  let generatePassword=characters[Math.floor(Math.random() * characters.length)];
  passwordText += generatePassword;
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
