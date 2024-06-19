import { useStore, GameDifficulty } from "../useStore";
import { Button } from "./Button";

import legoLogo from "../images/brand_header_legodreamzzz@2x.png";
import speechBubble from "../images/Step_3_Text_Cloud@2x.png";

export function SelectDifficulty() {
  const gameDifficulties: GameDifficulty[] = ["easy", "standard", "hard"];
  const gameDifficulty = useStore((state) => state.gameDifficulty);
  const setGameDifficulty = useStore((state) => state.setGameDifficulty);
  const setGameState = useStore((state) => state.setGameState);

  return (
    <div className="flex flex-col justify-between items-center w-full h-full absolute top-0 left-0 p-8">
      <img src={legoLogo} className="w-[200px]" alt="Lego - Dreamzzz" />
      <div className="flex flex-col items-center gap-12">
        <img
          src={speechBubble}
          className="w-[75%]"
          alt="Select Game Difficulty Level"
        />
        <div className="flex flex-col items-center gap-4">
          {gameDifficulties.map((difficulty) => (
            <Button
              key={difficulty}
              label={difficulty.toUpperCase()}
              active={gameDifficulty === difficulty}
              buttonStyle="difficulty"
              onClick={() => setGameDifficulty(difficulty)}
            />
          ))}
        </div>
        <p className="text-center text-md">
          Choose STANDARD for default game settings. Easy best suited for
          natural dreamers aged under 8, and HARD for age 10 and above.
        </p>
      </div>
      <Button
        label="DONE!"
        onClick={() => setGameState(2)}
        buttonStyle="secondary"
      />
    </div>
  );
}
