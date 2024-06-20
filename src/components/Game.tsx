import React, { useEffect } from "react";
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
      src={`/game/index.html?difficulty=${gameDifficulty}`}
      frameBorder="0"
      allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone;"
      allowFullScreen
    />
  );
}
