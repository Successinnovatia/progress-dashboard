interface CourseProgressCardProps {
    progress: number;
    title: string;
    description: string;
    iconSrc: string;
    bgColor: string;
    progressTextColor:string;
  }
  
  const CourseProgressCard: React.FC<CourseProgressCardProps> = ({ progress, title, description, iconSrc, bgColor, progressTextColor }) => {
    return (
      <div className="flex items-center bg-white border border-gray-300 rounded-2xl p-4 w-full">
    
        <span className={`${progressTextColor} font-medium text-lg w-1/4 pl-4`}>{progress}%</span>
        
        
        <div className="flex items-center space-x-4 w-3/4">
          
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bgColor}`}>
            <img src={iconSrc} alt={title} className="w-5 h-5 filter brightness-0 invert" />
          </div>
  
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-500 text-sm">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CourseProgressCard;
  