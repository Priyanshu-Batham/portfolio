"use client";
import Image from "next/image";
import styles from "./error.module.css";

const errorPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/error.gif" alt="error" fill />
      </div>
    </div>
  );
};

export default errorPage;
