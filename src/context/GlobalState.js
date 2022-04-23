import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";
export const GlobalContext = createContext();

const initialState = {
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
    watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
}

export const GlobalPrivider = (props) => {

    const [state, dispathc] = useReducer(AppReducer, initialState);
    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
        localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state]);

    const addMovieToWatchList = (movie) => {
        dispathc({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    }

    const removeMovieFromWatchList = (id) => {
        dispathc({ type: "REMOVE_MOVIE_TO_WATCHLIST", payload: id });
    }

    const addMovieToWatched = (movie) => {
        dispathc({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });

    }

    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            addMovieToWatchList,
            removeMovieFromWatchList,
            addMovieToWatched
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}