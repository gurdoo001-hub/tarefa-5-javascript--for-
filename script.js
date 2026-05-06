let p = document.querySelector("#searchResults");
let input = document.querySelector("#searchInput");
let button = document.querySelector("#searchButton");

let contacts = [
    { name: "Alice Johnson", number: "(54) 999123-4567" },
    { name: "Bob Smith", number: "(54) 999123-4568" },
    { name: "Charlie Brown", number: "(54) 999123-4569" },
    { name: "David Wilson", number: "(54) 999123-4570" },
    { name: "Eve Davis", number: "(54) 999123-4571" },
    { name: "Frank Miller", number: "(54) 999123-4572" },
    { name: "Grace Lee", number: "(54) 999123-4573" },
    { name: "Hank Taylor", number: "(54) 999123-4574" },
    { name: "Ivy Anderson", number: "(54) 999123-4575" },
    { name: "Jack Thomas", number: "(54) 999123-4576" }
];
    button.addEventListener("click", searchContacts);

function searchContacts() {
    console.log(input.value);


    
    for (let i = 0; i < contacts.length; i++) {
        const element = contacts[i];
        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
            p.innerText = `Contato encontrado: ${contacts[i].name} - ${contacts[i].number}`;
        break;
        }
        else {
            p.innerHTML = "Contato não encontrado. Tente novamente.";
        }

    }

}