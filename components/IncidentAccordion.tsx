"use client";

import { useState } from "react";

export default function IncidentAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const data = [
        {
            title: "API High Latency",
            status: "Completed",
            time: "Today 10:55 PM",
            desc: "The scheduled maintenance has been completed.",
        },
        {
            title: "Marketplace Checkout Error",
            status: "In Progress",
            time: "March 20, 10:22 PM",
            desc: "Investigating issue.",
        },
    ];

    return (
        <div className="bg-gray-50 rounded-xl p-3 space-y-2">
            {data.map((item, i) => (
                <div key={i} className="bg-white rounded-lg border">

                    {/* Header */}
                    <div
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="flex justify-between items-center p-3 cursor-pointer"
                    >
                        <h3 className="text-sm text-black font-medium">{item.title}</h3>
                        <span>{openIndex === i ? "▲" : "▼"}</span>
                    </div>

                    {/* Content */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ${
                            openIndex === i ? "max-h-40 p-3 pt-0" : "max-h-0"
                        }`}
                    >
                        <div className="text-xs text-gray-500">{item.time}</div>

                        <span
                            className={`inline-block text-xs px-2 py-1 rounded mt-1 ${
                                item.status === "Completed"
                                    ? "bg-green-100 text-green-600"
                                    : "bg-gray-200 text-gray-600"
                            }`}
                        >
              {item.status}
            </span>

                        <p className="text-sm text-black mt-2">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}