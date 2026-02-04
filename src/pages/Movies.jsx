import { useContext } from "react";
import Navbar from "../components/nav-bar/Navbar";
import { UserMovies } from "../moviescontext/moviescontext";




import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";



function Movies() {

    const { movies } = useContext(UserMovies);
    return (
        <div className=" bg-[#16151c] flex flex-col gap-y-5  ">
            <Navbar />
            <div className=" bg-[#16151c]  flex justify-between p-10 ">
                <div className="flex items-center gap-2 ">
                    <FaCircle color="yellow"/>
                    <p className="text-white">comming son</p>
                </div>

                <div className="flex gap-2">
                    <CiCircleChevLeft className="text-4xl text-gray-600 hover:text-white" />
                    <CiCircleChevRight className="text-4xl text-gray-600 hover:text-white" />
                </div>
            </div>
            <div className="grid grid-cols-7 gap-4 grid-row-2 gap-y-10  ">
                {movies.map((item) => (
                    <div key={item.id} className="">
                        <div className="bg-gray-7000 rounded-lg h-84">

                            <Link to={`/details/${item.id}`}><img src={item.poster} alt="" className="m-full h-full object-cover rounded-lg" /></Link>
                            
                        </div>
                        <div className="mt-2  text-white h-6 w-20 rounded flex items-center gap-x-3">
                            <div className="flex items-center">
                                <FaStar/>
                            {item.rating}
                            </div>
                            
                            <div className="flex items-center gap-x-1">
                                {item.reviews} 
                                <p>reviews</p>
                            </div>
                        </div>
                        <div className="mt-2  text-white h-6 w-30 rounded flex">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;