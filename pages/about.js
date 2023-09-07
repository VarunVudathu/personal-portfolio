import React from "react";
import Image from "next/image";
import { DiGit, DiCss3, DiHeroku, DiHtml5, DiGithubBadge, DiJava, DiPython, DiMysql, DiMongodb, DiReact, DiAndroid } from "react-icons/di";
import { IoLogoFirebase, IoLogoJavascript, IoLogoMicrosoft, IoLogoVercel, IoTimerOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri"
import { MdOutlineWorkHistory, MdLeaderboard, MdCall } from "react-icons/md";
import ThemeChange from "../components/ThemeChange";
import styles from "../styles/About.module.css";

export default function About() {
    return (
        <div>
            <div className={styles.active}>
                <div className={styles.main_title}>
                    <h2>About <span>me</span><br></br><span className={styles.bg_text}>my info</span></h2>
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
                                <p className={styles.small_text}>Dedicated volunteer who lent support on many major fundraising events like Vibha DreamMile and Vibha Cricket. Raised money to fund education for under-resourced kids in India and US.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.about_stats}>
                    <h4 className={styles.stat_title}>My Skills</h4>
                    <div className={styles.skills}>
                        <div className={styles.tech_skills}>
                            <p className={styles.mini_title}>Technical Skills</p>
                            <div className={styles.sec}>
                                <div className={styles.icon_skill}>
                                    <div>Python</div>
                                    <DiPython size={70} />
                                </div>
                                <div className={styles.icon_skill}>
                                    <div>JavaScript</div>
                                    <IoLogoJavascript size={70} />
                                </div>
                                <div className={styles.icon_skill}>
                                    <div>Java</div>
                                    <DiJava size={70} />
                                </div>
                                <div className={styles.icon_skill}>
                                    <div>React.js</div>
                                    <DiReact size={70} />
                                </div>
                                <div className={styles.icon_skill}>
                                    <div>MongoDB</div>
                                    <DiMongodb size={70} />
                                </div>
                            </div>
                            <div className={styles.sec}>
                                <div className={styles.icon_skill}>
                                    <div>MySQL</div>
                                    <DiMysql size={70} />
                                </div>
                                <div className={styles.icon_skill}>
                                    <div>Firebase</div>
                                    <IoLogoFirebase size={70} />
                                </div>
                                <div className={styles.icon_skill}>
                                    <div>Android Dev</div>
                                    <DiAndroid size={70} />
                                </div>
                                <div className={styles.icon_skill}>
                                    <div>Github</div>
                                    <DiGithubBadge size={70} />
                                </div>
                                <div className={styles.icon_skill}>
                                    <div>CSS</div>
                                    <DiCss3 size={70} />
                                </div>
                            </div>
                            <div className={styles.sec}>
                                <div className={styles.icon_skill}>
                                    <div>HTML</div>
                                    <DiHtml5 size={70} />
                                </div>
                                <div className={styles.icon_skill}>
                                    <div>Heroku</div>
                                    <DiHeroku size={70} />
                                </div>
                                <div className={styles.icon_skill}>
                                    <div>Git</div>
                                    <DiGit size={70} />
                                </div>
                                <div className={styles.icon_skill}>
                                    <div>MS Office</div>
                                    <IoLogoMicrosoft size={70} />
                                </div>
                                <div className={styles.icon_skill}>
                                    <div>Vercel</div>
                                    <IoLogoVercel size={70} />
                                </div>
                            </div>
                            <p className={styles.mini_title}>Soft Skills</p>
                            <div className={styles.sec}>
                                <div className={styles.icon_skill}>
                                    <div>Management</div>
                                    <IoTimerOutline size={70} />
                                </div>
                                <div className={styles.icon_skill}>
                                    <div>Teamwork</div>
                                    <RiTeamLine size={70} />
                                </div>
                                <div className={styles.icon_skill}>
                                    <div>Diligence</div>
                                    <MdOutlineWorkHistory size={70} />
                                </div>
                                <div className={styles.icon_skill}>
                                    <div>Leadership</div>
                                    <MdLeaderboard size={70} />
                                </div>
                                <div className={styles.icon_skill}>
                                    <div>Communication</div>
                                    <MdCall size={70} />
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