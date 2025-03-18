

interface StorageCardProps {
  used: number;
  total: number;
}

const StorageCard: React.FC<StorageCardProps> = ({ used, total }) => {
  const percentage = (used / total) * 100;

  return (
    <div className="bg-[#342BC2] text-white rounded-2xl p-4 w-full mt-48">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Storage</h3>
        <button className="text-sm text-white/70 hover:text-white transition">
          Upgrade
        </button>
      </div>

      <p className="mt-2">
        {used} GB <span className="text-white/50 text-sm">of {total} GB</span>
      </p>

      <div className="w-full bg-white/20 h-1.5 rounded-full mt-3">
        <div
          className="bg-white h-1.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default StorageCard;
