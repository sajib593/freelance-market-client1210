

const Loading = () => {
    return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        <p className="mt-6 text-xl font-semibold tracking-wider animate-pulse">
          Loading...
        </p>
      </div>
    </div>
    );
};

export default Loading;