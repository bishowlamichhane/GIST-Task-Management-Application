import { useEffect, useRef, useState } from "react";
import styles from "./TodoCard.module.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import useStore from "../store/store";
import { MdOutlineDeleteForever } from "react-icons/md";

const TodoCard = () => {
  const lastTaskRef = useRef(null);
  const doneArray = useStore((state) => state.doneArray);
  const setDoneArray = useStore((state) => state.setDoneArray);
  const [newTask, setNewTask] = useState("");
  const taskRef = useRef(null);
  const taskArray = useStore((state) => state.taskArray);
  const setTaskArray = useStore((state) => state.setTaskArray);

  const deleteTask = (index) => {
    const updatedTasks = taskArray.filter((_, i) => i !== index);
    setTaskArray(updatedTasks);
  };

  useEffect(() => {
    if (lastTaskRef.current) {
      lastTaskRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [newTask]);

  const markDone = (index) => {
    const updatedTasks = [...taskArray];
    const taskToMove = updatedTasks.splice(index, 1)[0]; // Remove task from taskArray

    // Mark it as done before adding it to doneArray
    taskToMove.isDone = true;

    // Update taskArray and doneArray
    setTaskArray(updatedTasks);
    setDoneArray([...doneArray, taskToMove]);
  };

  const enterButton = (e) => {
    if (e.key === "Enter") addTask();
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTaskArray([...taskArray, { task: newTask, isDone: false }]);
      setNewTask("");
      taskRef.current.value = "";
    }
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
        {taskArray.length > 0
          ? taskArray.map((task, index) => (
              <li
                key={index}
                ref={index === taskArray.length - 1 ? lastTaskRef : null}
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
                      const updatedTasks = taskArray.map((t, i) =>
                        i === index ? { ...t, task: e.target.value } : t
                      );
                      setTaskArray(updatedTasks);
                    }}
                  />
                </div>
                <div className={styles.deleteButton}>
                  <MdOutlineDeleteForever onClick={() => deleteTask(index)} />
                </div>
              </li>
            ))
          : "Empty "}
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

export default TodoCard;
