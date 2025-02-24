import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPlusSquare } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { FiInbox } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineHelpOutline } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { CiViewBoard } from "react-icons/ci";
import { CiViewTable } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { FaAnglesUp } from "react-icons/fa6";
import TodoCard from "./TodoCard";
import DoingCard from "./DoingCard";
import ProgressTracker from "./ProgressTracker";
import useStore from "../store/store";
import DoneCard from "./DoneCard";

const Dashboard = () => {
  const [name, setName] = useState("Bishow Lamichhane");

  const createNewWorkspace = () => {};
  const taskArray = useStore((state) => state.taskArray);
  let totalTasks = taskArray.length;
  console.log(totalTasks);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <div className={styles.logo}>
            <p>GIST</p>
          </div>
          <div className={styles.buttons}>
            <li>
              <p>Workspace</p>
              <IoMdArrowDropdown />
            </li>
            <li>
              <p>Recents</p>
              <IoMdArrowDropdown />
            </li>
            <button onClick={createNewWorkspace}>
              Create New <FaPlusSquare />
            </button>
          </div>
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="[/] to seach" />
            <div>
              <IoSearchOutline />
            </div>
          </div>
          <div className={styles.notification}>
            <IoNotificationsCircleSharp className={styles.notiIcon} />
          </div>
          <div className={styles.profile}>
            <div className={styles.avatarContainer}></div>
          </div>
        </div>
      </div>

      <div className={styles.hero}>
        <div className={styles.sidebar}>
          <div className={styles.topSidebar}>
            <img src="/images/background.jpg" />
            <div>
              <p>User's Workspace</p>

              <IoMdArrowDropdown />
            </div>
          </div>
          <div className={styles.newSectionSidebar}>
            <div>
              <IoCreateOutline size={25} />
              <p>New Page</p>
            </div>
            <div>
              <FiInbox size={25} />
              <p>Inbox</p>
            </div>
          </div>
          <div className={styles.workspaceContainer}>
            <div className={styles.workspacesHeading}>
              <p>Other Workspaces</p>
              <div className={styles.workspaceSub}>
                <HiOutlineDotsHorizontal style={{ cursor: "pointer" }} />
                <GoPlus style={{ cursor: "pointer" }} />
              </div>
            </div>
            <div className={styles.workspaces}>No workspace available</div>
          </div>
          <div className={styles.privateContainer}>
            <div className={styles.privateHeading}>
              <p>Private</p>
              <HiOutlineDotsHorizontal style={{ cursor: "pointer" }} />
            </div>
            <div className={styles.privates}>
              <div>
                <FaRegCalendarAlt />
                <p>Calender</p>
              </div>
              <div>
                <IoSettingsOutline />
                <p>Settings</p>
              </div>
              <div>
                <MdOutlineHelpOutline />
                <p>Help</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.mainHeader}>
            <div className={styles.mainLeftHeader}>
              <input
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <div className={styles.favourites}>
                <CiStar size={25} style={{ cursor: "pointer" }} />
              </div>
              <div className={styles.viewStyles}>
                <button>
                  <CiViewBoard color="black" size={20} />
                  Board
                </button>

                <div>
                  <CiViewTable color="white" size={20} />
                  Table
                </div>
                <div>
                  <IoMdArrowDropdown size={25} style={{ cursor: "pointer" }} />
                </div>
              </div>
            </div>
            <div className={styles.mainRightHeader}>
              <div className={styles.filters}>
                <IoFilterOutline size={20} />
                Filters
              </div>
              <div className={styles.mainProfile}>
                <div className={styles.avatarContainer}></div>
                <FaAnglesUp size={10} className={styles.angleUps} />
              </div>
              <div className={styles.menu}>
                <HiOutlineDotsHorizontal size={25} />
              </div>
            </div>
          </div>
          <div className={styles.main}>
            <TodoCard />
            <DoingCard />
            <DoneCard />
          </div>
          {/* <div className={styles.progressTracker}>
            <ProgressTracker />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
