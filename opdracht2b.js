console.log("opdracht 2b")
let globalVar2 = 10;

let myObject = {
    value: 5,  

    regularFunction: function() {
        console.log("regularFunction -> this.value:", this.value); 
        console.log("regularFunction -> globalVar:", globalVar2);  
    },

    arrowFunction: () => {
        console.log("arrowFunction -> this.value:", this.value);  
        console.log("arrowFunction -> globalVar:", globalVar2);     
    }
};

myObject.regularFunction();
myObject.arrowFunction();
