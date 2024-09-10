import React from "react";
import styles from "../styles/Experiences.module.css";
import ThemeChange from "../components/ThemeChange";
import { FaBriefcase } from "react-icons/fa";

export default function experience() {
  return (
    <div>
      <div className={[styles.active, styles.container].join(" ")}>
        <div className={styles.main_title}>
          <h2><span>My</span> Experiences <br></br><span>My</span> Education</h2>
        </div>
        <div className={styles.timeline}>
          <div className={styles.timeline_item}>
            <div className={styles.tl_icon}>
              <FaBriefcase />
            </div>
            <div>
              <p className={styles.tl_duration}>May 2024 - Present</p>
              <h5>Research Intern - Student Assistant at Georgia Tech Research Institute</h5>
              <p>
                During my research internship at Georgia Tech Electro Optical and Sensor Laboratory (EOSL), I developed new algorithms and prototyped a cost-effective alternative to LiDAR by utilizing the Scheimpflug principle, leading to optimized multi-dimensional object capture. 
                I implemented a deep learning model with convolutional neural networks and Python, dynamically adjusting to camera focus planes for improved real-time object detection. 
                Additionally, I developed and optimized parallel computing algorithms using C, enhancing performance for real-time image processing tasks and matrix multiplication in scientific simulations.
              </p>
            </div>
          </div>
          <div className={styles.timeline_item}>
            <div className={styles.tl_icon}>
              <FaBriefcase />
            </div>
            <div>
              <p className={styles.tl_duration}>Aug 2023 - May 2024</p>
              <h5>Georgia Tech College of Computing</h5>
              <p>
                As a Student Assistant in the Cybersecurity department at Georgia Tech, I enhanced the development of an AI-driven Helpdesk Chatbot, which reduced issue resolution time and mitigated cybersecurity vulnerabilities. 
                I automated ETL processes and developed algorithms for data structuring and vulnerability management using Python. 
                Additionally, I utilized agile development methodologies and CI/CD practices to ensure rapid iteration and deployment of new features and fixes, maintaining high standards of quality and reliability throughout the project.
              </p>
            </div>
          </div>
          <div className={styles.timeline_item}>
            <div className={styles.tl_icon}>
              <FaBriefcase />
            </div>
            <div>
              <p className={styles.tl_duration}>Aug 2022 - Present</p>
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
              <h5>Software Engineering Intern at Georgia Tech Research Institute</h5>
              <p>
                Worked in the Aerospace, Transportation and Advanced Systems (ATAS) Laboratory. 
                As a researcher, I guided the enhancement of camera vision capabilities for an industrial Braccio Robotic Arm. 
                This involved integrating advanced Python frameworks and libraries such as Flask, OpenCV, and AprilTags into a Raspberry Pi setup. 
                Additionally, I introduced kinematic algorithms to improve the arm's movement precision and enhance its ability to detect AprilTags within the workspace.
              </p>
            </div>
          </div>
          <div className={styles.timeline_item}>
            <div className={styles.tl_icon}>
              <FaBriefcase />
            </div>
            <div>
              <p className={styles.tl_duration}>Jun 2020 - Jul 2020</p>
              <h5>Engineering Intern at Georgia Tech Research Institute</h5>
              <p>
                Worked in the Sensors and Electromagnetic Applcations Laboratory (SEAL). 
                I conducted comprehensive research into advanced circuitry for a COVID-19 Wearable Detection Device, enabling the identification of temperature and blood pressure irregularities. 
                I directed the creation of the Signal Processing Circuit Card using PCB design tools, crafting algorithms for accurate signal transmission. 
                Additionally, I demonstrated Microsoft Office proficiency by refining a real-world product's business pitch, highlighting my strong professional communication and presentation skills.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ThemeChange />
    </div>
  );
}