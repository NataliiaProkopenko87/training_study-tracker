function ProgressBar({progress}) {
      

      return (  
        <div className="w-full">
        
        <div className="flex justify-between text-sm text-gray-500 mb-1">
           <span>{progress}%</span>
           </div>
           <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
          <div className="bg-blue-500 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>
        
        </div>
      );
};

export default ProgressBar;