import React, {useState, useEffect} from "react";
import {FaHouzz, FaUser, FaBriefcase, FaNewspaper, FaEnvelope, FaAdjust} from "react-icons/fa";
import Link from 'next/link';
import styles from "../styles/ThemeChange.module.css";


export default function ThemeChange() {
  const [page, setPage] = useState("");

  useEffect(() => {
    setPage(window.location.pathname)
  });

  const changeTheme = () => {
    // document.body.classList.toggle("light-mode");
  }

  return (
    <div>
        <div className={styles.controls}>
          <div className={page == "/" ? styles.active_btn : styles.control} data_id="home">
            <Link href="/" className={styles.icons}><FaHouzz /></Link>
          </div>
          <div className={page == "/about" ? styles.active_btn : styles.control} data_id="about">
              <Link href="/about"  className={styles.icons}><FaUser /></Link>
          </div>
          <div className={page == "/experience" ? styles.active_btn : styles.control} data_id="portfolio">
            <Link href="/experience" className={styles.icons}><FaBriefcase /></Link>
          </div>
          <div className={page == "/projects" ? styles.active_btn : styles.control} data_id="blogs">
            <Link href="/projects" className={styles.icons}><FaNewspaper /></Link>
          </div>
          <div className={page == "/contact" ? styles.active_btn : styles.control} data_id="contact">
            <Link href="/contact" className={styles.icons}><FaEnvelope /></Link>
          </div>
      </div>
      <div className={styles.theme_btn} onClick={changeTheme()}>
          <i><FaAdjust /></i>
      </div>
    </div>
  );
}