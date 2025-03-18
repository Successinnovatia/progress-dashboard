import MobileNav from "../components/MobileNav";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-[auto_1fr_auto] md:grid-rows-[auto_1fr]">
      {/* Mobile Navbar (Only visible on mobile) */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50">
        <MobileNav />
      </div>

      {/* Sidebar - Hidden on mobile */}
      <aside className="md:block">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <main className="p-4 mt-16 md:mt-6">{children}</main>

      {/* Right Sidebar - Hidden on mobile */}
      <aside className="hidden xl:block">
        <RightSidebar />
      </aside>
    </div>
  );
};

export default DashboardLayout;
