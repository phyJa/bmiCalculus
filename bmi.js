//Get the values from the user
function calculate() {
    var message;
    message = document.getElementById("answer");
    message.innerHTML = "";
    const height = document.getElementById("height").value;
    const mass = document.getElementById("mass").value;
    const bmi = mass / (height * height);
    message.innerHTML = `Your BMI is ${bmi}.`
    
}
