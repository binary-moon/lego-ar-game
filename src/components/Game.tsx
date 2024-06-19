import { useEffect } from "react";
import { useStore } from "../useStore";

export function Game() {
  const setGameState = useStore((state) => state.setGameState);
  const gameDifficulty = useStore((state) => state.gameDifficulty);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.action === "exitAR") {
        setGameState(3);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  });
  return (
    <iframe
      className="h-full w-full"
      src={`https://playcanv.as/index/73d9a544?gameDifficulty=${gameDifficulty}`}
      frameBorder="0"
      allowFullScreen
    />
  );
}
