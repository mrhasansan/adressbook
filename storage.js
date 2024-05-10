let initialDatacontacts = [
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

function saveContacts(newDatacontacts) {
  localStorage.setItem("dataContacts", JSON.stringify(newDatacontacts));
}

function loadContacts() {
  const dataContacts = JSON.parse(localStorage.getItem("dataContacts"));

  if (!dataContacts) {
    saveContacts(initialDatacontacts);
    return initialDatacontacts;
  } else return dataContacts;
}
