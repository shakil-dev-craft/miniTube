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
                        <p>Video Title</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Video;