import {createContext  } from "react";
import { comingSoonMovies } from "../constant";

export const UserMovies = createContext()

export const UserProvider = ({children}) => {

        return (
        <UserMovies.Provider value={{movies: comingSoonMovies }}>
            {children}
        </UserMovies.Provider>
    )

}