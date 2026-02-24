const Loading = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center bg-white/80 backdrop-blur-sm fixed inset-0 z-[999]">
      <div className="flex flex-col items-center gap-6">
        {/* Main Spinner Container */}
        <div className="relative w-20 h-20">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>

          {/* Animated Spinning Ring */}
          <div className="absolute inset-0 border-4 border-t-[#890c25] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>

          {/* Pulsing Inner Circle */}
          <div className="absolute inset-4 bg-[#890c25]/10 rounded-full animate-ping"></div>

          {/* Center Icon or Dot */}
          <div className="absolute inset-[30px] bg-[#890c25] rounded-full shadow-lg shadow-[#890c25]/40"></div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-1">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#890c25] animate-pulse">
            Processing
          </p>
          <div className="flex gap-1 justify-center">
            <span className="w-1 h-1 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-1 h-1 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-1 h-1 bg-gray-300 rounded-full animate-bounce"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
