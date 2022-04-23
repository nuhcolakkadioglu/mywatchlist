import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext);

    return (
        <div className='movie-page'>
            <div className="container">
                <div className="header">
                    <h1 className="heading">İzlenecek filmler</h1>
                    <div className="count-pill">
                        {watchlist.length}  {watchlist.length < 2 ? "Mive" : "Movies"}
                    </div>
                </div>
                {
                    watchlist.length > 0 ? (
                        <div className="movie-grid">
                            {watchlist.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} type="watchlist" />
                            ))
                            }
                        </div>
                    ) : (
                        <h1 className="no-movies">Listede film yok...</h1>
                    )
                }
            </div>

        </div>
    )
}

export default Watchlist