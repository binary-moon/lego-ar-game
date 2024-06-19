import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useStore } from "./useStore";
import { SelectDifficulty } from "./components/SelectDifficulty";
import { Game } from "./components/Game";
import { Intro } from "./components/Intro";
import { Outro } from "./components/Outro";

function App() {
  const gameState = useStore((state) => state.gameState);
  return (
    <div className="flex flex-col w-full h-full absolute top-0 left-0 bg-primary text-white overflow-hidden font-external">
      <AnimatePresence>
        {gameState === 0 && (
          <motion.div
            className="flex w-full h-full absolute top-0 left-0"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <Intro />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {gameState === 1 && (
          <motion.div
            className="flex w-full h-full absolute top-0 left-0"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <SelectDifficulty />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {gameState === 2 && (
          <motion.div
            className="flex w-full h-full absolute top-0 left-0"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <Game />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {gameState === 3 && (
          <motion.div
            className="flex w-full h-full absolute top-0 left-0"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <Outro />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
