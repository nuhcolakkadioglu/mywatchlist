import React, { useEffect, useState } from 'react'
import ResultCart from './ResultCart';

const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([])

    useEffect(() => {

        if (query.length >= 3) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=
            ${query}&page=1&include_adult=false`)
                .then((res) => res.json()).then((data) => setResults(data.results));
        } else {
            setResults([]);
        }

    }, [query])

    const onChange = (e) => {
        setQuery(e.target.value);
    }
    return (
        <div className='add-page'>
            <div className="container">
                <div className="add-content">
                    <img alt='test' src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" />
                    <div className="titles">
                        <h1>Hoş Geldiniz..</h1>
                        <h2>Milyonlarca film burada...</h2>
                    </div>
                    <div className="input-wrapper">
                        <input value={query} onChange={onChange} type="text" placeholder='film ara' />
                    </div>
                    {
                        results?.length > 0 && (
                            <ul className='results'>
                                {
                                    results?.map((movie) => (
                                        <li key={movie.id}>
                                            <ResultCart movie={movie} />
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Add