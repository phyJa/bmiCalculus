//Get the values from the user
function calculate() {
    //Preparing the messages
    var message, message2 ;
    message = document.getElementById("answer");
    message2 = document.getElementById("answer2");
    message.innerHTML = "";
    message2.innerHTML = "";
    //Declaring the constants
    const height = document.getElementById("height").value;
    const mass = document.getElementById("mass").value;
    const bmi = mass / (height * height);
    //Printing the messsages
    message.innerHTML = `Your BMI is ${bmi}.`;
    //Stablishing the conditional
    if(bmi > 30) {
        message2.style.color = "red";
        message2.innerHTML = "Warning! You are overweight.";
    } else {
        message2.style.color = "blue";
        message2.innerHTML = "You are not overweight.";
    }
}
