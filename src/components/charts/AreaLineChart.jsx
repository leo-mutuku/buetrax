import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const uData = [1000, 1500, 2000, 2780, 2806, 2990, 3490];
const xLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function AreaLineChart() {
  return (
    <LineChart
      width={300}
      height={150}
      series={[{ data: uData, area: true, showMark: false }]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      sx={{
        ".MuiLineElement-root": {
          display: "none",
        },
      }}
    />
  );
}
