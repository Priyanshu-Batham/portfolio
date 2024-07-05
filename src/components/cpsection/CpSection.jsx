import Image from "next/image";
import styles from "./cpsection.module.css";
import Link from "next/link";

const CpSection = () => {
  return (
    <section className={styles.outerContainer}>
      <h1 className={styles.heading}>Competitive Background</h1>
      <div className={styles.container}>
        {/* About Me */}
        <section className={styles.meSection}>
          <div className={styles.imgContainer}>
            <Image
              src="/leetTopPercent.png"
              alt="leetcodeTo20Percent"
              height={150}
              width={300}
            />
          </div>
          <div className={styles.textContainer}>
            <p>
              Before beginning my journey of Web Development, I used to believe
              that the only thing that actually matters is just Competitive
              Programming. Well because of that I have been solving problems on
              various competitive platforms like{" "}
              <Link href="https://leetcode.com/u/priyanshubatham24733/">
                Leetcode
              </Link>{" "}
              <Link href="https://www.geeksforgeeks.org/user/priyanshubatham/">
                GeeksForGeeks
              </Link>{" "}
              & even{" "}
              <Link href="https://codeforces.com/profile/Priyanshu-Batham">
                Codeforces
              </Link>
              . You can definately check out my profiles with these links. I
              climbed to the{" "}
              <span style={{ fontWeight: "bold" }}>
                Top 20% percent on Leetcode
              </span>{" "}
              with sheer practise and will. Being a competitive programmer is a
              very important part of my life. I have been able to learn a lot
              from it and also get a lot of experience in the field of Data
              Structures & Algorithms.
            </p>
          </div>
        </section>

        {/* About my Guitar lol */}
        <section className={styles.musicSection}>
          <div className={styles.textContainer}>
            <p>
              Not only virtual prizes like badges and points, I have also won an{" "}
              <span style={{ fontWeight: "bold" }}>
                Official GeeksForGeeks Bag.
              </span>{" "}
              The phase of Competitive Programming was very pleasing for me and
              I still miss that to this day. Not only it helped me in competitions
              but it also improved my overall problem solving skills which makes
              development a lot easier.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <Image src="/gfgBag.png" height={150} width={300} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default CpSection;
