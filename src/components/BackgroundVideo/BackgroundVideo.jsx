import React from "react";
import styles from "./backgroundVideo.module.css";  
import backgroundVideo from "../../assets/video.mp4";

const BackgroundVideo = () => {
  return (
    <div className={styles["video-container"]}>  
      <video autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
