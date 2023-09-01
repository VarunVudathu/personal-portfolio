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
                    <div className={styles.left_about}>
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
                            <a href="" className={styles.main_btn}>
                                <span className={styles.btn_text}>Download CV</span>
                                <span className={styles.btn_icon}><i><FaDownload /></i></span>
                            </a>
                        </div>
                    </div>
                    <div className={styles.right_about}>
                        <div className={styles.about_item}>
                            <div className={styles.abt_text}>
                                <p className={styles.large_text}>650+</p>
                                <p className={styles.small_text}>Projects <br /> Completed</p>
                            </div>
                        </div>
                        <div className={styles.about_item}>
                            <div className={styles.abt_text}>
                                <p className={styles.large_text}>650+</p>
                                <p className={styles.small_text}>Projects <br /> Completed</p>
                            </div>
                        </div>
                        <div className={styles.about_item}>
                            <div className={styles.abt_text}>
                                <p className={styles.large_text}>650+</p>
                                <p className={styles.small_text}>Projects <br /> Completed</p>
                            </div>
                        </div>
                        <div className={styles.about_item}>
                            <div className={styles.abt_text}>
                                <p className={styles.large_text}>650+</p>
                                <p className={styles.small_text}>Projects <br /> Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.about_stats}>
                    <h4 className={styles.stat_title}>My Skills</h4>
                    <div className={styles.progress_bars}>
                        <div className={styles.progress_bar}>
                            <p className={styles.prog_title}>html5</p>
                            <div className={styles.progress_con}>
                                <p className={styles.prog_text}>80%</p>
                                <div className={styles.progress}>
                                    <span className={styles.html}></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.progress_bar}>
                            <p className={styles.prog_title}>html5</p>
                            <div className={styles.progress_con}>
                                <p className={styles.prog_text}>80%</p>
                                <div className={styles.progress}>
                                    <span className={styles.css}></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.progress_bar}>
                            <p className={styles.prog_title}>html5</p>
                            <div className={styles.progress_con}>
                                <p className={styles.prog_text}>80%</p>
                                <div className={styles.progress}>
                                    <span className={styles.js}></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.progress_bar}>
                            <p className={styles.prog_title}>html5</p>
                            <div className={styles.progress_con}>
                                <p className={styles.prog_text}>80%</p>
                                <div className={styles.progress}>
                                    <span className={styles.react}></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.progress_bar}>
                            <p className={styles.prog_title}>html5</p>
                            <div className={styles.progress_con}>
                                <p className={styles.prog_text}>80%</p>
                                <div className={styles.progress}>
                                    <span className={styles.node}></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.progress_bar}>
                            <p className={styles.prog_title}>html5</p>
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