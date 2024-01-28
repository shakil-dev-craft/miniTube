import { Link } from "react-router-dom";

const Video = () => {
    return (
        <div>
            {/* thumnail */}
            <div className="relative">
                <Link to={`/videos/1`}>
                    <img src="https://i.ytimg.com/vi/GFgJkfScVNU/maxresdefault.jpg" alt="" className="w-full h-auto" />
                </Link>
                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-sm px-1 py-1 ">1:20:50 hr</p>
            </div>
            {/* video description */}
            <div className="mt-3 flex gap-4 items-center">
                <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="avatar" className="rounded-full h-8 w-8 shrink-0" />
                <div>
                    <Link to={`/videos/1`}>
                        <p className="text-slate-900 text-sm font-semibold">Video Title</p>
                    </Link>
                    <div className="flex gap-2">
                        <span className="text-gray-400 text-xs hover:text-gray-600">Andy Houng</span>
                        <span className="text-gray-400 text-xs hover:text-gray-600">150k views  <i className='text-green-600 bx bx-signal-4'></i> 15 January 2024</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;