const contactListElement = document.getElementById("contacts");
const addContactFormElement = document.getElementById("addContactForm");

let contactsData = [
  {
    id: 1,
    fullname: "Mrhasans",
    email: "maruf@gmail.com",
    phone: "08728285278",
    address: "Grogol, West Jakarta,",
    birthday: new Date("1997-07-21"),
  },
  {
    id: 2,
    fullname: "Mustofa",
    email: "musmus@gmail.com",
    phone: "08906764808",
    address: "Karangsari, Kebumen",
    birthday: new Date("1998-05-12"),
  },
];

const renderContact = () => {
  const contactString = contactsData
    .map((contact) => {
      return `<li>
      <h2>name: ${contact.fullname} </h2>
      <p>Birhday in ${contact.birthday}</p>
      <p>Email: ${contact.email}</p>
      <p> Phone: ${contact.phone}</p>
    </li>`;
    })
    .join("");

  contactListElement.innerHTML = contactString;
};

const addContact = (event) => {
  event.preventDefault();
  const formData = new FormData(addContactFormElement);

  const nextId = contactsData[contactsData.length - 1] + 1;

  const newContact = {
    id: nextId,
    fullname: formData.get("fname"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    birthday: formData.get("birthday"),
  };

  contactsData = [...contactsData, newContact];
  renderContact();
};
// const searchContacts = (keyword) => {
//   const searchedContact = contacts.filter((contact) => {
//     return contact.fullname.toLowerCase().includes(keyword.toLowerCase());
//   });
//   console.log(searchedContact);
// };

// const getContactByID = (id) => {
//   const contact = contacts.find((contact) => {
//     return contact.id === id;
//   });
//   console.log(contact);
// };

addContactFormElement.addEventListener("submit", addContact);
renderContact();
