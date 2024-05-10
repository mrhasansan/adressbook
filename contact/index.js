const contactByIdElemenent = document.getElementById("contactByID");

const renderContactById = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const id = Number(searchParams.get("id"));

  const dataContacts = loadContacts();
  const contact = dataContacts.find((contact) => {
    return contact.id === id;
  });

  const contactByIsString = `
  <div ">
    <h2 class="text-lg font-semibold mb-2">Name: ${contact.fullname}</h2>
    <p class="text-md text-gray-600 mb-1">Birthday: ${contact.birthday}</p>
    <p class="text-md text-gray-600 mb-1">Email: ${contact.email}</p>
    <p class="text-sm text-gray-600">Phone: ${contact.phone}</p>
    <button onclick="renderEditContactFormById(${contact.id})" class="bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring mt-3">Edit</button>
    <button onclick="deleteContactById(${contact.id})" class="bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring mt-3">Delete</button>
</div>`;

  contactByIdElemenent.innerHTML = contactByIsString;
};

function renderEditContactFormById() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = Number(searchParams.get("id"));

  const dataContacts = loadContacts();
  const contact = dataContacts.find((contact) => {
    return contact.id === id;
  });
  contactByIdElemenent.innerHTML = `
  <form id="editContactForm" method="post">
        <div>
          <label for="fname" class="block text-gray-700 font-bold mb-2">Full Name:</label>
          <input type="text" id="fname" name="fname" placeholder="Hasansan" required class="w-full px-3 py-2 mb-3 placeholder-gray-400 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-gray-300" value="${contact.fullname}" />
        </div>
        <div>
          <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
          <input type="email" id="email" name="email" placeholder="Hasansan@mail.com" required class="w-full px-3 py-2 mb-3 placeholder-gray-400 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-gray-300" value="${contact.email}"/>
        </div>
        <div>
          <label for="phone" class="block text-gray-700 font-bold mb-2">Phone number:</label>
          <input type="number" id="phone" name="phone" placeholder="87403738" required class="w-full px-3 py-2 mb-3 placeholder-gray-400 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-gray-300" value="${contact.phone}"/>
        </div>
        <div>
          <label for="address" class="block text-gray-700 font-bold mb-2">Address:</label>
          <input type="text" id="address" name="address" placeholder="Jakarta" required class="w-full px-3 py-2 mb-3 placeholder-gray-400 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-gray-300" value="${contact.address}"/>
        </div>
        <div>
          <label for="birthday" class="block text-gray-700 font-bold mb-2">Birthday:</label>
          <input type="date" id="birthday" name="birthday" class="w-full px-3 py-2 mb-3 placeholder-gray-400 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-gray-300" value="${contact.birthday}"/>
        </div>
        <button type="submit" value="submit" class="bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring mt-3" >Save</button>
      </form>
  `;

  const editContactFormElement = document.getElementById("editContactForm");
  editContactFormElement.addEventListener("submit", editContact);
}

function deleteContactById(id) {
  const contacts = loadContacts();
  const updateContact = contacts.filter((contact) => contact.id !== Number(id));

  saveContacts(updateContact);
  alert("Contact deleted successfully!");
  window.location.replace("/");
}

function editContact(event) {
  const searchParams = new URLSearchParams(window.location.search);
  const id = Number(searchParams.get("id"));
  event.preventDefault();
  const contactFormData = new FormData(event.target);
  const contacts = loadContacts();
  const editContact = {
    id: id,
    fullname: contactFormData.get("fname"),
    email: contactFormData.get("email"),
    phone: contactFormData.get("phone"),
    address: contactFormData.get("address"),
    birthday: contactFormData.get("birthday"),
  };
  const updatedContact = contacts.map((contact) => {
    if (contact.id === editContact.id) {
      return editContact;
    } else {
      return contact;
    }
  });
  saveContacts(updatedContact);
  alert("Contact updated successfully!");
  window.location.replace("/");
}
renderContactById();
