const empty = "";
      upperCase = "ABCDEFGHIJKMNOPQRSTUVWXYZ";
      lowerCase = "abcdefghijkmnoprstuvwxyz";
      number = "0123456789";
      symbol = "!@#$%^&*()_+=-/";
const pLength = document.getElementById('p-length');
      plowerCase = document.getElementById('p-lowercase');
      pUpperCase = document.getElementById('p-uppercase');
      pNumber = document.getElementById('p-number');
      pSymbol = document.getElementById('p-symbol');
      password = document.getElementById('password');
      copy = document.getElementById('copy');
      submit = document.getElementById('submit');
      pLuckyNumber = document.getElementById('p-luckyNumber');
      pMin = document.getElementById('minBound');
      pMax = document.getElementById('maxBound');
submit.addEventListener("click", () => {
    var initialPassword = empty;
    if(pUpperCase.checked) initialPassword += upperCase;
    if(plowerCase.checked) initialPassword += lowerCase;
    if(pNumber.checked) initialPassword += number;
    if(pSymbol.checked) initialPassword += symbol;
    password.value = generatePassword(pLength.value, initialPassword);
    pLuckyNumber.value = generateLuckyNumber(pMin.value, pMax.value);
});
function generatePassword(length, initialPassword) {
    var pass = "";
    for(var i = 0; i < length; i++) {
        pass += initialPassword.charAt(
            Math.floor(Math.random() * initialPassword.length)
        );
    }
    return pass;
}
function generateLuckyNumber(min, max) {
    min = Number.parseInt(min);
    max = Number.parseInt(max);
    return Number.parseInt(min + Math.floor(Math.random() * (max - min)));
}
copy.addEventListener("click", () => {
    if(password.value == "") {
        alert('Please generate a password');
    }
    else {
        password.select();
        document.execCommand("copy");
        alert("Password has been copied to clipboard");
    }
});
