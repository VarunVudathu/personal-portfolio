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
        "message": message,
    }


    const sendEmail = () => {
        if (name == "" || email == "" || subject == "" || message == "") {
            alert("Fill in all information!");
        } else {
            emailjs.send(
                process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                temp_param,
                process.env.NEXT_PUBLIC_PUBLIC_KEY
            ).then(() => {
                console.log("Message was sent");
            }), () => {
                console.log("Message was not sent");
            }
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
                                Thank you for taking a look at my portfolio. You can take a look at my other important websites for other info below. If you have any questions, send me an email through the service on the right. Thanks!
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