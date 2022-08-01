// bus ticket

var age = parseInt(prompt("How old are you?").trim(), 10);

if (isNaN(age)) {
    document.querySelector(".bus-first").textContent = "Add a number!";
  } else if (age >= 50) {
    document.querySelector(".bus-first").textContent = "The ticket is free for pensioners!;)";
  } else if (age >= 30) {
    document.querySelector(".bus-first").textContent = "Lucky age, you got a free ticket. Congratulations!";
  } else if (age >= 18) {
    document.querySelector(".bus-first").textContent = "Your age is a middle, so your ticket is more expensive!:)";
  } else if (age > 5) {
    document.querySelector(".bus-first").textContent = "Your ticket is cheap.";
  } else if (age <= 5) {
    document.querySelector(".bus-first").textContent = "Your ticket is free, tiny person))";
  };

// bus ticket second

if (isNaN(age)) {
  document.querySelector(".bus-second").textContent = "Add a number!";
} else {
  if (age >= 50) {
    document.querySelector(".bus-second").textContent = "The ticket is free for pensioners!;)";
  } else {
    if (age >= 30) {
      document.querySelector(".bus-second").textContent = "Lucky age, you got a free ticket. Congratulations!";
    } else {
      if (age >= 18) {
        document.querySelector(".bus-second").textContent = "Your age is a middle, so your ticket is more expensive!:)";
      } else {
        if (age > 5) {
          document.querySelector(".bus-second").textContent = "Your ticket is cheap.";
        } else {
          if (age <= 5) {
            document.querySelector(".bus-second").textContent = "Your ticket is free, tiny person))";
          }
        } 
      }
    }
  }
}

// traveling

var elForm = document.querySelector(".form");
var elInputName = elForm.querySelector(".form-input-name").value.trim();
var elInputMoney = elForm.querySelector(".form-input-money");
var minPrice = 2000;
var elP = document.querySelector(".page-text")

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

    if (elInputMoney.value >= minPrice) {
    elP.textContent = `Mr ${elInputName}, you can travel easily!`;
  } else {
    elP.textContent = `Mr ${elInputName}, you don't have enough money!`;
  }
})