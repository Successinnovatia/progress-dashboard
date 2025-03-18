import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
interface ProgressCardProps {
  title: string;
  course: string;
  progress: number;
  flag: string;
  link: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ title, course, progress, flag, link }) => {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-300 md:w-1/2">
      <p className="font-semibold text-gray-800">{title}</p>
      <div className="flex justify-between items-center mt-6">
        <h2 className="text-lg font-semibold">{course}</h2>
        <img src={flag} alt="Flag" className="w-8 h-8 rounded-full shadow-md" />
      </div>
      <div className="mt-4">
        <div className="h-2 bg-gray-300 rounded-full">
          <div className="h-full bg-primaryDark rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="mt-1 text-sm font-semibold">{progress}%</p>
      </div>


      <div className="flex justify-end mt-6 -mx-4 border-t border-t-gray-300 pt-4">
        <NavLink to={link} className="text-primaryLight font-medium flex justify-center items-center">
          Explore more <span className="ml-1 mr-3"><ChevronRight/></span>
        </NavLink>
      </div>
    </div>
  );
};

export default ProgressCard;
