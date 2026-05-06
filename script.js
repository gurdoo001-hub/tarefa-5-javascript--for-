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


button.addEventListener("click", function() {
  let searchTerm = input.value.toLowerCase();
  let results = [];

    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].name.toLowerCase().includes(searchTerm)) {
        results.push(contacts[i]);
      }
         else if (contacts[i].number.includes(searchTerm)) {
        results.push(contacts[i]);
      }
         else if (contacts[i].name.toLowerCase().startsWith(searchTerm)) {
        results.push(contacts[i]);
      }
            else if (contacts[i].number.startsWith(searchTerm)) {
        results.push(contacts[i]);
      }
         else if (contacts[i].name.toLowerCase().endsWith(searchTerm)) {
        results.push(contacts[i]);
      }
            else if (contacts[i].number.endsWith(searchTerm)) {
        results.push(contacts[i]); 
    }
  }

    if (results.length > 0) {
      p.innerHTML = results.map(contact => `<li>${contact.name} - ${contact.number}</li>`).join("");
    } else {
      p.innerHTML = "<li>No contacts found</li>";
    }

});

