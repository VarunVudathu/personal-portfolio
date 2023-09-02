import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import ThemeChange from "../components/ThemeChange";
import emailjs from 'emailjs-com';
import { FaLinkedin, FaGithub, FaInstagram, FaLocationArrow, FaEnvelope, FaUserGraduate, FaPhone, FaGlobeAsia } from "react-icons/fa";

export default function contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const temp_param = {
        "name": name,
        "email": email,
        "subject": subject,
        "message": message
    }

    const email_js_service = "service_s2io16n";
    const template_id = "template_1e0jv7h";
    const public_key = "mpwfG5LY2TApBDLT0";


    const sendEmail = () => {
        emailjs.send(
            email_js_service,
            template_id,
            temp_param,
            public_key
        ).then(() => {
            console.log("Message was sent");
        }), () => {
            console.log("Message was not sent");
        }
    }

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
                                    <a href="https://www.linkedin.com/in/varun-vudathu/" target="_blank">
                                        <FaLinkedin size={30} />
                                    </a>
                                    <a href="https://github.com/VarunVudathu" target="_blank">
                                        <FaGithub size={30} />
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <FaInstagram size={30} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right_contact}>
                            <div className={[styles.input_control, styles.i_c_2].join(" ")}>
                                <input type="text" required placeholder="YOUR NAME" onChange={(e) => { setName(e) }} />
                                <input type="email" required placeholder="YOUR EMAIL" onChange={(e) => { setEmail(e) }} />
                            </div>
                            <div className={styles.input_control}>
                                <input type="text" required placeholder="ENTER SUBJECT" onChange={(e) => { setSubject(e) }} />
                            </div>
                            <div className={styles.input_control}>
                                <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..." onChange={(e) => { setMessage(e) }}></textarea>
                            </div>
                            <div className={styles.submit_btn} onClick={sendEmail}>
                                <a className={styles.main_btn}>
                                    <span className={styles.btn_text}>Send</span>
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