var keyList = "abcdefghijklmnofqrstuvwxyz1234567890!@#$%^&*";
var tmp ="";

function generatePassword (plength) {
    tmp='';
    for(var i=0 ; i<plength;i++){
        tmp += keyList.charAt(Math.floor(Math.random()*keyList.length))
    }
    return tmp;
}

function  populateform(length) {
    document.passwordGenerator.output.value = generatePassword(length);
}