import dashboardImg from '../assets/images/dashboard.png';
import positionImg from '../assets/images/position.png';
import PitchImg from '../assets/images/positionWithPitch.png';
import profile1Img from '../assets/images/profile1.png';
import profile2Img from '../assets/images/profile2.png';
import settingImg from '../assets/images/settings.png';
import ImageModal from "./imageModal";

const Prospector = () => {
    return (
      <div>
      <header>
      <h1>Prospector</h1>
      </header>   
    <ImageModal src={dashboardImg} alt="Dashboard" />
    <ImageModal src={positionImg} alt="Position feature" />
    <ImageModal src={PitchImg} alt="Position with pitch" />
    <ImageModal src={profile1Img} alt="Profile feature" />
    <ImageModal src={profile2Img} alt="Create a profile" />
    <ImageModal src={settingImg} alt="Setting feature" />
  </div>
    );
  };
  
  export default Prospector