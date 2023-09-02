import React from "react";
import ThemeChange from "../components/ThemeChange";
import { FaDownload } from "react-icons/fa";
import styles from "../styles/About.module.css";

export default function About() {
    return (
        <div>
            <div className={styles.active}>
                <div className={styles.main_title}>
                    <h2>About <span>me</span><br></br><span className={styles.bg_text}>my stats</span></h2>
                </div>
                <div className={styles.about_container}>
                    {/* <div className={styles.left_about}>
                        <h4>Information About me</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet labore nihil obcaecati consequatur. Debitis error doloremque,
                            vero eos vel nemo eius voluptatem dicta tenetur modi. <br /> <br /> La musica
                            delectus dolore fugiat exercitationem a,
                            ipsum quidem quo enim natus accusamus labore dolores nam. Unde.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Harum non necessitatibus deleniti eum soluta.
                        </p>
                        <div className={styles.btn_con}>
                            <a href="../public/Resume.pdf" download className={styles.main_btn}>
                                <span className={styles.btn_text}>Download CV</span>
                                <span className={styles.btn_icon}><i><FaDownload /></i></span>
                            </a>
                        </div>
                    </div> */}
                    <div className={styles.right_about}>
                        <div className={styles.about_item}>
                            <div className={styles.abt_text}>
                                <p className={styles.large_text}>GT Web Dev</p>
                                <p className={styles.small_text}>Worked as Project Manager to guide and mentor younger students through the process of developing a web application and Project Member to learn and implement full stack features into creative web applications.</p>
                            </div>
                        </div>
                        <div className={styles.about_item}>
                            <div className={styles.abt_text}>
                                <p className={styles.large_text}>The Young Entreprenuers</p>
                                <p className={styles.small_text}>Employed as COO of Boxed Water Iniative, a promotional product company aimed to eliminate plastic pollution. Built a business from scratch called whilst working with large industy leaders.</p>
                            </div>
                        </div>
                        <div className={styles.about_item}>
                            <div className={styles.abt_text}>
                                <p className={styles.large_text}>GT Club Baseball</p>
                                <p className={styles.small_text}>Devoted team member and statistician, engaging in practice four times a week. Played baseball for 14 years prior to joining efforts. Won MVP in 9th grade and Cy Young in 12th grade.</p>
                            </div>
                        </div>
                        <div className={styles.about_item}>
                            <div className={styles.abt_text}>
                                <p className={styles.large_text}>Vibha</p>
                                <p className={styles.small_text}>Dedicated volunteer who lent support on many major fundrasinging events like Vibha DreamMile and Vibha Cricket. Raised money to fund education for under-resourced kids in India and US.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.about_stats}>
                    <h4 className={styles.stat_title}>My Skills</h4>
                    <label className={styles.switch}>
                        <input type="checkbox" />
                        <span className={[styles.slider, styles.round].join(" ")}></span>
                    </label>
                    <div className={styles.progress_bars}>
                        <div className={styles.progress_bar}>
                            <p className={styles.prog_title}>HTML/CSS</p>
                            <div className={styles.progress_con}>
                                <p className={styles.prog_text}>80%</p>
                                <div className={styles.progress}>
                                    <span className={styles.html}></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.progress_bar}>
                            <p className={styles.prog_title}>JavaScript</p>
                            <div className={styles.progress_con}>
                                <p className={styles.prog_text}>80%</p>
                                <div className={styles.progress}>
                                    <span className={styles.css}></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.progress_bar}>
                            <p className={styles.prog_title}>Python</p>
                            <div className={styles.progress_con}>
                                <p className={styles.prog_text}>80%</p>
                                <div className={styles.progress}>
                                    <span className={styles.js}></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.progress_bar}>
                            <p className={styles.prog_title}>Java</p>
                            <div className={styles.progress_con}>
                                <p className={styles.prog_text}>80%</p>
                                <div className={styles.progress}>
                                    <span className={styles.react}></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.progress_bar}>
                            <p className={styles.prog_title}>React/React Native</p>
                            <div className={styles.progress_con}>
                                <p className={styles.prog_text}>80%</p>
                                <div className={styles.progress}>
                                    <span className={styles.node}></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.progress_bar}>
                            <p className={styles.prog_title}>MySQL</p>
                            <div className={styles.progress_con}>
                                <p className={styles.prog_text}>80%</p>
                                <div className={styles.progress}>
                                    <span className={styles.python}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ThemeChange />
        </div>
    );
}