function delayMessage(message, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 1000) {
            reject("De vertraging moet minimaal 1000 milliseconden zijn.");
        } else {
            setTimeout(() => {
                resolve(message);
            }, delay);
        }
    });
}

delayMessage("Dit is een vertraagd bericht!", 500) 
    .then((resolvedMessage) => {
        console.log(resolvedMessage);
    })
    .catch((errorMessage) => {
        console.log("Fout:", errorMessage);
    });
