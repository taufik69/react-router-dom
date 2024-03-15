import { redirect } from "react-router-dom";
import { createContact, updateContact } from "../contact.js";

export async function CrateContactaction() {
  const contact = await createContact();
  return { contact };
}

export async function EditContactAction({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}
