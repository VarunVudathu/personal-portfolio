import Head from "next/head";
import {FaDownload} from "react-icons/fa";
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
                      <img src="../public/hero.jpg" alt="ME" />
                  </div>
              </div>
              <div className={styles.right_header}>
                  <h1 className={styles.name}>
                      Hi, I'm <span>Varun Vudathu. </span>
                      A Full-Time Student at Georgia Tech.
                  </h1>
                  <p>
                      I'm a Web Developer, I love to create beautiful and functional websites.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, libero?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!
                  </p>
                  <div className={styles.btn_con}>
                      <a href="" className={styles.main_btn}>
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