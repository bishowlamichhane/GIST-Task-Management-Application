import * as React from "react";

import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import useStore from "../store/store";

export default function PieChartWithCustomizedLabel() {
  const taskArray = useStore((state) => state.taskArray);
  const doingArray = useStore((state) => state.doingArray);
  const doneArray = useStore((state) => state.doneArray);
  const data = [
    {
      label: "Active Tasks",
      value: taskArray.length,
      color: "rgba(255, 0, 0, 0.781)",
    },
    {
      label: "Doing Tasks",
      value: doingArray.length,
      color: "rgba(255, 238, 0, 0.83)",
    },
    {
      label: "Done Tasks",
      value: doneArray.length,
      color: "rgba(74, 255, 89, 0.781)",
    },
  ];

  const sizing = {
    margin: { right: 5 },
    width: 300,
    height: 300,
    legend: { hidden: true },
  };
  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };

  return (
    <PieChart
      series={[
        {
          outerRadius: 60,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontSize: 12,
        },
      }}
      {...sizing}
    />
  );
}
