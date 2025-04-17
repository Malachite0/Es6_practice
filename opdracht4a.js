console.log("opdracht 4a")
function som(...getallen) {
    return getallen.reduce((totaal, huidig) => totaal + huidig, 0);
}

console.log(som(1, 2, 3));         
console.log(som(5, 10));          
console.log(som(2, 4, 6, 8, 10));  
console.log(som());                 
