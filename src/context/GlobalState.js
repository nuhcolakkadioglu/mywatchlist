import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";
export const GlobalContext = createContext();

const initialState = {
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
    watched: [],
}

export const GlobalPrivider = (props) => {

    const [state, dispathc] = useReducer(AppReducer, initialState);
    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
    }, [state]);

    const addMovieToWatchList = (movie) => {
        dispathc({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    }

    const removeMovieFromWatchList = (id) => {
        dispathc({ type: "REMOVE_MOVIE_TO_WATCHLIST", payload: id });
    }


    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            addMovieToWatchList,
            removeMovieFromWatchList
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}