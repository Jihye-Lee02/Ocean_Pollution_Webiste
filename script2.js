var showLetter = document.getElementById("completeLetter");
var lButton = document.getElementById("button");

if(lButton) {
  lButton.addEventListener("click",displayL);
}

function displayL() {
  var fname = document.getElementById("fname").value;
  var name = document.getElementById("name").value;
  var idea = document.getElementById("youridea").value;

  showLetter.innerHTML = "Dear"+" " +fname + ", this is " + name + " . Plastic bags and detergents that we use in our daily lives have a huge impact on marine life. To protect our marine ecosystem, why don't we try" + idea + "? Thank you!";
}