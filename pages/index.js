import Head from "next/head";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import styles from "../styles/Home.module.css";
import ThemeChange from "../components/ThemeChange";

export default function Home() {
  return (
    <div className={styles.intro_page}>
      <div className={[styles.container, styles.header, styles.active].join(" ")} id="home">
          <Head>
            <title>Portfolio</title>
          </Head>
          <div className={styles.header_content}>
              <div className={styles.left_header}>
                  <div className={styles.h_shape}></div>
                  <div class={styles.image}>
                      <Image src={"/profile.jpg"} width={500} height={700} alt="Profile Image" />
                  </div>
              </div>
              <div className={styles.right_header}>
                  <h1 className={styles.name}>
                      Hi, I'm <span>Varun Vudathu. </span>
                      A Full-Time Student at Georgia Tech.
                  </h1>
                  <p>
                    I am a dedicated computer science student with a passion for web development and data science. 
                    I thrive on creating innovative web solutions and uncovering insights from data. 
                    My commitment to learning and problem-solving drives me to excel in these fields, 
                    making me a valuable asset in technology-driven projects.
                  </p>
                  <div className={styles.btn_con}>
                      <a href="../public/Resume.pdf" className={styles.main_btn} download>
                          <span className={styles.btn_text}>Download CV</span>
                          <span className={styles.btn_icon}><i><FaDownload /></i></span>
                      </a>
                  </div>
              </div>
          </div>
      </div>
      <ThemeChange />
    </div>
  );
}