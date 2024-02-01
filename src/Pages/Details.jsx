import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Details = () => {

    const { id } = useParams()
    const [mainData, setMainData] = useState()


    useEffect(() => {

        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => {


                const allData = []
                data.map(i => allData.push(i))

                const mainData = allData.find((i) => i.show.id == id)
                setMainData(mainData.show)
            })

    }, [id])

    const handleMovieBooking = e => {
        e.preventDefault()
        const isExist = localStorage.getItem('movie')

        if (!isExist) {
            const data = JSON.stringify(mainData)
            localStorage.setItem('movie', data)
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
        }
        else if (isExist) {
            const newData = JSON.stringify(mainData)
            localStorage.setItem('movie', newData)
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });

        }
    }


    return (
        <div>
            <Navbar />
            <div className="my-20">
                <div className="hero my-10 w-full">
                    <div className="hero-content flex-col lg:flex-row w-full gap-5">
                        <div className="lg:w-[60%] w-full">
                            <img src={mainData?.image?.original} className=" h-[300px] md:h-[450px] lg:h-[550px] w-full rounded-lg shadow-2xl" />
                        </div>
                        <div className="lg:w-[40%] w-full">
                            <form onSubmit={handleMovieBooking} className="md:card-body space-y-3 w-full bg-[#f8f6f3]">
                                <div>
                                    <h2 className="bg-white p-2 lg:p-4 font-semibold text-lg">Movie Name : <span className="text-[#c19d68]">{mainData?.name}</span></h2>
                                </div>
                                <div>
                                    <h2 className="bg-white p-2 lg:p-4 font-semibold text-lg">language  : <span className="text-[#c19d68]">{mainData?.language}</span></h2>
                                </div>
                                <div>
                                    <h2 className="bg-white p-2 lg:p-4 font-semibold text-lg">status  : <span className="text-[#c19d68]">{mainData?.status}</span></h2>
                                </div>
                                <div>
                                    <h2 className="bg-white p-2 lg:p-4 font-semibold text-lg">Runtime : <span className="text-[#c19d68]">{mainData?.runtime} Min</span></h2>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline w-fit">Book Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-5 md:px-12 px-5 flex md:flex-row flex-col gap-20">
                <div className="lg:w-[60%]">
                    <h2 className="font-semibold ">{mainData?.genres[0]}</h2>
                    <h1 className="font-bold text-3xl  my-3">{}</h1>
                    {/* <p>{mainData?.summary}</p> */}
                    <div className="my-10 flex flex-col md:flex-row md:items-center gap-5 justify-between">
                        {/* <h2 className="font-semibold text-lg">Rating: {mainData?.rating}</h2> */}
                        
                    </div>
                </div>
                {/* <div className="md:w-[40%]">
                    <h2 className="font-semibold text-3xl">Amenities</h2>
                    <div className="mt-4 space-y-3">
                        <p className="text-lg font-semibold">{amenities[0]}</p>
                        <hr />
                        <p className="text-lg font-semibold">{amenities[1]}</p>
                        <hr />
                        <p className="text-lg font-semibold">{amenities[2]}</p>
                        <hr />
                        <p className="text-lg font-semibold">{amenities[3]}</p>
                    </div>
                </div> */}
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default Details;