import { getContacts } from "../contact";
import axios from "axios";
export async function loader() {
  //   const contacts = await getContacts();
  const contacts = await axios.get("https://dummyjson.com/users");
  return { contacts: contacts.data.users };
}
