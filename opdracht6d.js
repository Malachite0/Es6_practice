function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Alice", leeftijd: 30 });
        }, 1500); // 1,5 seconden vertraging
    });
}

function fetchData2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Bob", leeftijd: 25 });
        }, 1000); // 1 seconde vertraging
    });
}

Promise.all([fetchData1(), fetchData2()])
    .then((results) => {
        console.log("Gecombineerde opgeloste waarden:", results);
    });
