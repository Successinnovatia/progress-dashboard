import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface ToolsCardProps {
  icon: string;
  title: string;
  subtitle: string;
  link: string;
}

function ToolsCard  ({ icon, title, subtitle, link }:ToolsCardProps)  {
  return (
    <NavLink
      to={link}
      className="flex items-center justify-between border border-gray-300  p-4 bg-white shadow rounded-lg hover:shadow-md transition duration-300 md:w-1/2"
    >
      <div className="flex items-center space-x-4">
        
        <div className="w-12 h-12 flex items-center justify-center bg-white shadow-md  rounded-full">
          <img src={icon} alt={title} className="w-6 h-6" />
        </div>

        
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
      </div>

      
      <ChevronRight className="text-primaryLight" />
    </NavLink>
  );
};

export default ToolsCard;
