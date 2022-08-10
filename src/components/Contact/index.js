import ContactLink from "../ContactLink";
import "./style.css";
import { contactLink } from "../Data";
const Contact = () => {
  return (
    <div className="app-contact">
      {contactLink.map((item) => (
        <ContactLink
          src={item.src}
          key={item.id}
          mediam={item.mediam}
          linkmediam={item.linkmediam}
        />
      ))}
    </div>
  );
};
export default Contact;
