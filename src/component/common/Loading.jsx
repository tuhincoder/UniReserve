

const Loading = () => {
    return (
        <div className="flex mx-auto h-screen justify-center items-center ">
            <div className=" w-12 h-12 "><div className="grid grid-cols-2 h-full w-full overflow-hidden shadow-lg rounded-full animate-spin"><span className="h-6 w-6 rounded-tl-full bg-transparent"></span><span className="h-6 w-6 rounded-tr-full bg-sky-500"></span><span className="h-6 w-6 rounded-bl-full bg-sky-500"></span><span className="h-6 w-6 rounded-br-full"></span></div></div>
        </div>
    );
};

export default Loading;