import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard';

const Watched = () => {
    const { watched } = useContext(GlobalContext);

    return (
        <div className='movie-page'>
            <div className="container">
                <div className="header">
                    <h1 className="heading">İzlenen filmler</h1>
                    <div className="count-pill">
                        {watched.length}  {watched.length < 2 ? "Mive" : "Movies"}
                    </div>
                </div>

                {
                    watched.length > 0 ? (
                        <div className="movie-grid">
                            {watched.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} type="watched" />
                            ))}
                        </div>
                    ) : (
                        <h1 className='no-movies'>Listede film yok...</h1>
                    )
                }
            </div>
        </div>
    )
}

export default Watched