import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion"; 

const teams = [
  {
    initials: "DW",
    name: "Dlex Designs",
    role: "general team",
    color: "bg-yellow-400",
  },
  {
    initials: "JD",
    name: "Juno Devs",
    role: "frontend team",
    color: "bg-green-400",
  },
  {
    initials: "AT",
    name: "Alpha Tech",
    role: "backend team",
    color: "bg-blue-400",
  },
];

const SidebarCardTop = () => {
  const [index, setIndex] = useState(0);

  const handleUp = () => {
    setIndex((prev) => (prev === 0 ? teams.length - 1 : prev - 1));
  };

  const handleDown = () => {
    setIndex((prev) => (prev === teams.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#4A4DE6] text-white rounded-lg p-4 flex items-center justify-between w-full overflow-hidden">
      
      <motion.div
        key={index} 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-3"
      >
        
        <div
          className={`w-10 h-10 ${teams[index].color} text-black font-bold rounded-full flex items-center justify-center`}
        >
          {teams[index].initials}
        </div>
        
        
        <div>
          <h3 className="font-semibold">{teams[index].name}</h3>
          <p className="text-gray-400 text-sm">{teams[index].role}</p>
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
  );
};

export default SidebarCardTop;
