import React from "react";
import styles from "../styles/Projects.module.css";
import ThemeChange from "../components/ThemeChange";
import {FaGithub} from "react-icons/fa";

export default function projects() {
  return (
    <div>
      <div className={[styles.container, styles.active].join(" ")}>
        <div className={styles.main_title}>
          <h2>My <span>Portfolio</span><br></br><span className={styles.bg_text}>My Work</span></h2>
        </div>
        <p className={styles.port_text}>
          Here is some of my work that I've done in various programming languages.
        </p>
        <div className={styles.portfolios}>
          <div className={styles.portfolio_item}>
            <div className={styles.image}>
              <img src="img/port1.jpg" alt="" />
            </div>
            <div className={styles.hover_items}>
              <h3>Project Source</h3>
              <div className={styles.icons}>
                <a href="#" className={styles.icon}>
                  <FaGithub size={50} className={styles.git}/>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <div className={styles.image}>
              <img src="img/port1.jpg" alt="" />
            </div>
            <div className={styles.hover_items}>
              <h3>Project Source</h3>
              <div className={styles.icons}>
                <a href="#" className={styles.icon}>
                  <FaGithub size={50} className={styles.git}/>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <div className={styles.image}>
              <img src="img/port1.jpg" alt="" />
            </div>
            <div className={styles.hover_items}>
              <h3>Project Source</h3>
              <div className={styles.icons}>
                <a href="#" className={styles.icon}>
                  <FaGithub size={50} className={styles.git}/>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <div className={styles.image}>
              <img src="img/port1.jpg" alt="" />
            </div>
            <div className={styles.hover_items}>
              <h3>Project Source</h3>
              <div className={styles.icons}>
                <a href="#" className={styles.icon}>
                  <FaGithub size={50} className={styles.git}/>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <div className={styles.image}>
              <img src="img/port1.jpg" alt="" />
            </div>
            <div className={styles.hover_items}>
              <h3>Project Source</h3>
              <div className={styles.icons}>
                <a href="#" className={styles.icon}>
                  <FaGithub size={50} className={styles.git}/>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <div className={styles.image}>
              <img src="img/port1.jpg" alt="" />
            </div>
            <div className={styles.hover_items}>
              <h3>Project Source</h3>
              <div className={styles.icons}>
                <a href="#" className={styles.icon}>
                  <FaGithub size={50} className={styles.git}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ThemeChange />
    </div>
  );
}