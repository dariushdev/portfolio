import contact from "../../styles/components/Contact.module.scss";

export default function ContactInfo() {
  return (
    <div className={contact.contactInfo}>
      <h1>Contact</h1>
      <p>
        Drop a suggestion, feedback, opportunities or we can colaborate on a
        project. Please mention your contact details if you are expecting a
        reply.
      </p>
      <ul>
        <li>
          <a href="https://github.com/dariushdev">
            <i className="devicon-github-original colored"></i>
          </a>
        </li>
        <li>
          <a href="https://app.hackthebox.com/profile/34044">
            <i className={contact.htbIcon}></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCLV2OjQWd-5Y6VcGtKseTIw">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
