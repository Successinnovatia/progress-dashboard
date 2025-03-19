import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion
import Profile1 from "../assets/images/profile-img.png";

const profiles = [
  {
    avatar: Profile1,
    name: "Jane Smith",
  },
  {
    avatar: Profile1,
    name: "Juno Devs",
  },
  {
    avatar: Profile1,
    name: "Alpha Tech",
  },
];

function SidebarCardBottom() {
  const [index, setIndex] = useState(0);

  const handleUp = () => {
    setIndex((prev) => (prev === 0 ? profiles.length - 1 : prev - 1));
  };

  const handleDown = () => {
    setIndex((prev) => (prev === profiles.length - 1 ? 0 : prev + 1));
  };

  return<div className="text-white rounded-lg py-2 flex items-center justify-between w-full overflow-hidden">
        
        <motion.div
          key={index} 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3"
        >
          
          <img src={profiles[index].avatar} alt={profiles[index].name} className="h-10 w-10"/>
          
          
          <div>
            <h3 className="font-semibold">{profiles[index].name}</h3>
          </div>
        </motion.div>
  
        
        <div className="flex flex-col">
          <button onClick={handleUp} className="text-white">
            <ChevronUp className="h-3 w-3" />
          </button>
          <button onClick={handleDown} className="text-white">
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>
      </div>
}

export default SidebarCardBottom;
