import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Video = ({video}) => {
    // console.log(video);
    // console.log(Object.keys(video));
    const {title, author, date, duration, views, thumbnail} = video;

    return (
        <div className="mb-5">
            {/* thumnail */}
            <div className="relative">
                <Link to={`/videos/1`}>
                    <img src={thumbnail} alt="" className="w-full h-auto" />
                </Link>
                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-sm px-1 py-1 ">{duration} hr</p>
            </div>
            {/* video description */}
            <div className="mt-3 flex gap-4 items-center">
                <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="avatar" className="rounded-full h-8 w-8 shrink-0" />
                <div>
                    <Link to={`/videos/1`}>
                        <p className="text-slate-900 text-sm font-semibold">{title}</p>
                    </Link>
                    <div className="flex gap-2">
                        <span className="text-gray-400 text-xs hover:text-gray-600">{author}</span>
                        <span className="text-gray-400 text-xs hover:text-gray-600">{views} views {date} <i className='text-green-600 bx bx-signal-4'></i> 15 January 2024</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

Video.propTypes = {
    video: PropTypes.object.isRequired,
};

export default Video;