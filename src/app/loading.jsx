import Image from "next/image";
import styles from "./loading.module.css";

const loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/loading.gif" alt="Loading..." fill />
      </div>
    </div>
  );
};

export default loading;
