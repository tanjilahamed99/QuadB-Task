import { useState } from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useEffect } from "react";
import DisplayMovie from "../Components/DisplayMovie";

const Home = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {

        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setMovie(data))

    }, [])



    return (
        <div>
            <Navbar />
            <Banner />
            <div className="my-20">
                <h2 className="text-center text-3xl font-bold">Popular Movies</h2>
                <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        movie?.map((data, idx) => <DisplayMovie key={idx} data={data.show}></DisplayMovie>)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;