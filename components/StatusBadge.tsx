// components/StatusBadge.tsx

export default function StatusBadge({ status }: { status: string }) {
    const styles:any= {
        Operational: "bg-green-100 text-green-600 border-green-200",
        Degraded: "bg-yellow-100 text-yellow-600 border-yellow-200",
        Outage: "bg-red-100 text-red-600 border-red-200",
    };

    return (
        <span
            className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs border ${styles[status]}`}
        >
      <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
            {status}
    </span>
    );
}