import useCourses from "../hooks/useCourses";
import ProgressBar from "../components/common/ProgressBar";
import LessonCheckList from "../components/courses/LessonCheckList";

function StatisticsPage() {
    const { courses } = useCourses();

    if(!courses || !Array.isArray(courses) || courses.length === 0) {
        return <div className="text-gray-500 p-8">Loading...</div>
    }

    if(!courses || courses.length === 0) {
        return <div className="text-gray-500">
            Loading...
        </div>
    }
    return (
        <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-gray-800">Statistics</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    {course.title}
                    </h3>
                <ProgressBar progress={Math.round(
                    (course.completedLessons / course.totalLessons) * 100)} />
                <p className="text-sm text-gray-500">
                    {course.completedLessons} / {course.totalLessons} lessons
                </p>

            <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-3">Topics</p>
                        <LessonCheckList course={course} />
            </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default StatisticsPage;