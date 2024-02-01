import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = () => {
    const [data, setData] = useState(undefined);

    const { id } = useParams();

    useEffect(() => {
        getMovieDetails();
    }, [id]);

    const getMovieDetails = async () => {
        try {
            let result = await fetch(`https://api.tvmaze.com/shows/${id}`);
            result = await result.json();
            setData(result);
            console.log(result);
        } catch (err) {
            console.error("Error fetching Data ", err);
        }
    };

    if (!data) {
        return (
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                className="loading-text"
            >
                Loading...
            </div>
        );
    }

    return (
        <>
            <div className="container">
                <h1 className='head-text'>Movie Details</h1>
                <div className="details-container">
                    <div className="left">

                        {data && data.image && (
                            <img src={data && data.image.original} alt="" />
                        )}
                    </div>
                    <div className="right">
                        <div className='top'>
                            <div className='titels'>
                                <h2 className='name'>{data.name}</h2>
                                <h3 className='genre'>{data.genres.join(", ")}</h3>
                            </div>
                            <i>{data.status}</i>
                        </div>
                        <p className='des' dangerouslySetInnerHTML={{ __html: data.summary }}></p>

                        <table>
                            <tbody>
                                <tr>
                                    <td>Rating :</td>

                                    <td>{data.rating.average}</td>
                                </tr>
                                <tr>
                                    <td>Language :</td>
                                    <td>{data.language}</td>
                                </tr>
                                <tr>
                                    <td>Type :</td>
                                    <td>{data.type}</td>
                                </tr>
                                <tr>
                                    <td>Runtime :</td>
                                    <td>{data.runtime}</td>
                                </tr>
                                <tr>
                                    <td>AvgRuntime :</td>
                                    <td>{data.averageRuntime}</td>
                                </tr>
                                <tr>
                                    <td>Premiered :</td>
                                    <td>{data.premiered}</td>
                                </tr>
                                <tr>
                                    <td>Ended :</td>
                                    <td>{data.ended}</td>
                                </tr>
                                <tr>
                                    <td>Country :</td>
                                    {
                                        data && data.webChannel && data.webChannel.country && data.webChannel.country.name && (
                                            <td>{data.webChannel.country.name || data.network.country.name}</td>
                                        )
                                    }


                                </tr>
                                <tr>
                                    <td>Weight :</td>
                                    <td>{data.weight}</td>

                                </tr>

                            </tbody>
                        </table>
                        <div className="btn">
                            <a href={data.url} target='_blank' rel="noopener noreferrer">Know More</a>
                            <Link to={`/form/${data.id}`}>Book Ticket</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieDetails;
