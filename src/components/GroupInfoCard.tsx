import { Bell, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const GroupInfoCard = () => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 md:w-1/2">
      
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-gray-900">Group info</h3>
          <p className="text-sm text-gray-500">13 students in the group</p>
        </div>
        <Bell className="w-5 h-5 text-gray-600" />
      </div>

      
      <div className="bg-secondaryOrange text-white p-4 mt-4 rounded-lg flex justify-between items-center">
        <div>
          <h4 className="font-semibold">Group homework</h4>
          <p className="text-sm">4 students from your group online now</p>
        </div>
        <NavLink to="#">
          <ChevronRight />
        </NavLink>
      </div>

      
      <div className="mt-4">
        <h4 className="font-semibold text-gray-900">Today's lesson</h4>
        <p className="text-sm text-gray-500">unit 6 - Article</p>
      </div>
    </div>
  );
};

export default GroupInfoCard;
