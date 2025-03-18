import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface DiscountCardProps {
  discount: number;
  course: string;
  link: string;
}

const DiscountCard: React.FC<DiscountCardProps> = ({ discount, course, link }) => {
  return (
    <div className="flex items-center justify-between bg-white border border-gray-300 rounded-2xl p-4 w-full">
      <div>
        <h3 className="text-lg font-semibold">Get - {discount}% sell price</h3>
        <p className="text-gray-500">for <span className="font-medium">"{course}"</span> course</p>
      </div>
      <NavLink to={link} className="text-blue-600">
        <ChevronRight />
      </NavLink>
    </div>
  );
};

export default DiscountCard;
