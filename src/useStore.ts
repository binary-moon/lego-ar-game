import create from "zustand";

export type GameDifficulty = "easy" | "standard" | "hard";

export interface AppState {
  gameState: number;
  setGameState: (gameState: number) => void;
  gameDifficulty: GameDifficulty;
  setGameDifficulty: (gameDifficulty: GameDifficulty) => void;
}

export const useStore = create<AppState>((set) => ({
  gameState: 0, // 0: Intro, 1: Choose Difficulty, 2: AR Game, 3: Game Results
  setGameState: (gameState: number) => set({ gameState }),
  gameDifficulty: "standard",
  setGameDifficulty: (gameDifficulty: GameDifficulty) =>
    set({ gameDifficulty }),
}));
