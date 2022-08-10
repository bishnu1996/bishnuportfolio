import "./style.css";
import AppImage from "../AppImage";
import Typography from "../Typography";
const ContactLink = (props) => {
  return (
    <div className="app-contactlink">
      <AppImage src={props.src} alt={props.alt} className="contact-icon" />
      <Typography type="H7" className="mediam">{props.mediam}</Typography>
      <Typography type="H4" className="mediamlink"><b>{props.linkmediam}</b></Typography>
    </div>
  );
};
export default ContactLink;