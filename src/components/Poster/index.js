import "./style.css";
import Typography from "../Typography";
import poster from "../../assets/image/poster.png";
import AppImage from "../AppImage";
import AppButton from "../AppButton";

const Poster = () => {
  return (
    <div className="app-poster">
      <div className="poster-text">
        <Typography type="H1">Hello...</Typography>
        <Typography type="H1" className="emma-text">
          I'm <span> Emma </span> Grand A Professional{" "}
        </Typography>
        <div className="text-animate-div">
          <Typography type="H1" className="animate-text">
            Freelancer
          </Typography>
          {/* <Typography type="H1">UX Designer</Typography>
          <Typography type="H1">Web Developer</Typography>
          <Typography type="H1">Web Designer</Typography> */}
        </div>
        <AppButton className="poster-button">
          View My Portfolio{" "}
          <span className="material-symbols-outlined button-content">
            cloud_download
          </span>
        </AppButton>
      </div>
      <div className="poster-image-div">
        <AppImage src={poster} className="poster-img" alt="poster"></AppImage>
      </div>
    </div>
  );
};

export default Poster;
