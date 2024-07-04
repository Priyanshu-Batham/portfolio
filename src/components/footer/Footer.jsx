import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container} id="Contact">
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h1 className={styles.heading}>Let's work together</h1>
          <p className={styles.description}>
            Really appreciate you for paying a visit to my worksite.
            I am always open to discuss with you. If you have any projects or suggesstions in mind,
            feel free to contact me with these links.
          </p>
          <div className={styles.socailLinksContainer}>
            <Link href="https://discord.gg/6MbkazJTKv" target="_blank">
              <Image src="/discord.svg" alt="discord" width={36} height={36} />
            </Link>
            <Link href="mailto:priyanshubatham24733@gmail.com">
              <Image src="/gmail.svg" alt="gmail" width={36} height={36} />
            </Link>
            <Link href="https://github.com/Priyanshu-Batham" target="_blank">
              <Image src="/github.svg" alt="github" width={36} height={36} />
            </Link>
            <Link href="https://www.instagram.com/priyanshu_batham_1/" target="_blank">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </Link>
          </div>
          <Link href="/admin" className={styles.adminBtn}>
            Admin?
          </Link>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/footer.svg" alt="footer" fill />
        </div>
      </div>
    </div>
  );
};

export default Footer;
