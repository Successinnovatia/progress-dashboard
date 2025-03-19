import React from "react";

interface TaskCardProps {
  icon: string;
  title: string;
  description: string;
  timeAgo: string;
  backgroundColor:string;
}

const TaskCard: React.FC<TaskCardProps> = ({ icon, title, description, timeAgo, backgroundColor }) => {
  return (
    <div className={`${backgroundColor} text-gray-900 rounded-2xl p-4 shadow-md w-1/2`}>
      
      <div className="flex items-center">
        <img src={icon} alt="Task Icon" className="w-6 h-6" />
      </div>

      
      <h2 className="text-lg font-semibold mt-2">{title}</h2>

      
      <p className="text-gray-500 text-sm">{description}</p>

      
      <p className="text-sm font-semibold mt-4">{timeAgo}</p>
    </div>
  );
};

export default TaskCard;
