import React from "react";
import styles from "../styles/Experiences.module.css";
import ThemeChange from "../components/ThemeChange";
import { FaBriefcase } from "react-icons/fa";

export default function experience() {
  return (
    <div>
      <div className={[styles.active, styles.container].join(" ")}>
        <div className={styles.main_title}>
          <h2>My Experiences/Education</h2>
        </div>
        <div className={styles.timeline}>
          <div className={styles.timeline_item}>
            <div className={styles.tl_icon}>
              <FaBriefcase />
            </div>
            <div>
              <p className={styles.tl_duration}>Aug 2022 - present</p>
              <h5>Georgia Institute of Technology</h5>
              <p>
                Pursuing Bachelor's Degree in Computer Science.
              </p>
            </div>
          </div>
          <div className={styles.timeline_item}>
            <div className={styles.tl_icon}>
              <FaBriefcase />
            </div>
            <div>
              <p className={styles.tl_duration}>May 2023 - Aug 2023</p>
              <h5>Barcelona - Georgia Tech Study Abroad Program</h5>
              <p>
                Studied abroad in Barcelona, Spain and experienced the new Catalan culture while pursuing my studies in Computer Science.
              </p>
            </div>
          </div>
          <div className={styles.timeline_item}>
            <div className={styles.tl_icon}>
              <FaBriefcase />
            </div>
            <div>
              <p className={styles.tl_duration}>Aug 2018 - May 2022</p>
              <h5>Johns Creek High School</h5>
              <p>
                Graduated with High School Diploma with a Computer Science Pathway.
              </p>
            </div>
          </div>
          <div className={styles.timeline_item}>
            <div className={styles.tl_icon}>
              <FaBriefcase />
            </div>
            <div>
              <p className={styles.tl_duration}>Jun 2021 - Jul 2021</p>
              <h5>Engineering Intern at Georgia Tech Research Institute</h5>
              <p>
                Researched and programmed for the ATAS Lab. Conducted research in kinematic-based algorithms to define movements of a Braccio robotic arm. Developed skills in python frameworks and libraries like OpenCV, AprilTags, and Keras.
              </p>
            </div>
          </div>
          <div className={styles.timeline_item}>
            <div className={styles.tl_icon}>
              <FaBriefcase />
            </div>
            <div>
              <p className={styles.tl_duration}>Jun 2020 - Jul 2020</p>
              <h5>Software Intern at Georgia Tech Research Institute</h5>
              <p>
                Researched a designed for the SEAL Lab. Designed circuit cards to build a COVID-19 Monitoring Device that tracked the user's heart rate and temperature constantly. Personally was responsible for the Signal Processing Circuit Card that controlled movement of signals throughout the device.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ThemeChange />
    </div>
  );
}