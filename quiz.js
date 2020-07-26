//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var SpaghettiMeatballsScore = 0;
var ShoyuRamenScore = 0;
var BurritoScore = 0;
var BurgersScore = 0;
// var LasagnaScore = 0;
// var MacCheeseScore = 0;
// var BakedZitiScore = 0;
// var TeriyakiChickenScore = 0;



//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

// DOM variables for question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

// DOM variables for question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

// DOM variables for question 4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

// DOM variables for question 5
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

// DOM variables for question 6
var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

// DOM variables for results
var result = document.getElementById("result");




//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", SpaghettiMeatballs);
q1a2.addEventListener("click", ShoyuRamen);
q1a3.addEventListener("click", Burrito);
q1a4.addEventListener("click", Burgers);

q2a1.addEventListener("click", SpaghettiMeatballs);
q2a2.addEventListener("click", ShoyuRamen);
q2a3.addEventListener("click", Burrito);
q2a4.addEventListener("click", Burgers);

q3a1.addEventListener("click", SpaghettiMeatballs);
q3a2.addEventListener("click", ShoyuRamen);
q3a3.addEventListener("click", Burrito);
q3a4.addEventListener("click", Burgers);

q4a1.addEventListener("click", SpaghettiMeatballs);
q4a2.addEventListener("click", ShoyuRamen);
q4a3.addEventListener("click", Burrito);
q4a4.addEventListener("click", Burgers);

q5a1.addEventListener("click", SpaghettiMeatballs);
q5a2.addEventListener("click", ShoyuRamen);
q5a3.addEventListener("click", Burrito);
q5a4.addEventListener("click", Burgers);

q6a1.addEventListener("click", SpaghettiMeatballs);
q6a2.addEventListener("click", ShoyuRamen);
q6a3.addEventListener("click", Burrito);
q6a4.addEventListener("click", Burgers);


function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

//#TODO: Define SpaghettiMeatballs quiz functions here
function SpaghettiMeatballs() {
  SpaghettiMeatballsScore += 1;
  questionCount = questionCount + 1;
  if (questionCount >= 6){
      updateResult();
  }
}

// Define ShoyuRamen quiz functions here

function ShoyuRamen() {
  ShoyuRamenScore += 1;
  questionCount += 1;
  if (questionCount >= 6){
      updateResult();
  }
}

// Define Burrito quiz functions here

function Burrito() {
  BurritoScore += 1;
  questionCount += 1;
  if (questionCount >= 6){
      updateResult();
  }
}

// Define Burgers quiz functions here

function Burgers() {
  BurgersScore += 1;
  questionCount += 1;
  if (questionCount >= 6){
      updateResult();
  }
}

// Define Lasagna quiz functions here

// function Lasagna() {
//   LasagnaScore += 1;
//   questionCount += 1;
//   if (questionCount >= 6){
//       updateResult();
//   }
// }

// // Define MacChesse quiz functions here

// function MacChesse() {
//   MacChesseScore += 1;
//   questionCount += 1;
//   if (questionCount >= 6){
//       updateResult();
//   }
// }

// // Define BakedZiti quiz functions here

// function BakedZiti() {
//   BakedZitisScore += 1;
//   questionCount += 1;
//   if (questionCount >= 6){
//       updateResult();
//   }
// }

// // Define TeriyakiChicken quiz functions here

// function TeriyakiChicken() {
//   TeriyakiChickenScore += 1;
//   questionCount += 1;
//   if (questionCount >= 6){
//       updateResult();
//   }
// }

// Funtion for the results

function updateResult(){
 if (SpaghettiMeatballsScore >= 3){
         result.innerHTML = "You are Spaghetti and Meatballs!";
         show_image('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9XFuj7aEdONvY_hiwyp9jY6NGKHWPJ30iCQ&usqp=CAU', '300px', '450px', 'Spaghetti and Meatballs');
         SpaghettiMeatballsScore = 0;
 }

 else if(ShoyuRamenScore >= 3){
        result.innerHTML = "You are Shoyu Ramen!";
        show_image('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPP7EROsrYnlGf0GUk9jdqIyoCA41RweCK-A&usqp=CAU', '300px','450px', 'Shoyu Ramen');
        ShoyuRamenScore = 0;
 }

 else if(BurritoScore >= 3){
    result.innerHTML = "You are Burritos!";
    show_image('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEFzA6C08LMcRAsFw3wDpGvTzDDm7qOiXK9w&usqp=CAU', '300px', '450px', 'Burrito');
    BurritoScore = 0;
 }

 else if (BurgersScore >= 3){
    result.innerHTML = "You are Burgers! WOW";
    show_image('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHuGlLkBjk9_qz6in7L0UVX38UKHfU9sYZHw&usqp=CAU', '300px', '450px', 'Burger');
    BurgersScore = 0;
 } else {
    result.innerHTML = "Seems like you are a all food person!";
 }
}

// else if (LasagnaScore >= 3){
//   result.innerHTML = "You are Lasagna!!"
// }

// else if (MacCheeseScore >= 4){
//   result.innerHTML = "You are Mac and Cheese!!"
// }

// else if (BakedZitiScore >= 3){
//   result.innerHTML = "You are Baked Ziti!!"
// }

// else if (TeriyakiChickenScore >= 3){
//   result.innerHTML = "You are Teriyaki Chicken!!"
// }