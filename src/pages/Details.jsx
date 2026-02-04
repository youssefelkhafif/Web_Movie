import { Link, useParams } from "react-router-dom";
import Navbar from "../components/nav-bar/Navbar";
import { UserMovies } from "../moviescontext/moviescontext";
import { useContext } from "react";


import { FaStar } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";



function Details() {
    const { id } = useParams()
    const { movies } = useContext(UserMovies);
    const details = movies.find((p) => p.id === Number(id))

    if (!details) { <p className="text-black">movie not found</p> }

    return (
        <div className="w-screen h-screen bg-[#16151c] ">
            <Navbar />
            <div className="h-160 bg-[#16151c] p-10 flex gap-30">
                <div className="w-100 h-120 bg-amber-950">
                    <Link to={details.movie}><img src={details.poster} alt="" className="w-full h-full object-cover" /></Link>
                    

                </div>
                <div className="flex flex-col gap-y-5">
                    <div className="flex gap-10 items-center ">
                        <h1 className="text-5xl text-white">{details.title}</h1>
                        <div className="flex items-center gap-2">
                            <p className="text-white">{details.rating}</p>
                            <FaStar className="text-yellow-600" />
                        </div>
                    </div>
                    <div className="flex gap-2 text-gray-600">
                        <p>{details.year}</p>
                        <span>|</span>
                        <p>{details.duration}</p>
                        <span>|</span>
                        <p>{details.age}</p>
                    </div>
                    <div>
                        <p className="text-white">{details.description}</p>
                    </div>
                    <div>
                        <div className="flex gap-20 items-center">
                            <span className="text-gray-500">starring:</span>
                            <p className="text-white">{details.starring}</p>
                        </div>
                        <div className="flex gap-20 items-center ">
                            <span className="text-gray-500">created by:</span>
                            <p className="text-white">{details.director}</p>
                        </div>
                        <div className="flex gap-20 items-center">
                            <span className="text-gray-500">genre:</span>
                            <p className="text-white">{details.relatedMovies}</p>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <button
                            className="flex items-center gap-2 bg-white text-black 
               px-6 py-3 rounded-full font-semibold
               hover:bg-gray-200 transition"
                        >
                            <FaPlay className="w-4 h-4" />
                            Play
                        </button>



                        <button
                            className="flex items-center gap-2 bg-white/10 text-white 
               px-6 py-3 rounded-full font-semibold
               hover:bg-white/20 transition"
                        >
                            <FaDownload className="w-4 h-4" />
                            Télécharge
                        </button>
                    </div>
                </div>




            </div>
        </div>
    );
}

export default Details;

