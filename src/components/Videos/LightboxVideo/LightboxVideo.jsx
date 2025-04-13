import Modal from "../../UI/Modal/Modal";
import "./LightboxVideo.scss";

const LightboxVideo = ({ videoUrl, visible, setVisible }) => {
  return (
    <Modal visible={visible} setVisible={setVisible}>
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="400"
          src={visible ? `${videoUrl}?rel=0&autoplay=1` : ""}
          title="Video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </Modal>
  );
};

export default LightboxVideo;
