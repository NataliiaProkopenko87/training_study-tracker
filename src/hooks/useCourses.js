import {useContext} from "react";
import CoursesContext from "../context/CoursesContext";

function useCourses() {
    return useContext(CoursesContext);
}

export default useCourses;