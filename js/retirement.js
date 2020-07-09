const persons = [
    {
        name: "John",
        age: 40,
        contribution: 35,
        gender: "Male"
    },
    {
        name: "Mary",
        age: 40,
        contribution: 35,
        gender: "Female"
    },
    {
        name: "Linda",
        age: 60,
        contribution: 35,
        gender: "Female"
    }
    
];

function sayRetirement(personData){
    if(personData.gender === "Male") {
        if(personData.contribution >= 35 && (personData.age + personData.contribution) >= 95)
            console.log(`${personData.name}, you can stop working`);
        else
            console.log(`Sorry, ${personData.name}. You can't retire`);
    } else {
        if(personData.contribution >= 30 && (personData.age + personData.contribution) >= 85)
            console.log(`${personData.name}, you can stop working`);
        else
            console.log(`Sorry, ${personData.name}. You can't retire`);
    }
}

//Let's see if everybody can retire
for(let person of persons) {
    sayRetirement(person);
}
