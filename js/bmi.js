//Display the answers
    //First, store the element in a variable
    let answers = document.querySelector("#answers");
    //Add an event listener to the button
    let buttonListener = document.querySelector("form button");
    //Remove the class "notDisplaying" from the answers
    buttonListener.addEventListener("click", () => {answers.classList.remove("notDisplaying");});

//Get the values from the user
function calculate() {
    //Preparing the messages
    var message, message2, message3 ;
    message = document.getElementById("answer");
    message2 = document.getElementById("answer2");
    message.innerHTML = " ";
    message2.innerHTML = " ";
    //Declaring the constants
    const personData = {
        name: document.getElementById("name").value,
        height: document.getElementById("height").value,
        mass: document.getElementById("mass").value,
        bmi: function() {
            return this.mass / (this.height * this.height);
        }
    };
    //Printing the messsages
    message.innerHTML = `Hello, ${personData.name}! Your BMI is ${personData.bmi()} kg/m<sup>2</sup>.`;
    //Stablishing the conditional
    if(personData.bmi() > 30) {
        message2.style.color = "red";
        message2.innerHTML = "Warning! You are overweight.";
    } else {
        message2.style.color = "blue";
        message2.innerHTML = "You are not overweight.";
    }   
}
