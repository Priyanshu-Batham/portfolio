import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.logo}>
          <Link href="/">PB</Link>
        </h1>
      </div>
      <ul className={styles.navContainer}>
        <li className={styles.navlink}>
          <Link href="/">
          Home</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/projects">
          Projects</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/About">
          About</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="#Contact">
          Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
