// components/ResponseChart.tsx

"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
    { time: "12:00", value: 0.1 },
    { time: "13:00", value: 0.28 },
    { time: "14:00", value: 0.25 },
    { time: "15:00", value: 0.2 },
];

export default function ResponseChart() {
    return (
        <LineChart width={300} height={150} data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" />
        </LineChart>
    );
}