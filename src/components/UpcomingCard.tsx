import GroupImg1 from "../assets/images/group-img-1.png"
import GroupImg2 from "../assets/images/group-img-2.png"
import GroupImg3 from "../assets/images/group-img-3.png"



function UpcomingCard() {
  return (
    <div className="bg-primaryDark text-white rounded-2xl p-5 shadow-lg w-full md:w-1/2 max-w-md">
    
      <p className="text-sm uppercase opacity-80">
        <span className="font-semibold">Deadline</span> 12:00
      </p>

      
      <h2 className="text-2xl font-bold mt-1">Exam - Unit 5</h2>

      
      <p className="opacity-80 text-sm">Spanish for beginners</p>

      
      <div className="flex items-center mt-4 space-x-2">
        
        <img
          src={GroupImg1}
          alt="User 1"
          className="w-8 h-8 rounded-full border-2 border-white "
        />
        <img
          src={GroupImg2}
          alt="User 2"
          className="w-8 h-8 rounded-full border-2 border-white -ml-4"
        />
        <img
          src={GroupImg3}
          alt="User 3"
          className="w-8 h-8 rounded-full border-2 border-white -ml-4"
        />

        
        <div className="w-8 h-8 flex items-center justify-center bg-white text-blue-700 text-xs font-bold rounded-full border-2 border-white -ml-4">
          +99
        </div>
      </div>
    </div>
  );
}

export default UpcomingCard;
