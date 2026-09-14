import {useContext} from "react";
import ThemeContext from "../../context/ThemeContext";
import useNavigation from "../../hooks/use-navigation";
import Button from "../common/Button";

function Header({userName = 'Leonardo'}) {
  const {isDark, toggleTheme} = useContext(ThemeContext);
  const {navigate} = useNavigation();

  return (
    <div className="w-full bg-white dark:bg-gray-800 shadow-sm px-8 py-4 flex items-center justify-between">

      <div className="flex items-center gap-4">
        <span className="text-gray-400 dark:text-gray-500 text-sm font-medium">Label</span>
        <span className="text-gray-800 dark:text-gray-100 font-semibold">Welcome, {userName}!</span>
      </div>

      <div className="flex items-center gap-4">
        <Button 
          onClick={() => navigate('/courses')}
          variant="primary"
        >
          +Add Course
        </Button>
        <Button 
          onClick={toggleTheme}
          variant="secondary"
       >
        {isDark ? '☀️Light Mode' : '🌑Dark Mode'}
       </Button>
      </div>
    </div>
  );
}
export default Header;