export default (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload]
            }
        case "REMOVE_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter((item) => item.id !== action.payload)
            }
        default:
            return state;
    }
}