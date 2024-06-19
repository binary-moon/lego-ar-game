import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useStore } from "../useStore";
import { Button } from "./Button";

import logo from "../images/Logo_Lockup@2x.png";
import legoLogo from "../images/brand_header_legodreamzzz@2x.png";
import speechBubble from "../images/Speech_Bubble@2x.png";
import legoCharacter from "../images/Lego_Character@2x.png";

export function Intro() {
  const [displayLogoIntro, setDisplayLogoIntro] = useState(true);
  const setGameState = useStore((state) => state.setGameState);

  const introDuration = 3;

  const container = {
    hidden: { x: "100%" },
    show: {
      x: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };

  useEffect(() => {
    setTimeout(() => {
      // Update gameState to 1 to show the Choose Difficulty screen
      setDisplayLogoIntro(false);
    }, introDuration * 1000);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full absolute top-0 left-0">
      <AnimatePresence>
        {displayLogoIntro && (
          <motion.div
            className="flex justify-center"
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              className="w-[90%]"
              src={logo}
              alt="Dreamzzz - Nightmare Creature Hunt"
              animate={{ scale: [0.9, 1, 0.9] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {!displayLogoIntro && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col w-full h-full absolute top-0 left-0 p-8"
        >
          <motion.img
            src={legoLogo}
            className="w-[200px]"
            alt="Lego - Dreamzzz"
          />
          <motion.img
            className="absolute bottom-[0%] left-0"
            src={legoCharacter}
            alt="Lego Character"
          />
          <motion.img
            variants={item}
            className="absolute top-[10%] left-0"
            src={speechBubble}
            alt="So we are calling on all talented kids to join dream-crafters and help us defend the dreamzzz world!"
          />
          <motion.div>
            <Button
              label="NEXT"
              onClick={() => setGameState(1)}
              className="absolute right-4 bottom-4"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
