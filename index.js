const contactListElement = document.getElementById("contacts");
const addContactFormElement = document.getElementById("addContactForm");
const seachKeywordForElement = document.getElementById("keyword");

const renderContact = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const keyword = searchParams.get("key");
  seachKeywordForElement.value = keyword;

  const contactsToDisplay = keyword ? searchContacts(loadContacts(), keyword) : loadContacts();

  const contactString = contactsToDisplay
    .map((contact) => {
      return `
      <table class="min-w-full divide-y divide-gray-200">
          <tbody class="bg-white divide-y divide-gray-200">
            <!-- Sample contact entry -->
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${contact.fullname}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${contact.phone}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${contact.address}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-900">
              <a href="/contact/?id=${contact.id} ">detail</a>
              </td>
            </tr>
          </tbody>
        </table>
    `;
    })
    .join("");

  contactListElement.innerHTML = contactString;
};

const addContact = (event) => {
  event.preventDefault();
  const formData = new FormData(addContactFormElement);
  const dataContacts = loadContacts();

  const nextId = dataContacts[dataContacts.length - 1].id + 1;
  const newContact = {
    id: nextId,
    fullname: formData.get("fname"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    birthday: formData.get("birthday"),
  };

  const newDataContacts = [...dataContacts, newContact];
  saveContacts(newDataContacts);
  renderContact();

  alert("Contact added successfully!");
  window.location.replace("/");
};

function toggleForm() {
  const form = document.getElementById("addContactForm");
  form.classList.toggle("hidden");
}

const searchContacts = (contacts, keyword) => {
  const searchedContact = contacts.filter((contact) => {
    return contact.fullname.toLowerCase().includes(keyword.toLowerCase());
  });
  return searchedContact;
};

addContactFormElement.addEventListener("submit", addContact);
renderContact();
