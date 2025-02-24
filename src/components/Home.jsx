import React, { useState } from "react";
import styles from "./Home.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaSquareFull } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

const Home = () => {
  const navigate = useNavigate();
  const login = () => navigate("/login");
  const guest = () => {
    navigate("/dashboard");
  };

  const showMore = (id) => {
    const featuresId = document.getElementById(id);
    featuresId?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <p className={styles.logo}>GIST</p>
          <ul className={styles.navbar}>
            <li onClick={() => showMore("features")}>
              <p>Features</p>
              <IoMdArrowDropdown />
            </li>
            <li onClick={() => showMore("solutions")}>
              <p>Solutions</p>
              <IoMdArrowDropdown />
            </li>
            <li onClick={() => showMore("prices")}>
              <p>Prices</p>
              <IoMdArrowDropdown />
            </li>
            <li onClick={() => showMore("resources")}>
              <p>Resources</p>
              <IoMdArrowDropdown />
            </li>
          </ul>
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
          available with <a href="/premium">Premium Subscription.</a> Hurry Up!
        </p>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroImage}>
          <div className={styles.leftHero}>
            <div className={styles.heroText}>
              <p>GIST brings all your tasks, ideas, and tools together.</p>
            </div>
            <div className={styles.heroInput}>
              <input type="email" placeholder="Email" />
              <button>Sign up-it's free</button>
            </div>
          </div>
          <div className={styles.rightHero}>
            <img src="/images/overlayImage.webp" alt="Overlay" />
          </div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.features} id="features">
            <div className={styles.featuresHeader}>
              <FaSquareFull color="orange" />
              <p>Features</p>
            </div>
            <div className={styles.featuresContent}>
              <img src="/images/features.png" height={"500px"} />
              <div className={styles.featuresLists}>
                <ul style={{ listStyle: "square" }}>
                  <li>
                    <div>
                      <p style={{ fontSize: "22px" }}>To do List</p>
                    </div>
                    <p>
                      GIST provides an advanced to do list which tracks the
                      tasks and marks the completed tasks, helping users plan
                      their goals systematically.
                    </p>
                  </li>
                  <li>
                    <div>
                      <p style={{ fontSize: "22px" }}>Calender</p>
                    </div>
                    <p>
                      GIST offers a calender feature to schedule your tasks, get
                      a remainder about upcoming event and manage your
                      activities on time.
                    </p>
                  </li>
                  <li>
                    <div>
                      <p style={{ fontSize: "22px" }}>Progress Tracker</p>
                    </div>

                    <p>
                      GIST helps users track their progress and marking the
                      route of journey toward their goal. This helps users stay
                      motivated and execute their goals.
                    </p>
                  </li>
                  <li>
                    <div>
                      {" "}
                      <p style={{ fontSize: "22px" }}>
                        AI Assisted Activities planner
                      </p>
                    </div>

                    <p>
                      With a small price of $12.99/month, GIST provides an
                      awesome AI which helps users plan their goals and
                      activities keeping track of the current progress and
                      suggesting steps to execute the plans more effectively.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.solutions} id="solutions">
            <div className={styles.solutionsHeader}>
              <FaSquareFull color="orange" />
              <p>Solutions</p>
            </div>
            <div className={styles.solutionsContent}>
              <div className={styles.solutionsLists}>
                <li>Why use GIST?</li>
                <p className={styles.article}>
                  Regardless of your background, being able to manage your tasks
                  efficiently is a valuable professional trait. Developing the
                  right skills for improving task management can be important
                  for your career. It can show potential employers that you work
                  efficiently.
                  <a
                    href="https://www.indeed.com/career-advice/career-development/task-management-skills"
                    target="_blank"
                  >
                    {"   "}Importance of Task Management
                  </a>
                </p>
                <span>
                  GIST helps you boost your productivity by managing your tasks,
                  recording your progress, suggesting your next steps and
                  implementing a strategic plan to achieve those goals.{" "}
                </span>
              </div>
              <img src="/images/solutions.png" height={"500px"} />
            </div>
          </div>
          <div className={styles.prices} id="prices">
            <div className={styles.pricesHeader}>
              <FaSquareFull color="orange" />
              <p>Prices</p>
            </div>
            <div className={styles.pricesContainer}>
              <div className={styles.pricesCards}>
                <div className={styles.sideChicks}>
                  <div className={styles.cardHeader}>
                    <p>Free Account</p>
                    <div> Log in to explore these features</div>
                  </div>
                  <div className={styles.cardContainer}>
                    <ul>
                      <li>
                        <IoMdArrowDropright color="green" size={20} /> To-Do
                        List
                      </li>
                      <li>
                        <IoMdArrowDropright color="green" size={20} /> Calender
                      </li>
                      <li>
                        <IoMdArrowDropright color="green" size={20} /> Strategic
                        Planning
                      </li>
                      <li>
                        <IoMdArrowDropright color="green" size={20} /> Progress
                        Tracker
                      </li>
                    </ul>
                    <div>$0.0 /month</div>
                  </div>
                </div>
                <div className={styles.mainChick}>
                  <div className={styles.cardHeader}>
                    <p>Premium Account</p>
                    <div> AI Assisted Management </div>
                  </div>
                  <div className={styles.cardContainer}>
                    <ul>
                      <li>
                        <IoMdArrowDropright color="green" size={20} /> To-Do
                        List
                      </li>
                      <li>
                        <IoMdArrowDropright color="green" size={20} /> Calender
                      </li>
                      <li>
                        <IoMdArrowDropright color="green" size={20} /> Strategic
                        Planning
                      </li>
                      <li>
                        <IoMdArrowDropright color="green" size={20} /> Progress
                        Tracker
                      </li>
                    </ul>
                    <div>$4.99 /month</div>
                  </div>{" "}
                </div>
                <div className={styles.sideChicks}>
                  <div className={styles.cardHeader}>
                    <p>Guest Account</p>
                    <div> Viewing as Guest</div>
                  </div>
                  <div className={styles.cardContainer}>
                    <ul style={{ marginTop: "20px" }}>
                      <li>
                        <IoMdArrowDropright color="green" size={20} /> To-Do
                        List
                      </li>

                      <li>
                        <IoMdArrowDropright color="green" size={20} /> Strategic
                        Planning
                      </li>
                    </ul>
                    <div style={{ marginBottom: "20px" }}>Free</div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
