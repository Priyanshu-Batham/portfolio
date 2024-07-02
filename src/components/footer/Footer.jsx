import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container} id="Contact">
      <h1 className={styles.heading}>Let's work together</h1>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <p className={styles.description}>
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </p>
          <div className={styles.socailLinksContainer}>
            <Link href="somewhere">
              <Image src="/discord.svg" alt="discord" width={36} height={36} />
            </Link>
            <Link href="somewhere">
              <Image src="/gmail.svg" alt="gmail" width={36} height={36} />
            </Link>
            <Link href="somewhere">
              <Image src="/github.svg" alt="github" width={36} height={36} />
            </Link>
            <Link href="somewhere">
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
        <form className={styles.contactForm}>
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
