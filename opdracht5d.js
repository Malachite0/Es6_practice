console.log("opdracht 5d")

const voertuig = {
    merk: "Toyota",
    model: "Corolla",
    jaar: 2020
};

const verf = ["rood", "blauw", "groen"];

const [, tweedeKleur] = verf;  
const { model } = voertuig;   

console.log("Kleur:", tweedeKleur);  
console.log("Model:", model);    
