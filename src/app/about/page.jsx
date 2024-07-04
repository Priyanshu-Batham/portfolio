import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <>
      <h1 className={styles.heading}>About Me</h1>
      <div className={styles.container}>
        {/* About Me */}
        <section className={styles.meSection}>
          <div className={styles.imgContainer}>
            <Image src="/aboutMe.svg" alt="me" height={300} width={300} />
          </div>
          <div className={styles.textContainer}>
            <p>
              I am the type of guy you wouldn't think is much attractive at
              first, but stick around with me for quite some time and you'll
              find out how good of a companion I can be. I like to stay low with
              a high profile. Ofcourse, coding is my passion but let's just keep
              that side of me from here. Besides that, I love Gaming. There's
              also a small bunch of friends I have to play games with at
              weekends. I don't really care about academics a lot as from my
              perspective it's just a race to memorize useless stuff. I like to
              be practical and hone my programming skills as much as I can.
            </p>
          </div>
        </section>

        {/* About my Guitar lol */}
        <section className={styles.musicSection}>
          <div className={styles.textContainer}>
            <p>
              Musician? well not exactly that but there way a time back before
              pandemic when I played the Guitar all day long. To have a seperate
              section just for this topic is a bit of an overkill but I guess
              it's nice to mention it here. You can checkout some of my old
              Guitar skills on my <a href="https://www.instagram.com/priyanshu_batham_1/" target="_blank">Instagram</a>.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <Image src="/musician.svg" height={300} width={300} />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
