console.log("alle opdracht 6 (werkt anders niet door vertraging)")

function delayMessage(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

delayMessage("Dit is een vertraagd bericht!", 2000) 
    .then((resolvedMessage) => {
        console.log(resolvedMessage);
    });
