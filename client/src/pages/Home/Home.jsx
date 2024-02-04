import Search from "../../components/Search";
import { useGetVideosQuery } from "../../features/api/apiSlice";
import Video from "./Video";

const Home = () => {
    const {data: videos, isLoading, isError} = useGetVideosQuery();
    console.log(videos || {});
    console.log(isLoading);
    console.log(isError);

    return (
        <section className="pt-6 pb-10 max-w-7xl mx-auto">
            {/* category btn and search */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-2 mb-5 gap-4 px-0 md:px-2 lg:px-0">
                {/* category */}
                <div className="flex gap-2">
                    <button className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">All</button>
                    <button className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">React</button>
                    <button className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">Next JS</button>
                    <button className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">Tailwind CSS</button>
                </div>
                {/* search */}
                <Search />
            </div>
            {/* videos grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:px-0 px-5 min-h-[220px] md:min-h-[300px]">
                {
                    videos?.length > 0 ? (videos?.map((video, index) => <Video key={videos?.id || index} video={video} />)) 
                    : 
                    (<div>No Videos found!</div>)
                }
            </div>
        </section>
    );
};

export default Home;