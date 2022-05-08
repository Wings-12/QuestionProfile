import Icon from "../images/MyProfilePic.jpg";
import ProfilePictureModuleScss from "./ProfilePicture.module.scss";

export const ProfilePicture = () => {
  return (
    <img
      src={Icon}
      alt="アイコン"
      className={ProfilePictureModuleScss.trimImageToCircle}
    ></img>
  );
};
