import React, { useState } from 'react'

const Add = () => {
    const [query, setQuery] = useState("");

    const onChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div className='add-page'>
            <div className="container">
                <div className="add-content">
                    <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" />
                    <div className="titles">
                        <h1>Hoş Geldiniz..</h1>
                        <h2>Milyonlarca film burada...</h2>
                        {query}
                    </div>
                    <div className="input-wrapper">
                        <input onChange={onChange} type="text" placeholder='film ara' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add