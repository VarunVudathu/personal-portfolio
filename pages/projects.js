import React from "react";
import styles from "../styles/Projects.module.css";
import ThemeChange from "../components/ThemeChange";
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

export default function projects() {
  return (
    <div>
      <div className={[styles.container, styles.active].join(" ")}>
        <div className={styles.main_title}>
          <h2>My <span>Portfolio</span><br></br><span className={styles.bg_text}>My Work</span></h2>
        </div>
        <p className={styles.port_text}>
          Here are some of the projects I have compeleted using various programming languages and frameworks.
        </p>
        <div className={styles.portfolios}>
          <div className={styles.portfolio_item}>
            <div className={styles.image}>
              <Image src={"/shareplay.png"} width={500} height={100} />
            </div>
            <div className={styles.hover_items}>
              <h3>Shareplay</h3>
              <div className={styles.icons}>
                <a href="https://github.com/orgs/Shareplay-Team-B/repositories" className={styles.icon}>
                  <FaGithub size={50} className={styles.git}/>
                </a>
                <a href="https://shareplay-server-b.herokuapp.com" className={styles.icon}>
                  <RiComputerLine size={50} className={styles.git}/>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <div className={styles.image}>
              <Image src={"/webarcade.jpeg"} width={600} height={100} />
            </div>
            <div className={styles.hover_items}>
              <h3>Web Arcade</h3>
              <div className={styles.icons}>
                <a href="https://github.com/orgs/GTWebArcade/repositories" className={styles.icon}>
                  <FaGithub size={50} className={styles.git}/>
                </a>
                <a href="https://webarcade-webapp.herokuapp.com/" className={styles.icon}>
                  <RiComputerLine size={50} className={styles.git}/>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <div className={styles.image}>
              <Image src={"/vibha.jpg"} width={600} height={100} />
            </div>
            <div className={styles.hover_items}>
              <h3>Vibha Tutoring</h3>
              <div className={styles.icons}>
                <a href="https://github.com/rnachaloor/vibhaProject" className={styles.icon}>
                  <FaGithub size={50} className={styles.git}/>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <div className={styles.image}>
              <Image src={"/weather.png"} width={600} height={100} />
            </div>
            <div className={styles.hover_items}>
              <h3>Weather Forecast</h3>
              <div className={styles.icons}>
                <a href="https://github.com/orgs/GTWeatherForcast/repositories" className={styles.icon}>
                  <FaGithub size={50} className={styles.git}/>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <div className={styles.image}>
              <Image src={"/nd.png"} width={600} height={100} />
            </div>
            <div className={styles.hover_items}>
              <h3>Natural Disaster Prediction</h3>
              <div className={styles.icons}>
                <a href="https://github.com/rishiso/natural-disaster-prediction" className={styles.icon}>
                  <FaGithub size={50} className={styles.git}/>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <div className={styles.image}>
              <Image src={"/music.jpg"} width={600} height={100} />
            </div>
            <div className={styles.hover_items}>
              <h3>Music Mood Analyzer</h3>
              <div className={styles.icons}>
                <a href="https://github.com/VarunVudathu/music-mood-analyzer" className={styles.icon}>
                  <FaGithub size={50} className={styles.git}/>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <div className={styles.image}>
              <Image src={"/pm.png"} width={600} height={100} />
            </div>
            <div className={styles.hover_items}>
              <h3>FotoMind</h3>
              <div className={styles.icons}>
                <a href="https://github.com/FotoMind/smart-photo-management" className={styles.icon}>
                  <FaGithub size={50} className={styles.git}/>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <div className={styles.image}>
              <Image src={"/dungeon.png"} width={600} height={100} />
            </div>
            <div className={styles.hover_items}>
              <h3>Dungeon Game</h3>
              <div className={styles.icons}>
                <a href="https://github.com/tylerrcady/CS2340B_Team32" className={styles.icon}>
                  <FaGithub size={50} className={styles.git}/>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <div className={styles.image}>
              <p>More coming very soon</p>
            </div>
            <div className={styles.hover_items}>
              <h3>...</h3>
              <div className={styles.icons}>
                {/* <a href="#" className={styles.icon}>
                  <FaGithub size={50} className={styles.git}/>
                </a> */}
              </div>
            </div>
          </div>
          {/* <div className={styles.portfolio_item}>
            <div className={styles.image}>
              <img src="img/port1.jpg" alt="" />
            </div>
            <div className={styles.hover_items}>
              <h3>Project Source</h3>
              <div className={styles.icons}>
                <a href="#" className={styles.icon}>
                  <FaGithub size={50} className={styles.git}/>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <ThemeChange />
    </div>
  );
}