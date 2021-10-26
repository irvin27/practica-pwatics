const container = document.querySelector(".container");
const coffees = [{
        name: "Anocheser",
        Image: "images/irv1.jpg"
    },
    {
        name: "París",
        Image: "images/irv2.jpg"
    },
    {
        name: "Luciernaga",
        Image: "images/irv3.jpg"
    },
    {
        name: "Espectro",
        Image: "images/irv4.jpg"
    },
    {
        name: "Montaña",
        Image: "images/irv5.jpg"
    },
    {
        name: "Cordillera",
        Image: "images/irv6.jpg"
    },
    {
        name: "Lago",
        Image: "images/irv7.jpg"
    },
    {
        name: "Vía lactea",
        Image: "images/irv8.jpg"
    },
    {
        name: "Amanecer",
        Image: "images/irv9.jpg"
    }
];
const showCoffees = () => {
    let output = "";
    coffees.forEach(
        ({ name, Image }) =>
        (output += `
                        <div class="card">
                            <img class="card--avatar" src=${Image} />
                            <h1 class="card--title">${name}</h1>
                            <a class="card--link" href="#">Paisaje</a>
                            </div>
                            `)
    );
    container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registrado"))
            .catch(err => console.log("service worker no registrado", err));
    });
}