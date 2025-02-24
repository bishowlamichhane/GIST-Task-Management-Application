import React from "react";
import styles from "./ProgressTracker.module.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import useStore from "../store/store";

const ProgressTracker = () => {
  const totalTasks = useStore((state) => state.totalTasks);
  const setTotalTasks = useStore((state) => state.setTotalTasks);

  const data01 = [
    { name: "Tasks", value: 300 },
    { name: "Doing", value: 300 },
    { name: "Done", value: 200 },
  ];
  const data02 = [
    { name: "Tasks", value: totalTasks },
    { name: "Doing", value: 3 },
    { name: "Done", value: 2 },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}></div>
      <div className={styles.rightContainer}>
        <div className={styles.progressChart}>
          <PieChart width={450} height={250}>
            <Pie
              data={data01}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#9fadbc"
            />
            <Pie
              data={data02}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </div>
        <div className={styles.progressReport}>
          <table
            style={{
              borderCollapse: "collapse",
              width: "50%",
              textAlign: "left",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Tasks
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Data
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Active Tasks:
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {totalTasks}
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Progress Tasks:
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  10
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Completed Tasks:
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  10
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
