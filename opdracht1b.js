console.log("opdracht 1b")

let globalVar = 10;

const modifyVar = () => {
    let localVar = 5;
    let innerVar = 2;

    console.log(globalVar);
    console.log(localVar);
    console.log(innerVar);

};


modifyVar();

console.log(globalVar);
console.log(typeof localVar);
console.log(typeof innerVar);