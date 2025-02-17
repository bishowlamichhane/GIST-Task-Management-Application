import React from "react";
import styles from "./Home.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  const guest = () => {
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <p className={styles.logo}>GIST</p>
          <div className={styles.navbar}>
            <li className={styles.features}>
              <p>Features</p>
              <IoMdArrowDropdown />
            </li>
            <li>
              <p>Solutions</p>
              <IoMdArrowDropdown />
            </li>
            <li>
              <p>Prices</p>
              <IoMdArrowDropdown />
            </li>
            <li>
              <p>Resources</p>
              <IoMdArrowDropdown />
            </li>
          </div>
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.login} onClick={login}>
            Login
          </div>
          <div className={styles.guest} onClick={guest}>
            Guest
          </div>
        </div>
      </div>

      <div className={styles.shortLink}>
        <p>
          Chase your Goals whilst tracking them strategically. AI features
          available with <a href="/premium">Premium Subscription.</a> Hurry Up !
        </p>
      </div>
      <div className={styles.hero}>
        <div className={styles.heroImage}>
          <div className={styles.leftHero}>
            <div className={styles.heroText}>
              <p>GIST brings all your, tasks, ideas, and tools together.</p>
            </div>
            <div className={styles.heroInput}>
              <input type="email" placeholder="Email" />
              <button>Sign up-it's free</button>
            </div>
          </div>
          <div className={styles.rightHero}>
            <img src="/images/overlayImage.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
