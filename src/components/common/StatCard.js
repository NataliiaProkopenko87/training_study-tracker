function StatCard ({label, value}) {
    return(
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 md:p-6 flex flex-col gap-2">
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">{label}</p>
            <h2 className="text-2x1 md:text-3xl font-bold text-gray-800 dark:text-gray-100">{value}</h2>
        </div>
    );
}   

export default StatCard;