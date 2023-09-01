import React from "react";
import styles from "../styles/Contact.module.css";
import ThemeChange from "../components/ThemeChange";
import { FaLinkedin, FaGithub, FaInstagram, FaLocationArrow, FaEnvelope, FaUserGraduate, FaPhone, FaGlobeAsia } from "react-icons/fa";

export default function contact() {
    return (
        <div>
            <div className={[styles.container, styles.active].join(" ")}>
                <div className={styles.contact_container}>
                    <div className={styles.main_title}>
                        <h2>Contact <span>Me</span></h2>
                    </div>
                    <div className={styles.contact_content_con}>
                        <div className={styles.left_contact}>
                            <h4>Contact me here</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                In, laborum numquam? Quam excepturi perspiciatis quas quasi.
                            </p>
                            <div className={styles.contact_info}>
                                <div className={styles.contact_item}>
                                    <div className={styles.icon}>
                                        <FaLocationArrow size={25} />
                                        <span>Location: </span>
                                    </div>
                                    <span>Atlanta, Georgia, USA</span>
                                </div>
                                <div className={styles.contact_item}>
                                    <div className={styles.icon}>
                                        <FaEnvelope size={25} />
                                        <span>Email: </span>
                                    </div>
                                    <span>vvudathu3@gatech.edu</span>
                                </div>
                                <div className={styles.contact_item}>
                                    <div className={styles.icon}>
                                        <FaUserGraduate size={25} />
                                        <span>Education: </span>
                                    </div>
                                    <span>Georgia Tech</span>
                                </div>
                                <div className={styles.contact_item}>
                                    <div className={styles.icon}>
                                        <FaPhone size={25} />
                                        <span>Mobile Number: </span>
                                    </div>
                                    <span>+1 (678) 427 - 5331</span>
                                </div>
                                <div className={styles.contact_item}>
                                    <div className={styles.icon}>
                                        <FaGlobeAsia size={25} />
                                        <span>Languages: </span>
                                    </div>
                                    <span>English, Telugu, Spanish</span>
                                </div>
                            </div>
                            <div className={styles.contact_icons}>
                                <div className={styles.contact_icon}>
                                    <a href="www.facebook.com" target="_blank">
                                        <FaLinkedin size={30} />
                                    </a>
                                    <a href="#" target="_blank">
                                        <FaGithub size={30} />
                                    </a>
                                    <a href="#" target="_blank">
                                        <FaInstagram size={30} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right_contact}>
                            <form action="" className={styles.contact_form}>
                                <div className={[styles.input_control, styles.i_c_2].join(" ")}>
                                    <input type="text" required placeholder="YOUR NAME" />
                                    <input type="email" required placeholder="YOUR EMAIL" />
                                </div>
                                <div className={styles.input_control}>
                                    <input type="text" required placeholder="ENTER SUBJECT" />
                                </div>
                                <div className={styles.input_control}>
                                    <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                                </div>
                                <div className={styles.submit_btn}>
                                    <a className={styles.main_btn}>
                                        <span className={styles.btn_text}>Send</span>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ThemeChange />
        </div>
    );
}