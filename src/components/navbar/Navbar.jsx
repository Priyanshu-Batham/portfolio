import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/brand.png" alt="pb" fill />
        </Link>
      </div>
      <ul className={styles.navContainer}>
        <li className={styles.navlink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="#Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
