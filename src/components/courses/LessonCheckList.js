import { useState } from "react";
import useCourses from "../../hooks/useCourses";
import Button from "../common/Button";

function LessonCheckList({ course }) {
    const { updateCourse } = useCourses();
    const [newTopic, setNewTopic] = useState('');

    const handleToggle = (topicId) => {

        const updatedTopics = (course.topics || []).map((topic) => 
            topic.id === topicId ? { ...topic, done: !topic.done } : topic
        );

        const completedTopics = updatedTopics.filter((t) => t.done).length;
        
        const completedLessons = Math.round(
            (completedTopics / updatedTopics.length) * course.totalLessons
        );

        updateCourse(course.id, {
            ...course,
            topics: updatedTopics,
            completedLessons: completedLessons,
        });
    };
        
    const handleAddTopic = () => {
        if (!newTopic.trim()) return;
        const existingTopic = course.topics || [];
        const updatedTopics = [
            ...existingTopic,
            { id: Date.now(), label: newTopic, done: false }
        ];
        updateCourse(course.id, {...course, topics: updatedTopics});
        setNewTopic('');
        };

       return (
  <div className="flex flex-col gap-3">
    {course.topics && course.topics.length > 0 ? (
      course.topics.map((topic) => (
        <label key={topic.id} className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={topic.done}
            onChange={() => handleToggle(topic.id)}
            className="w-4 h-4 accent-blue-500"
          />
          <span className={`text-sm ${topic.done ? 'line-through text-gray-400' : 'text-gray-700'}`}>
            {topic.label}
          </span>
        </label>
      ))
    ) : (
      <p className="text-sm text-gray-400">No topics yet — add one below</p>
    )}

    <div className="flex gap-2 mt-2">
      <input
        className="border border-gray-300 rounded-lg px-3 py-1 text-sm flex-1"
        placeholder="Add new topic.."
        value={newTopic}
        onChange={(e) => setNewTopic(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTopic()}
      />
      <Button onClick={handleAddTopic} variant="primary">Add</Button>
    </div>
  </div>
);
    }

    export default LessonCheckList;
