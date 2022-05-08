import HobbyQuizModuleScss from "./HobbyQuiz.module.scss";
import { useState } from "react";

export const HobbyQuiz = () => {
  const [disabled, setDisabled] = useState(false);

  const quizSet = [
    {
      q: "青空の趣味は次のうちどれ？",
      c: ["①プログラミング", "②飲み歩くこと", "③温泉に行くこと"],
    },
    {
      q: "青空の好きな食べ物は次のうちどれ？",
      c: ["①ラーメン", "②昆布", "③虫"],
    },
    {
      q: "青空の将来の夢は次のうちどれ？",
      c: [
        "①温泉に行くこと",
        "②お星さまになること",
        "③頑張ってるのに報われない人を報われるようにすること",
      ],
    },
  ];

  const [currentNum, setCurrentNum] = useState(0);
  const [answer, setAnswer] = useState("");
  const [enabled, setEnabled] = useState(false);

  const checkAnswer = (data) => {
    if (
      data === "①プログラミング" ||
      data === "①ラーメン" ||
      data === "③頑張ってるのに報われない人を報われるようにすること"
    ) {
      setAnswer("正解！");
      setEnabled(true);
    } else {
      setAnswer("残念！");
    }
  };

  const goToNextQuestion = () => {
    setCurrentNum((prev) => prev + 1);
    setAnswer("");
    setEnabled(false);
  };

  return (
    <div>
      <div>
        <div className={HobbyQuizModuleScss.question}>
          {quizSet[currentNum].q}
        </div>
        <ul>
          <li onClick={() => checkAnswer(quizSet[currentNum].c[0])}>
            {quizSet[currentNum].c[0]}
          </li>
          <p></p>
          <li onClick={() => checkAnswer(quizSet[currentNum].c[1])}>
            {quizSet[currentNum].c[1]}
          </li>
          <p></p>
          <li onClick={() => checkAnswer(quizSet[currentNum].c[2])}>
            {quizSet[currentNum].c[2]}
          </li>
        </ul>
      </div>
      <p id={HobbyQuizModuleScss.anserFormat}>{answer}</p>
      <button
        onClick={() => goToNextQuestion()}
        className={
          enabled
            ? `${HobbyQuizModuleScss.quizNextButton} ${HobbyQuizModuleScss.notAnsweredYet}${HobbyQuizModuleScss.answered}`
            : `${HobbyQuizModuleScss.quizNextButton} ${HobbyQuizModuleScss.notAnsweredYet}`
        }
      >
        Next
      </button>
    </div>
  );
};
