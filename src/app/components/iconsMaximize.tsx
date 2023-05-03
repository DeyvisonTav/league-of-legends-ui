export function IconsMaximize() {
  return (
    <div className="flex flex-row gap-2">
      <button
        className="bg-red-500 h-4 w-4 rounded-full   
          hover:bg-red-600 transition-all duration-300 "
      ></button>
      <button
        className="bg-yellow-400 h-4 w-4 rounded-full 
          hover:bg-yellow-500 transition-all duration-300"
      ></button>
      <button
        className="bg-green-400 h-4 w-4 rounded-full 
          hover:bg-green-500 transition-all duration-300"
      ></button>
    </div>
  );
}
