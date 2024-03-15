import { getContacts } from "../contact";
import axios from "axios";
export async function rootLoader() {
  const contacts = await getContacts();
  //   const contacts = await axios.get("https://dummyjson.com/users");
  //   return { contacts: contacts.data.users };
  return { contacts };
}
