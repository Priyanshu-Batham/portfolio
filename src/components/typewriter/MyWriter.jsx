"use client";
import Typewriter from "typewriter-effect";
import styles from "./typewriter.module.css"

const MyWriter = () => {
  return (
    <h1 className={styles.typewriter}>
      <Typewriter
         options={{
            strings: ['Developer', 'Problem Solver', 'Competitive Programmer'],
            autoStart: true,
            loop: true,
          }}
      />
    </h1>
  );
};

export default MyWriter;
