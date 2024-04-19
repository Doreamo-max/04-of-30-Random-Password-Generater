
const passwordBox = document.getElementById("password");
const length =12;
const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase= "abcdefghijklmnopqrstuvwxyz";
const number ="0123456789";
const symmbols ="@#$%^&*()_+~|}{[]></-=}";

const allChars = upperCase+lowerCase+length+symmbols;

function createPassword(){
let password ="";
password += upperCase[Math.floor(Math.random()*upperCase.length)];
password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
password += number[Math.floor(Math.random()*number.length)];
password += symmbols[Math.floor(Math.random()*symmbols.length)];

while(length>password.length){
password += allChars[Math.floor(Math.random()*allChars.length)];
}
   passwordBox.value =password;
}

function copypassword(){
password.select();
document.execCommand("copy");
}
