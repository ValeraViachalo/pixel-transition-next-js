'use strict'
import React, { useState, useEffect, useLayoutEffect, FC } from "react";
import { useRouter } from 'next/router';
import styles from "./style.module.scss";
import { motion } from "framer-motion";

const anim = {
  initial: {
    opacity: 0,
  },
  open: (i: number) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.04 * i },
  }),
  closed: (i: number) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.03 * i },
  }),
};

export const Transition: FC = () => {
  const router = useRouter();
  const [isChangePage, setIsChangePage] = useState(false);
  const [isClient, setIsClient] = useState(false)
  const [isExiting, setIsExiting] = useState(false); // new state variable to track the animation phase
 
  useLayoutEffect(() => {
    setIsClient(true)
  }, [])

  useLayoutEffect(() => {
    setIsExiting(false);
    setIsChangePage(true);
    const timer = setTimeout(() => {
      setIsChangePage(false);
      setIsExiting(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, [router.asPath]);

  const shuffle = (a: number[]) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const Blocks: FC = () => {
    if(window) {
      const innerWidth = window.innerWidth;
      const innerHeight = window.innerHeight;
      const blockSize = innerWidth * 0.05 > 0 ? innerWidth * 0.05 : 1;
      const nbOfBlocks = Math.ceil(innerHeight / blockSize);
      const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i));
      return (
      <>
        {shuffledIndexes.map((randomIndex, index) => {
          return (
            <motion.div
              key={index}
              className={styles.block}
              variants={anim}
              initial="initial"
              animate={isExiting ? "closed" : isChangePage ? "open" : "closed"} // use the isExiting state variable to determine the animation phase
              custom={randomIndex}
            />
            );
          })}
      </>
    );
  }
  };

  return (
    <div className={styles.pixelBackground}>
      {[...Array(20)].map((_, index) => {
        return (
          <div key={index} className={styles.column}>
            {isClient ? <Blocks /> : null}
          </div>
        );
      })}
    </div>
  );
}
