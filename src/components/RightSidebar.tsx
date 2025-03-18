import ProfileCard from "./ProfileCard";
import DiscountCard from "./DiscountCard";
import CourseProgressCard from "./CourseProgressCard";
import userImage from "../assets/images/profile-img.png";
import grammarIcon from "../assets/icons/grammer-icon.svg";
import dictionaryIcon from "../assets/icons/paper-dictionary-icon.svg"
import readingIcon from "../assets/icons/dictionary-icon.svg"

function RightSidebar() {
  return (
    <section className="flex flex-col gap-3 bg-[#F5F5F5] min-h-screen w-80 my-4 py-4 px-4">
      <ProfileCard
        image={userImage}
        name="Harrison Philips"
        role="Business Analyst"
        notificationCount={5}
      />
      <DiscountCard
        discount={10}
        course="Spanish A2"
        link="/course/spanish-a2"
      />
      <CourseProgressCard
        progress={63}
        title="Grammar"
        description="Learn new rules"
        iconSrc={grammarIcon}
        bgColor="bg-primaryLight"
        progressTextColor="text-primaryLight"
      />

      <CourseProgressCard
        progress={78}
        title="Dictionary"
        description="Learn 4 new words"
        iconSrc={dictionaryIcon}
        bgColor="bg-[#FFA000]"
        progressTextColor="text-[#FFA000]"
      />

      <CourseProgressCard
        progress={34}
        title="Reading"
        description="Train your skill"
        iconSrc={readingIcon}
        bgColor="bg-[#EA4C89]"
        progressTextColor="text-[#EA4C89]"
      />
    </section>
  );
}

export default RightSidebar;
