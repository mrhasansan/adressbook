const contacts = [
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
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    const contactString = `${contact.fullname}  Birhday in ${contact.birthday}
    Email: ${contact.email}
    Phone: ${contact.phone}`;
    console.log(contactString);
  }
};

const addContact = () => {
  const newContact = {
    id: 3,
    fullname: "halim",
    email: "limhas@gmail.com",
    phone: "08706764358",
    address: "Adikarso, Kebumen",
    birthday: new Date("2000-01-10"),
  };
  const result = contacts.push(newContact);
};
const searchContacts = (keyword) => {
  const searchedContact = contacts.filter((contact) => {
    return contact.fullname.toLowerCase().includes(keyword.toLowerCase());
  });
  console.log(searchedContact);
};

const getContactByID = (id) => {
  const contact = contacts.find((contact) => {
    return contact.id === id;
  });
  console.log(contact);
};

console.log(contacts);
addContact();

searchContacts("hal");

getContactByID(2);
