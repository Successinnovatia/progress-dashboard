import DashboardLayout from "../layouts/DashboardLayout";
import UpcomingCard from "../components/UpcomingCard";
import TaskCard from "../components/TaskCard";
import CheckOrange from "../assets/icons/check-orange.svg";
import CheckBlue from "../assets/icons/check-blue.svg";
import GermanyFlag from "../assets/icons/germany-flag.svg";
import GrammerIcon from "../assets/icons/grammer-icon.svg"
import DictionaryIcon from "../assets/icons/dictionary-icon.svg"
import GroupInfoCard from "../components/GroupInfoCard";
import ProgressCard from "../components/ProgressCard";
import ToolsCard from "../components/ToolsCard";


function Dashboard() {
  return (
    <DashboardLayout>
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Progress Dashboard</h1>

        <div className="flex flex-col md:flex-row md:space-y-0 gap-3">
          <UpcomingCard />

          <div className="flex gap-3 md:w-1/2">
            <TaskCard
              icon={CheckOrange}
              title="Homework"
              description="For today's lesson"
              timeAgo="35 MIN AGO"
              backgroundColor="bg-secondaryLight"
            />

            <TaskCard
              icon={CheckBlue}
              title="Reading"
              description="24 words per week"
              timeAgo="2H AGO"
              backgroundColor="bg-secondaryBlue"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <GroupInfoCard />
          <ProgressCard
            title="Overall progress"
            course="Germany for beginners"
            progress={75}
            flag={GermanyFlag}
            link="#"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <ToolsCard
            icon={GrammerIcon}
            title="Grammer"
            subtitle="+30 grammer rules"
            link="#"
          />

          <ToolsCard
            icon={DictionaryIcon}
            title="Dictionary"
            subtitle="+10 new words"
            link="#"
          />
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;
