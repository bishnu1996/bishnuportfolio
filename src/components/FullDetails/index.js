import "./style.css";
import Typography from "../Typography";
import AppButton from "../AppButton";
import AppImage from "../AppImage";
import fulldetailsimage from "../../assets/image/fulldetailsimage.png";
const FullDetails = () => {
  return (
    <div className="fulldetails">
      <div className="text-image-div">
        <Typography type="H3">Welcome to My Portfolio</Typography>
        <Typography type="H2" className="fulldetais-text-main">
          Why <span className="main-text">3650 People </span> Love Us Believe My
          Awesome Services
        </Typography>
        <AppImage src={fulldetailsimage} className="text-image-img" />
      </div>
      <div className="fulldatails-div">
        <Typography type="H2" className="fulldatails-main-text">
          I am <span> Emma Grant</span> UX Designer From New York City 1200.
        </Typography>
        <Typography type="H7" className="fulldatails-div-text">
          Energisticaly Simplify Toping Line Solutions without Leveraged Resutrs
          are an Colabrerse Channels Throughe Qrthogonal e-Commerce Energistcaly
          Growing Practve Anding Platform Niches After Paralel Technolog
        </Typography>
        <div className="person-details">
          <Typography type="H7" className="person-detail-typo">
            Name &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;:&ensp; <b>Emma Grant</b>
          </Typography>
          <Typography type="H7" className="person-detail-typo">
            Date of Birth : &ensp;<b>27 Feb 1994</b>
          </Typography>
          <Typography type="H7" className="person-detail-typo">
            Email &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;:&ensp;{" "}
            <b>smith7@gmail.com</b>
          </Typography>
          <Typography type="H7" className="person-detail-typo">
            Phone &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;:&ensp;<b>+258 369 147</b>
          </Typography>
          <Typography type="H7" className="person-detail-typo">
            Fax &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;:&ensp;
            <b> 222 666 888</b>
          </Typography>
          <Typography type="H7" className="person-detail-typo">
            Nationality&ensp;&ensp; : &ensp;<b>United States</b>
          </Typography>
          <Typography type="H7" className="person-detail-typo">
            Adress &ensp;&ensp;&ensp;&ensp;&ensp; :&ensp;
            <b>Suite 02 New Elephant Road</b>
          </Typography>
        </div>

        <AppButton className="contact-button">
          Download Resume
          <span className="material-symbols-outlined button-content">
            cloud_download
          </span>
        </AppButton>
      </div>
    </div>
  );
};

export default FullDetails;
