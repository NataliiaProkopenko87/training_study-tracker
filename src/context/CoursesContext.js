 import { createContext, useState, useCallback } from "react";
 import axios from "axios";

 const CoursesContext = createContext();

 function Provider({ children }) {

    const [courses, setCourses] = useState([]);

         const fetchCourses = useCallback(async () => {
            const response = await axios.get("https://study-tracker-api-gkpc.onrender.com/courses");
            setCourses(response.data);
         }, []);

         const createCourse = async (title, totalLessons, completedLessons) => {
              const response = await axios.post("https://study-tracker-api-gkpc.onrender.com/courses", 
                { title, totalLessons, completedLessons });
              
              setCourses([...courses, response.data]);
         };

         const updateCourse = async (id, updatedCourse) => {
              const response = await 
              axios.put(`https://study-tracker-api-gkpc.onrender.com/courses/${id}`, 
                updatedCourse);
              setCourses(courses.map((course) => (course.id === id ? response.data : course)));
         };

         const deleteCourse = async (id) => {
                await axios.delete(`https://study-tracker-api-gkpc.onrender.com/courses/${id}`);
                setCourses(courses.filter((course) => course.id !== id));
         }

         const valueToShare = {
            courses,
            fetchCourses,
            createCourse,
            updateCourse,
            deleteCourse
         };

         return (
           <CoursesContext.Provider value={valueToShare}>
             {children}
           </CoursesContext.Provider>
         );
       }
       
       export {Provider};
       export default CoursesContext;