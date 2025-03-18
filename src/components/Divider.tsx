
function Divider({text}:{text:string}) {
  return (
    <div className="flex items-center w-full">
      <div className="border-t border-gray-300 flex-1"></div>
      <span className="mx-4 text-gray-500 text-sm">{text}</span>
      <div className="border-t border-gray-300 flex-1"></div>
    </div>
  );
}

export default Divider;
