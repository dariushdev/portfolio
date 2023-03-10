import ContactInfo from "../components/Contact/ContactInfo";
import Form from "../components/Contact/Form";
import contact from "../styles/components/Contact.module.scss";

export default function ContactPage() {
  return (
    <div className={contact.contact}>
      <ContactInfo />
      <Form />
    </div>
  );
}
