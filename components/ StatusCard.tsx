"use client";

import { useState } from "react";
import StatusBadge from "./StatusBadge";
import Timeline from "./Timeline";
import IncidentAccordion from "./IncidentAccordion";

export default function StatusCard({
                                       title,
                                       status,
                                   }: {
    title: string;
    status: "Operational" | "Degraded" | "Outage";
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-sm border p-5 transition-all">

            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-lg text-black font-semibold">{title}</h2>
                <StatusBadge status={status} />
            </div>

            <p className="text-sm text-gray-400 mt-1">
                Last updated: 1 min ago
            </p>

            {/* Timeline */}
            <div className="mt-4">
                <Timeline />
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setOpen(!open)}
                className="text-blue-600 text-sm mt-4 font-medium hover:underline"
            >
                {open ? "Hide details ↑" : "View details →"}
            </button>

            {/* Accordion (Animated) */}
            <div
                className={`overflow-hidden transition-all duration-500 ${
                    open ? "max-h-[500px] mt-4" : "max-h-0"
                }`}
            >
                <IncidentAccordion />
            </div>
        </div>
    );
}