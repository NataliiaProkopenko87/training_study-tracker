import { useState } from "react";
import ProgressBar from '../common/ProgressBar';
import useCourses from "../../hooks/useCourses";
import Button from "../common/Button";

function CoursesCard({ course }) { 

    const {deleteCourse, updateCourse} = useCourses();
    const {id, title, totalLessons, completedLessons} = course;
    const progress = Math.round((completedLessons/totalLessons) * 100);
    const [isEditing, setIsEditing] = useState(false);
    const [form, setForm] = useState({title, totalLessons, completedLessons});

    const handleSave = () => {
        updateCourse(id, {
            title: form.title,
            totalLessons: Number(form.totalLessons),
            completedLessons: Number(form.completedLessons)
        });
        setIsEditing(false);
    };
    if(isEditing) {
        return ( 
<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
    <input 
    className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
    value={form.title}
    onChange={(e) => setForm({...form, title: e.target.value})}
    />
    <input
     className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
     placeholder="Total Lessons"
     type="number"
     value={form.totalLessons}
     onChange={(e) => setForm({...form, totalLessons: e.target.value})}
    />
    <input
     className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
        placeholder="Completed Lessons"
     type="number"
     value={form.completedLessons}
     onChange={(e) => setForm({...form, completedLessons: e.target.value})}
    />
    <div className="flex gap-3">
    <Button onClick={handleSave} variant="primary">Save</Button>
    <Button onClick={() => setIsEditing(false)} variant="secondary">Cancel</Button>
    </div>
</div>
        );
    }

    return(
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
                <ProgressBar progress={progress} />
                <p className="text-sm text-gray-500 dark:text-gray-400">{completedLessons} / {totalLessons} lessons</p>
                <div className="flex gap-3">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">Continue</Button>
                <Button onClick={() => setIsEditing(true)} variant="secondary">Edit</Button>
                <Button onClick={() => deleteCourse(id)} variant="danger">Delete</Button>
           </div>
            </div>

    );   
};

export default CoursesCard;