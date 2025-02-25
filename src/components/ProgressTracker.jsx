import React, { useState, useEffect, useRef } from "react";
import styles from "./ProgressTracker.module.css";
import { CiSettings } from "react-icons/ci";
import PieChartWithCustomizedLabel from "./PieChart";
import useStore from "../store/store";
const ProgressTracker = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isTimerMode, setIsTimerMode] = useState(false); // Track whether it's timer or stopwatch mode
  const intervalId = useRef(null); // Ref to store the interval ID
  const [settings, setSettings] = useState(false);
  const [inputHours, setInputHours] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const start = () => {
    if (!intervalId.current) {
      // Prevent multiple intervals
      intervalId.current = setInterval(() => {
        if (isTimerMode) {
          // Timer mode logic
          if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(intervalId.current); // Stop when timer hits zero
            intervalId.current = null;
            setIsRunning(false);
          } else if (seconds === 0) {
            if (minutes > 0) {
              setMinutes((prev) => prev - 1);

              setSeconds(59); // Reset seconds to 59 when minute is decreased
            } else if (hours > 0 && minutes === 0) {
              setHours((prev) => prev - 1);
              setMinutes(59); // Reset minutes to 59 when hour is decreased
              setSeconds(59); // Reset seconds to 59
            }
          } else {
            setSeconds((prev) => prev - 1); // Count down seconds
          }
        } else {
          // Stopwatch mode logic
          setSeconds((prev) => prev + 1);
        }
      }, 1000);
      setIsRunning(true); // Track if the timer is running
    }
  };

  useEffect(() => {
    // Handle time overflow in stopwatch mode
    if (!isTimerMode) {
      if (seconds === 60) {
        setMinutes((prev) => prev + 1);
        setSeconds(0);
      }
      if (minutes === 60) {
        setHours((prev) => prev + 1);
        setMinutes(0);
      }
    }
  }, [seconds, minutes, isTimerMode]);

  const pause = () => {
    clearInterval(intervalId.current);
    intervalId.current = null; // Reset intervalId to allow resume
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
  };

  const openSettings = () => {
    setSettings(!settings);
  };

  const setTimer = () => {
    // Set the input values as the timer
    setHours(inputHours);
    setMinutes(inputMinutes);
    setSeconds(inputSeconds);
    setSettings(false); // Close the settings after setting
    setIsTimerMode(true); // Switch to timer mode
  };

  const taskArray = useStore((state) => state.taskArray);
  const doingArray = useStore((state) => state.doingArray);
  const doneArray = useStore((state) => state.doneArray);

  return (
    <div className={styles.container}>
      <div className={styles.timerContainer}>
        <div className={styles.timeSettings}>
          <CiSettings
            size={32}
            style={{ cursor: "pointer" }}
            onClick={openSettings}
          />
        </div>

        {settings ? (
          <div className={styles.settings}>
            <div>
              <p>Timer Settings</p>
              <div>
                <label>
                  Hours:
                  <input
                    type="number"
                    value={inputHours}
                    onChange={(e) => setInputHours(Number(e.target.value))}
                    style={{ width: "40px" }}
                  />
                </label>
                <label>
                  Minutes:
                  <input
                    type="number"
                    value={inputMinutes}
                    onChange={(e) => setInputMinutes(Number(e.target.value))}
                    style={{ width: "40px" }}
                  />
                </label>
                <label>
                  Seconds:
                  <input
                    type="number"
                    value={inputSeconds}
                    onChange={(e) => setInputSeconds(Number(e.target.value))}
                    style={{ width: "40px" }}
                  />
                </label>
                <button onClick={setTimer}>Set Timer</button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className={styles.timePlace}>
          <p>{String(hours).padStart(2, "0")}</p>
          <span>:</span>
          <p>{String(minutes).padStart(2, "0")}</p>
          <span>:</span>
          <p>{String(seconds).padStart(2, "0")}</p>
        </div>

        <div className={styles.timeButtons}>
          {!isRunning ? (
            <button onClick={start}>Start</button>
          ) : (
            <button onClick={pause}>Pause</button>
          )}
          <button onClick={reset}>Reset</button>
        </div>
      </div>
      <div className={styles.progressContainer}>
        <div>
          <PieChartWithCustomizedLabel className={styles.pieChart} />
        </div>
        <table border="1px" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "center", padding: "2px" }}>Active</th>
              <th style={{ textAlign: "center", padding: "2px" }}>Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: "center", padding: "2px" }}>Tasks</td>
              <td style={{ textAlign: "center", padding: "2px" }}>
                {taskArray.length}
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", padding: "2px" }}>
                InProgress
              </td>
              <td style={{ textAlign: "center", padding: "2px" }}>
                {doingArray.length}
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", padding: "2px" }}>Completed</td>
              <td style={{ textAlign: "center", padding: "2px" }}>
                {doneArray.length}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgressTracker;
