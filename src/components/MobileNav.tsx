import { useState } from "react";
import { Search } from "lucide-react";
import Sidebar from "./Sidebar"; 
import flagImage from "../assets/icons/british-flag.svg"
import profileImage from "../assets/images/avatar.png"
import menuBtn from "../assets/icons/menu-btn.svg"




const MobileNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between p-4 bg-white shadow-sm">
      
      <div className="flex items-center space-x-4">
        
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="focus:outline-none">
        <img src={menuBtn} alt="menu" className="w-8 h-8 text-gray-600"/>
        </button>


        <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="focus:outline-none">
          <Search className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      
      <div className="flex items-center space-x-4">
        <img src={flagImage} alt="Language" width={30} height={20} className="rounded-md" />
        <img src={profileImage} alt="Profile" width={36} height={36} className="rounded-full object-cover" />
      </div>

      
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      
      {isSearchOpen && (
        <div className="absolute top-14 left-4 right-4 bg-white shadow-md p-2 rounded-md flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
