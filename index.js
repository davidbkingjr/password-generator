const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
"%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let firstPassword = document.getElementById("passwordOne")
let secondPassword = document.getElementById("passwordTwo")
let pwdOne = ""
let pwdTwo = ""

function generateRandomCharacter() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]
}

function generatePassword() {
    pwdOne = ""
    pwdTwo = ""
    for (let i = 0; i <= 15; i++) {
        pwdOne += generateRandomCharacter()
        pwdTwo += generateRandomCharacter()
    }
    firstPassword.textContent = pwdOne
    secondPassword.textContent = pwdTwo
}




