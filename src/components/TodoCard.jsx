import { useState } from "react";
import styles from "./TodoCard.module.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

const TodoCard = () => {
  const [isDone, setIsDone] = useState(false);
  const [newTask, setNewTask] = useState(1);
  const markDone = () => {
    setIsDone(!isDone);
  };
  const [taskArray, setTaskArray] = useState(["Host a Meeting"]);
  const addTask = (taskName) => {
    setTaskArray([...taskArray, taskName]);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>To Do</p>
        <div>
          <HiOutlineDotsHorizontal size={25} style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div className={styles.taskLists}>
        {taskArray.map((task, index) => (
          <li>
            <div className={styles.checkMark}>
              {isDone ? (
                <FaCheckCircle size={20} onClick={markDone} />
              ) : (
                <CiCircleCheck size={25} onClick={markDone} />
              )}
            </div>
            <div className={styles.task}>
              <input value={task} onChange={(e) => setTask(e.target.value)} />
            </div>
          </li>
        ))}
      </div>
      <div className={styles.addTask}>
        <div className={styles.addButton} onClick={() => addTask(taskName)}>
          <FaPlus size={15} style={{ cursor: "pointer" }} />
          <p>Add new Task</p>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
