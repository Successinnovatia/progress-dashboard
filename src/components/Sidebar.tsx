import Logo from "../assets/images/logo.svg";
import SidebarCardTop from "./SidebarCardTop";
import SidebarNav from "./SidebarNav";
import StorageCard from "./StorageCard";
import SidebarCardBottom from "./SidebarCardBottom";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className={`fixed top-0 left-0 z-10 h-full bg-primaryLight px-4 py-4 w-64 transition-transform duration-300 overflow-y-auto ${
        isOpen
          ? "translate-x-0"
          : "-translate-x-full"
      } md:static md:transition-none md:z-0 md:translate-x-0 md:block md:min-h-screen`}
    >
      <button onClick={onClose} className="absolute top-4 right-4 md:hidden">
        <X className="w-6 h-6 text-gray-400" />
      </button>


      <div className="mb-4">
        <img src={Logo} alt="Company Logo" className="" />
      </div>

      <hr className="text-gray-500 mb-6" />

      <SidebarCardTop />

      <SidebarNav />

      <div className="mt-auto">
        <StorageCard used={3.4} total={15} />
      </div>

      <hr className="text-gray-500 mt-6 mb-4" />

      <SidebarCardBottom />
    </aside>
  );
}

export default Sidebar;
