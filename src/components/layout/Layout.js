import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({children}) {
    return (<div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
        <Sidebar />
        <div className="flex flex-col flex-1">
            <Header />
            <div className="p-8">
                {children}
                </div>
        </div>
    </div>);   
}

export default Layout;