const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/p43bQh3/toni-lluch-Jo-Roy500n-Cc-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex-col-reverse md:flex-row justify-center text-neutral-content">
                <div className=" md:w-1/2  text-white">
                    <div className="mb-3">
                        <p>Top Trending</p>
                        <hr className="border-2 w-[90px] mt-1 " />
                    </div>
                    <h1 className="mb-5 lg:text-5xl text-3xl font-bold lg:leading-[60px]">
                        QuadB: Where Cinematic <span className="text-blue-200">Worlds Collide</span></h1>
                        
                    <p className="mb-5">QuadB is your ultimate destination for all things cinema. Dive into a vast library of movies, explore curated lists, and engage with fellow film enthusiasts. With reviews, recommendations, and exclusive content, QuadB is your ticket to cinematic bliss</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div className="md:w-1/3">
                </div>
            </div>
        </div>
    );
};

export default Banner;