/* .js files add interaction to your website */
var facts = ["Eight million metric tons: That’s how much plastic we dump into the oceans each year. That’s about 17.6 billion pounds — or the equivalent of nearly 57,000 blue whales — every single year. By 2050, ocean plastic will outweigh all of the ocean’s fish.(conservation.org)", "There’s so much junk at sea, the debris has formed giant garbage patches. There are five of them around the world, and the largest — the Great Pacific Garbage Patch — includes an estimated 1.8 trillion pieces of trash and covers an area twice the size of Texas(conservation.org)", "Ocean trash can be broken into smaller pieces — known as microplastic — by sun exposure and wave action, after which it can find its way into the food chain. When it eventually degrades (which takes 400 years for most plastic), the process releases chemicals that further contaminate the sea.(conservation.org)", " More plastic in the ocean comes from China and Indonesia than anywhere else — together, they account for one-third of plastic pollution. In fact, 80 percent of plastic pollution comes from just 20 countries, including the United States.(conservation.org)"];

var fact = document.getElementById("fact");
var button = document.getElementById("quoteButton");
var count = 0;

if (quoteButton) {
  button.addEventListener("click",showFacts);
}
function showFacts(){
  fact.innerHTML = facts[count];
  count++;
  if (count == facts.length) {
    count = 0;
  }
}

var showLetter = document.getElementById("completeLetter");
var lButton = document.getElementById("button");

if(lButton) {
  lButton.addEventListener("click",displayL);
}

function displayL() {
  var fname = document.getElementById("fname").value;
  var name = document.getElementById("name").value;
  var idea = document.getElementById("youridea").value;

  showLetter.innerHTML = "Dear" +fname + ",this is " + name + " Plastic bags and detergents that we use in our daily lives have a huge impact on marine life. To protect our marine ecosystem, why don't we try" + idea + "? Thank you!";
}


