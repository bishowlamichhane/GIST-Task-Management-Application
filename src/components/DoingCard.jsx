import { useEffect, useRef, useState } from "react";
import styles from "./DoingCard.module.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import useStore from "../store/store";
import { MdOutlineDeleteForever } from "react-icons/md";

const DoingCard = () => {
  const lastTaskRef = useRef(null);

  const [newTask, setNewTask] = useState("");
  const taskRef = useRef(null);
  const doingArray = useStore((state) => state.doingArray) || [];
  const setDoingArray = useStore((state) => state.setDoingArray);

  const deleteTask = (index) => {
    const updatedTasks = doingArray.filter((_, i) => i !== index);
    setDoingArray(updatedTasks);
  };

  useEffect(() => {
    if (lastTaskRef.current) {
      lastTaskRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [newTask]);

  const markDone = (index) => {
    const updatedTasks = [...doingArray];
    updatedTasks[index].isDone = !updatedTasks[index].isDone;
    setDoingArray(updatedTasks);
  };

  const enterButton = (e) => {
    if (e.key === "Enter") addTask();
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setDoingArray([...doingArray, { task: newTask, isDone: false }]);
      setNewTask("");
      taskRef.current.value = "";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Doing</p>
        <div>
          <HiOutlineDotsHorizontal size={25} style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div className={styles.taskLists}>
        {doingArray.length > 0
          ? doingArray.map((task, index) => (
              <li
                key={index}
                ref={index === doingArray.length - 1 ? lastTaskRef : null}
              >
                <div
                  className={`${styles.checkMark} ${
                    task.isDone ? styles.visible : ""
                  }`}
                >
                  {task.isDone ? (
                    <FaCheckCircle size={20} onClick={() => markDone(index)} />
                  ) : (
                    <CiCircleCheck size={25} onClick={() => markDone(index)} />
                  )}
                </div>
                <div className={styles.task}>
                  <input
                    className={`${task.isDone ? styles.taskDone : ""}`}
                    value={task.task}
                    onChange={(e) => {
                      const updatedTasks = doingArray.map((t, i) =>
                        i === index ? { ...t, task: e.target.value } : t
                      );
                      setDoingArray(updatedTasks);
                    }}
                  />
                </div>
                <div className={styles.deleteButton}>
                  <MdOutlineDeleteForever onClick={() => deleteTask(index)} />
                </div>
              </li>
            ))
          : "Empty"}
      </div>
      <div className={styles.addTask}>
        <div className={styles.addButton}>
          <FaPlus size={15} style={{ cursor: "pointer" }} onClick={addTask} />
          <input
            type="text"
            ref={taskRef}
            placeholder={"Add new Task"}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={enterButton}
          />
        </div>
      </div>
    </div>
  );
};

export default DoingCard;
