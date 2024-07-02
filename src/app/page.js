import LatestWork from "@/components/latestwork/LatestWork";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <LatestWork />
    </div>
  );
}
