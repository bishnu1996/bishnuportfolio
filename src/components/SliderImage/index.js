import "./style.css";
import slide1 from "../../assets/image/slide1.png";
import slide2 from "../../assets/image/slide2.png";
import slide3 from "../../assets/image/slide3.png";
import slide4 from "../../assets/image/slide4.png";
import slide5 from "../../assets/image/slide5.png";
import slide6 from "../../assets/image/slide6.png";
import { useEffect, useState } from "react";

const SliderImage = () => {
  const [selectIndex, setSelectIndex] = useState(0);
  const [totalImage, setTotalImage] = useState([
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
  ]);
//   const handleNext = () => {
//     if (selectIndex < allImage.length - 1) {
//       setSelectIndex(selectIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (selectIndex > 0) {
//       setSelectIndex(selectIndex - 1);
//     }
// };

  useEffect(()=>{
    setInterval(() => {
        setSelectIndex(selectIndex => selectIndex < totalImage.length-1  ? selectIndex + 1 : 0 )
    }, 1000);
  },[])

  return (
    <div className="sliderimage">
      <img src={totalImage[selectIndex]} alt="" />
      <br />
      {/* <button onClick={handlePrev}>&laquo;</button>
      <button onClick={handleNext}> &raquo;</button> */}
    </div>
  );
};

export default SliderImage;
