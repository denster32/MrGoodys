
function sayHi() {
    let userName = prompt("What is your name?");
    if (userName == "") {
        while (userName == "") {
            userName = prompt("TELL ME YOUR NAME!!!")
        }
    }
    console.log("The user's name is " + userName);
    document.write("Hello and welcome to Mr Goodys, " + userName)
    return userName;
}

function foodChoice() {
    var audio = new Audio("rocky.mp3");
    let food = prompt("Do you like Gyros, Ribs or Beef?");
    console.log("The selected answer was " + food);
    food = food.toLowerCase();

    while (food == !"yes" || !"no") {
        food = prompt("Do you like Gyros, Ribs or Beef... Please answer yes or no?");
        food = food.toLowerCase();
    }
    console.log("The selected answer was " + food)
    if (food == "yes") {
        alert("This is the right place for you!");
        audio.play();
        document.write(".  Thanks for stopping by.  Please check out our menu and location below.");
    } else if (food == "no") {
        alert("Go somewhere else!");
        window.location.replace("https://www.mcdonalds.com/us/en-us.html");
        audio.play();
        return food;
    } else {
        alert("CANNOT COMPUTE");
        document.write("We could not understand your repsonse, please feel free to look around!");
    }
}

function howManyFries(){
    let fries = prompt("How many Fries would you like?");
    console.log("User wants " + fries + " orders of fries");
    for (let i = 0; i < fries; i++){
        document.write("<img src='fries.jpeg' alt='fries' style='width:50px'/>");
    }
}