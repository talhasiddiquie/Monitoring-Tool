// components/Timeline.tsx

"use client";
import { Tooltip } from "@mui/material";

const events = [
    { type: "ok" },
    { type: "ok" },
    { type: "warning", label: "Latency Spike", time: "10:35 AM" },
    { type: "ok" },
    { type: "error" },
];

export default function Timeline() {
    return (
        <div className="flex gap-2 items-center">
            {events.map((e, i) => {
                let color = "bg-green-500";
                if (e.type === "warning") color = "bg-yellow-400";
                if (e.type === "error") color = "bg-red-500";

                const dot = (
                    <div
                        className={`w-3 h-3 rounded-full ${color} shadow`}
                    />
                );

                return e.label ? (
                    <Tooltip
                        key={i}
                        title={
                            <div className="text-xs">
                                <div>{e.time}</div>
                                <div className="text-yellow-400">{e.label}</div>
                            </div>
                        }
                        arrow
                    >
                        {dot}
                    </Tooltip>
                ) : (
                    <div key={i}>{dot}</div>
                );
            })}
        </div>
    );
}