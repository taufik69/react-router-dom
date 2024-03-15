import { getContacts, getContact } from "../contact";
import axios from "axios";
export async function Contactloader() {
  const contacts = await getContacts();
  return { contacts };
  // const contacts = await axios.get("https://dummyjson.com/users");
  // return { contacts: contacts.data.users };
}

export async function getContactloader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}
