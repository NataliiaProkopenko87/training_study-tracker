import useCourses from '../hooks/useCourses';
import CoursesCard from '../components/courses/CoursesCard';
import StatCard from '../components/common/StatCard';

function DashboardPage() {
    const {courses} = useCourses();
    const totalCourses = courses.length;
    const completedCourses = courses.filter(
        (course) => course.completedLessons === course.totalLessons).length;
    const totalCompletedLessons = courses.reduce((sum, course) => sum + course.completedLessons, 0);
    const totalLessons = courses.reduce(
        (sum, course) => sum + course.totalLessons, 0);
    const overallProgress = Math.round((totalCompletedLessons / totalLessons) * 100);

    return (
        <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard label="Total courses" value={totalCourses} />
      <StatCard label="Completed" value={completedCourses} />
      <StatCard label="Progress" value={`${overallProgress}%`} />
      <StatCard label="Lessons" value={totalLessons} />
</div>
      <h3 className="text-xl font-semibold text-gray-800">Courses</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{courses.map((course) => (
    <CoursesCard key={course.id} course={course} />  
))}
</div>
    </div>
    );
};

export default DashboardPage;