import Image from "next/image";
import styles from "./notfound.module.css";

const notfound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/notFound.gif" alt="notFound..." fill />
      </div>
      <h1 className={styles.heading}>Page Not Found</h1>
    </div>
  );
};

export default notfound;
