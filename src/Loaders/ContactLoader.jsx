import { getContacts, getContact } from "../contact";
import axios from "axios";

export async function Contactloader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");

  const contacts = await getContacts(q);

  return { contacts, q };
  // const contacts = await axios.get("https://dummyjson.com/users");
  // return { contacts: contacts.data.users };
}

export async function getContactloader({ params }) {
  const contact = await getContact(params.contactId);
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { contact };
}
