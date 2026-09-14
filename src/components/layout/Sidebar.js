import Link from "../Link";

function Sidebar() {

const links = [
    {label: 'Dashboard' , path: '/'},
    {label: 'Courses' , path: '/courses'},
    {label: 'Statistics' , path: '/statistics'},
];   

const renderedLinks = links.map((link) => {
    return (
        <Link
            key={link.path}
            to={link.path}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
            activeClassName="text-blue-600 font-semibold bg-blue-50 dark:bg-gray-700"
        >
            {link.label}
        </Link>
    );
});

    return (
        <div className="w-64 min-h-screen bg-white dark:bg-gray-800 shadow-md flex flex-col p-6 gap-8">
                <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2x1">
                    👤
                </div>
                <p className="text-gray-700 font-medium">John Doe</p>
                </div>

            <nav className="flex flex-col gap-1">
{renderedLinks}
            </nav>

            <div className="flex flex-col gap-1">
<p className="text-xs text-gray-400  dark:text-gray-500 font-semibold uppercase tracking-widest px-4 mb-1">Account</p>
<Link to="/profile" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors" activeClassName="text-blue-600 font-semibold bg-blue-50 dark:bg-gray-700">Profile</Link>
<Link to="/settings" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors" activeClassName="text-blue-600 font-semibold bg-blue-50 dark:bg-gray-700">Settings</Link>
            </div>

            <button className="mt-auto text-red-400 hover:text-red-600 hover:bg-red-50 py-2 px-4 rouded-lg transition-colors text-left">Logout</button>
        </div>
    );
};
export default Sidebar;