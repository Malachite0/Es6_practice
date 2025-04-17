console.log("opdracht 5c")

function printPerson({ name, age, city }) {
    console.log("Naam:", name);
    console.log("Leeftijd:", age);
    console.log("Stad:", city);
}

const myPerson = {
    name: "Bob",
    age: 35,
    city: "Rotterdam"
};

printPerson(myPerson);
