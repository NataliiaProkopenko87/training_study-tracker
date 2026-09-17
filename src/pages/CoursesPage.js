import { useState } from "react";
import useCourses from "../hooks/useCourses";
import CoursesCard from "../components/courses/CoursesCard";
import Button from "../components/common/Button";


function CoursesPage() {
    const { courses, createCourse } = useCourses();
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        title: "",
        totalLessons: "",
        completedLessons: ""
    });

    if(!courses || !Array.isArray(courses) || courses.length === 0) {
        return <div className="text-gray-500 p-8">Loading...</div>
    }
    
    const handleSubmit = () => {
    if(!form.title || !form.totalLessons) return;
    createCourse(form.title, Number(form.totalLessons), Number(form.completedLessons) || 0);
    setForm({
        title: "",
        totalLessons: "",
        completedLessons: ""
    });
    setShowForm(false);
    }

    return (
        <div className="flex flex-col gap-8">

            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Courses</h2>
                <Button onClick={() => setShowForm(!showForm)} variant="primary">
                    + Add Course
                </Button>
            </div>

            {showForm && (
                <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
                    <h3 className="text-lg font-semibold text-gray-800">New Course</h3>
                    <input className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
                    placeholder="Course Title"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                     />
                    <input className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
                    placeholder="Total Lessons"
                    type="number"
                    value={form.totalLessons}
                    onChange={(e) => setForm({ ...form, totalLessons: e.target.value })}
                     />
                    <input className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
                    placeholder="Completed Lessons"
                    value={form.completedLessons}
                    onChange={(e) => setForm({ ...form, completedLessons: e.target.value })}
                     />
                    <div className="flex gap-3">
                    <Button onClick={handleSubmit} variant="primary">
                        Save
                    </Button>
                    <Button onClick={() => setShowForm(false)} variant="secondary">
                        Cancel
                    </Button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course) => (
                    <CoursesCard key={course.id} course={course} />
                ))}
            </div>
                </div>
            );
        }  

export default CoursesPage;