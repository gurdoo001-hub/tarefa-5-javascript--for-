let p = document.querySelector("#searchResults");
let input = document.querySelector("#searchInput");
let button = document.querySelector("#searchButton");

let contacts = [
    { name: "Alice Johnson", number: "(54) 999123-4567", image: "./assets/alice-johnson.png" },
    { name: "Bob Smith", number: "(54) 999123-4568", image: "./assets/bob-smith.png" },
    { name: "Charlie Brown", number: "(54) 999123-4569", image: "./assets/charlie-brown.png" },
    { name: "David Wilson", number: "(54) 999123-4570", image: "./assets/david-wilson.png" },
    { name: "Eve Davis", number: "(54) 999123-4571", image: "./assets/eve-davis.png" },
    { name: "Frank Miller", number: "(54) 999123-4572", image: "./assets/frank-miller.png" },
    { name: "Grace Lee", number: "(54) 999123-4573", image: "./assets/grace-lee.png" },
    { name: "Hank Taylor", number: "(54) 999123-4574", image: "./assets/hank-taylor.png" },
    { name: "Ivy Anderson", number: "(54) 999123-4575", image: "./assets/ivy-anderson.png" },
    { name: "Jack Thomas", number: "(54) 999123-4576", image: "./assets/jack-thomas.png" },
    { name: "Michael Jackson", number: "(54) 999123-4577", image: "./assets/michael-jackson.png" }
];

function createContactCard(contact) {
    return `
    <div class="contact-card">
        <div class="left">
            <div class="avatar">
                ${
                    contact.image 
                    ? `<img src="${contact.image}" alt="${contact.name}">`
                    : contact.name.charAt(0)
                }
            </div>
            <div class="info">
                <h3>${contact.name}</h3>
                <p>${contact.number}</p>
            </div>
        </div>
        <button class="btn-ver">Ver</button>
    </div>
    `;
}


button.addEventListener("click", function () {
    const busca = input.value.toLowerCase().trim();

    if (busca === "todos os contatos" || busca === "todos" || busca === "contatos") {
        const allContacts = contacts.map(contact => createContactCard(contact)).join("");
        p.innerHTML = allContacts;

    } else {
        let results = [];

        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].name.toLowerCase().includes(busca) || contacts[i].number.includes(busca)) {
                results.push(contacts[i]);
            }
        }

        if (results.length > 0) {
            p.innerHTML = results.map(contact => createContactCard(contact)).join("");
        } else {
            p.innerHTML = "<p>Nenhum contato encontrado. Tente Novamente</p>";
        }
    }
});

