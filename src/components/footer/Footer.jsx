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
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </p>
          <div className={styles.socailLinksContainer}>
            <Link href="https://discord.gg/6MbkazJTKv">
              <Image src="/discord.svg" alt="discord" width={36} height={36} />
            </Link>
            <Link href="mailto:priyanshubatham24733@gmail.com">
              <Image src="/gmail.svg" alt="gmail" width={36} height={36} />
            </Link>
            <Link href="https://github.com/Priyanshu-Batham">
              <Image src="/github.svg" alt="github" width={36} height={36} />
            </Link>
            <Link href="https://www.instagram.com/priyanshu_batham_1/">
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
