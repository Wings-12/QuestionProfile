import { Fragment } from "react";
import { ProfilePicture } from "./components/ProfilePicture";
import { Name } from "./components/Name";
import { HobbyQuiz } from "./components/HobbyQuiz";

export const App = () => {
  

  const name = <Name></Name>;
  const profilePicture = <ProfilePicture></ProfilePicture>;
  const hobbyQuiz = <HobbyQuiz></HobbyQuiz>;

  return (
    // cssで全体にabsolute入れて画面を縮小したときも相対位置が変わらないかテスト
    <Fragment>
      {name}
      {profilePicture}
      {hobbyQuiz}
    </Fragment>
  );
};
