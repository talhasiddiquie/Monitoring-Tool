// app/dashboard/page.tsx

import StatusCard from "../../components/ StatusCard";

export default function Dashboard() {
    return (
        <div className="bg-gray-100 min-h-screen">

            {/* Sticky Header */}
            <div className="sticky top-0 z-50 bg-white border-b px-6 py-4 flex justify-between items-center p-2">
                <h1 className="text-xl text-black font-semibold">PayPro</h1>

                <div className="flex items-center gap-2 text-green-600 font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    All Systems Operational
                </div>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-3">
                <StatusCard title="Marketplace" status="Operational" />
                <StatusCard title="Wallet" status="Operational" />
                <StatusCard title="API V1" status="Outage" />
                <StatusCard title="API V2" status="Degraded" />
                <StatusCard title="Mobile App" status="Operational" />
                <StatusCard title="Corporate Portal" status="Outage" />
            </div>
        </div>
    );
}