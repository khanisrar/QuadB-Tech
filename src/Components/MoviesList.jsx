import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const MoviesList = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            let result = await fetch('https://api.tvmaze.com/search/shows?q=all');
            result = await result.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <div className="container">
                <h1 className='head-text'>Movies List</h1>
                <div className="row">
                    {data.map((item) => (
                        <div key={item.show.id} className="col-lg-4 col-md-6 col-12">
                            <div className="cards">
                                <img src={item.show.image && item.show.image.medium} alt="" />
                                <div className="content">
                                    <div className='top'>
                                        <div className='titels'>
                                            <h2 className='name'>{item.show.name}</h2>
                                            <h3 className='genre'>{item.show.genres.join(", ")}</h3>
                                        </div>
                                        <i>{item.show.status}</i>
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Language :</td>
                                                <td>{item.show.language}</td>
                                            </tr>
                                            <tr>
                                                <td>Runtime :</td>
                                                <td>{item.show.runtime}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <Link to={`/movie-details/${item.show.id}`}>View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MoviesList;