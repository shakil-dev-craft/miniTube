import { useParams } from "react-router-dom";
import Player from "./Player";
import Description from "./Description";

const SingleVideo = () => {
    const {videoId} = useParams();
    console.log(videoId);

    return (
        <section className="pt-6 pb-20">
            <div className="max-w-7xl mx-auto px-2 md:px-5 lg:px-0 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-16">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        <Player />
                        <Description />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleVideo;