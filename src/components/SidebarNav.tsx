import { NavLink } from "react-router-dom";
import { Icons } from "../assets/icons";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: Icons.dashboard },
  { name: "Overview", path: "#", icon: Icons.overview },
  { name: "Chat", path: "#", icon: Icons.chat, notification: 5 },
  { name: "Team", path: "#", icon: Icons.team },
];

const shortcutItems = [
  { name: "Tasks", path: "#", icon: Icons.tasks },
  { name: "Reports", path: "#", icon: Icons.reports },
  { name: "Settings", path: "#", icon: Icons.settings },
];

function SidebarNav() {
  return (
    <div className="flex flex-col mt-6">
      <nav className="space-y-2">
        {navItems.map(({ name, path, icon: Icon, notification }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center justify-between rounded-lg transition duration-300 ${
                isActive ? "text-white" : "text-gray-400"
              }`
            }
          >
            <div className="flex gap-3">
              <img src={Icon} alt={name} />
              <span>{name}</span>
            </div>
            {notification ? (
              <span className="flex justify-center items-center h-5 w-5 rounded-full bg-[#FFA000] text-white p-1 text-xs">{notification}</span>
            ) : (
              ""
            )}
          </NavLink>
        ))}
      </nav>

      <nav className="space-y-2 mt-6">
        <p className="text-gray-400 text-sm font-semibold">SHORTCUT</p>

        {shortcutItems.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg transition duration-300 ${
                isActive ? "text-white" : "text-gray-400"
              }`
            }
          >
            <img src={Icon} alt={name} />
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default SidebarNav;
