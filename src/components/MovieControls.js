import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const MovieControls = ({ movie }) => {
    const { removeMovieFromWatchList } = useContext(GlobalContext);
    return (
        <div className='inner-card-controls'>
            <button className='ctrl-btn'> <i className='fa-fw far fa-eye'></i> </button>
            <button onClick={() => removeMovieFromWatchList(movie.id)} className='ctrl-btn'> <i className='fa-fw fa fa-times'></i> </button>
        </div>
    )
}

export default MovieControls