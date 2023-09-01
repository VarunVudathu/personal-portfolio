import React from "react";
import styles from "../styles/Experiences.module.css";
import ThemeChange from "../components/ThemeChange";
import { FaBriefcase } from "react-icons/fa";

export default function experience() {
  return (
    <div>
      <div className={[styles.active, styles.container].join(" ")}>
        <div className={styles.main_title}>
          <h2>My Experiences</h2>
        </div>
        <div className={styles.timeline}>
          <div className={styles.timeline_item}>
            <div className={styles.tl_icon}>
              <FaBriefcase />
            </div>
            <div>
              <p className={styles.tl_duration}>2010 - present</p>
              <h5>Web Developer<span> - Vircrosoft</span></h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
              </p>
            </div>
          </div>
          <div className={styles.timeline_item}>
            <div className={styles.tl_icon}>
              <FaBriefcase />
            </div>
            <div>
              <p className={styles.tl_duration}>2010 - present</p>
              <h5>Web Developer<span> - Vircrosoft</span></h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
              </p>
            </div>
          </div>
          <div className={styles.timeline_item}>
            <div className={styles.tl_icon}>
              <FaBriefcase />
            </div>
            <div>
              <p className={styles.tl_duration}>2010 - present</p>
              <h5>Web Developer<span> - Vircrosoft</span></h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
              </p>
            </div>
          </div>
          <div className={styles.timeline_item}>
            <div className={styles.tl_icon}>
              <FaBriefcase />
            </div>
            <div>
              <p className={styles.tl_duration}>2010 - present</p>
              <h5>Web Developer<span> - Vircrosoft</span></h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
              </p>
            </div>
          </div>
          <div className={styles.timeline_item}>
            <div className={styles.tl_icon}>
              <FaBriefcase />
            </div>
            <div>
              <p className={styles.tl_duration}>2010 - present</p>
              <h5>Web Developer<span> - Vircrosoft</span></h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
              </p>
            </div>
          </div>
          <div className={styles.timeline_item}>
            <div className={styles.tl_icon}>
              <FaBriefcase />
            </div>
            <div>
              <p className={styles.tl_duration}>2010 - present</p>
              <h5>Web Developer<span> - Vircrosoft</span></h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ThemeChange />
    </div>
  );
}