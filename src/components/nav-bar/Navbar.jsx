import { images } from "../../constant";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

import { UserMovies } from "../../moviescontext/moviescontext";
import { useContext } from "react";
import { useState } from "react";

function Navbar() {
    const { movies } = useContext(UserMovies);

    const [qeury, setQeury] = useState()

    // const filteredResults = movies.filter(item =>
    //     item.title.toLowerCase().includes(qeury.toLowerCase()) ||
    //     item.description.toLowerCase().includes(qeury.toLowerCase())
    // );


    return (
        <nav className=" bg-[#16151c] h-20 flex justify-evenly items-center border-gray-500 border-b-2">
            <div >
                <h1 className="text-white text-4xl">l movie</h1>

            </div>
            <div className="flex  gap-10 items-center text-[#3d3e45] ">
                <Link to={"/"}><a href="" className="hover:text-white">Home</a></Link>
                <a href="" className="hover:text-white">Tv Show</a>
                <Link to="/Movies/" ><a href="" className="hover:text-white">Movies</a></Link>
                <a href="" className="hover:text-white">New & Populor</a>
                <a href="" className="hover:text-white">My List</a>
            </div>
            <div className=" flex gap-2">
                <div className="flex items-center relative ">
                    <CiSearch className="absolute text-2xl text-gray-600 left-3" />
                    <input type="text" placeholder="search" onChange={(e) => setQeury(e.target.value)} className="bg-[#151823] pl-10 p-2 w-50 rounded-4xl text-gray-600" />
                </div>

                <div className="w-10 h-10  rounded-full">
                    <img src={images.profile} alt="" />
                </div>
            </div>
            {/* <ul style={styles.list}>
                {filteredResults.length > 0 ? (
                    filteredResults.map(item => (
                        <li key={item.id} style={styles.item}>
                            <strong>{item.title}</strong>
                            <p>{item.description}</p>
                        </li>
                    ))
                ) : (
                    <li style={styles.noResult}>No results found</li>
                )}
            </ul> */}
        </nav>
    );
}

export default Navbar;