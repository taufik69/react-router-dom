import { createContact } from "../contact.js";

export async function CreateContactAction() {
  const contact = await createContact();
  return { contact };
}
