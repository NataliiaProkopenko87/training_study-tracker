import {useEffect} from "react";
import useCourses from "./hooks/useCourses";
import Route from "./components/Route";
import DashboardPage from "./pages/DashboardPage"; 
import CoursesPage from "./pages/CoursesPage";
import StatisticsPage from "./pages/StatisticsPage";
import Layout from "./components/layout/Layout";




function App() {

  const {fetchCourses} = useCourses();

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);



   return (
      <Layout>
        <Route path="/">
        <DashboardPage />
        </Route>
        <Route path="/dashboard">
        <DashboardPage />
        </Route>
        <Route path="/courses">
        <CoursesPage />
        </Route>
        <Route path="/statistics">
        <StatisticsPage />
        </Route> 
        </Layout>           
      
  );
}


export default App;