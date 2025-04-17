function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "John", leeftijd: 25 });
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log("Opggehaalde gegevens:", data);
        
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ ...data, stad: "Rotterdam" });
            }, 1000);
        });
    })
    .then((updatedData) => {
        console.log("Bijgewerkte gegevens:", updatedData);
    });
