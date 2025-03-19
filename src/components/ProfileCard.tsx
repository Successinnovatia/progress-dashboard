interface ProfileCardProps {
    image: string;
    name: string;
    role: string;
    notificationCount?: number;
  }
  
  const ProfileCard: React.FC<ProfileCardProps> = ({ image, name, role, notificationCount }) => {
    return (
      <div className="flex flex-col items-center text-center p-4">
        
        <div className="relative">
          <img src={image} alt={name} className="w-24 h-24 rounded-full border-4 border-white shadow-md" />
          {notificationCount !== undefined && notificationCount > 0 && (
            <span className="absolute bottom-0 right-2 bg-primaryDark text-white text-sm font-semibold w-6 h-6 flex items-center justify-center rounded-full shadow">
              {notificationCount}
            </span>
          )}
        </div>
  
    
        <h3 className="mt-3 text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    );
  };
  
  export default ProfileCard;
  