import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DisplayMovie = ({ data }) => {

    const { name, image, rating, genres, language, averageRuntime, summary,id } = data



    return (
        <div className="p-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-4 my-10 flex flex-col justify-center items-center mx-auto bg-white">
            <div className="relative group">
                <img className="w-[110px] h-[110px] bg-slate-500 object-cover rounded-full" src={image?.original
                } alt="" />

            </div>
            <div className="text-center space-y-1">
                <h1 className="text-2xl text-gray-700">{name}</h1>
                <p className="text-gray-400 text-sm">{genres[0]}</p>
            </div>
            <div className="flex justify-between w-full py-2">
                <div className="text-center space-y-1">
                    <p className="text-gray-500">Rating</p>
                    <p className="text-xl font-mono text-gray-700">{rating?.average}</p>
                </div>
                <div className="text-center space-y-1">
                    <p className="text-gray-500">Language</p>
                    <p className="text-xl font-mono text-gray-700">{language}</p>
                </div>
                <div className="text-center space-y-1 ">
                    <p className="text-gray-500">Runtime</p>
                    <p className="text-xl font-mono text-gray-700">{averageRuntime}</p>
                </div>
            </div>

            <p className="text-center text-sm text-gray-500 pb-2">{summary.slice(0, 100)}...</p>

            <Link className='w-full mx-auto flex justify-center' to={`/details/${id}`}>
                <button className="hover:bg-[#0095FF] hover:scale-95 font-medium hover:text-white w-[80%] py-2 rounded-full hover:shadow-xl   text-gray-400 shadow-[0px_0px_10px_#E2DADA] t duration-500">View Details</button>
            </Link>
        </div>
    );
};

DisplayMovie.propTypes = {
    data: PropTypes.object
};

export default DisplayMovie;