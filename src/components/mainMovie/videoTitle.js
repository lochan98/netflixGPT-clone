const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-16 m-2 pt-[16%] absolute w-screen aspect-video bg-gradient-to-r from-black text-white">
      <h1 className="my-2 font-bold  text-4xl">{title}</h1>
      <p className="text-lg  pt-4 w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white text-lg p-3 w-32 mx-1 rounded text-black hover:bg-opacity-80">
          ✅ Play
        </button>
        <button className="bg-gray-700 text-lg p-3 w-32 mx-1 rounded text-white hover:bg-opacity-80">
          More info!
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
