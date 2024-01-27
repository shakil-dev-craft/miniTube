
const Home = () => {
    return (
        <section className="pt-6 pb-20 max-w-7xl mx-auto">
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
                <div>Search</div>
            </div>
        </section>
    );
};

export default Home;