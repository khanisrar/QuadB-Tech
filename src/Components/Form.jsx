import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Form = () => {

    const [name, setName] = useState('')
    const [num, setNum] = useState('')
    const [email, setEmail] = useState('')

    const { id } = useParams();

    useEffect(() => {
        getMovieDetails();
    }, [id]);

    const getMovieDetails = async () => {
        try {
            let result = await fetch(`https://api.tvmaze.com/shows/${id}`);
            result = await result.json();
            setName(result.name);
        } catch (err) {
            console.error("Error fetching Data ", err);
        }
    };


    return (
        <>
            <div className="container">
                <h1 className="head-text">Booking Form</h1>
                <div className="item">
                    <label >Movie Name:</label>
                    <input type="text" placeholder="Enter Name"
                        value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="item">
                    <label >Number:</label>
                    <input type="number" placeholder="Enter Mobile Number"
                        value={num} onChange={(e) => setNum(e.target.value)} />
                </div>
                <div className="item">
                    <label >Email:</label>
                    <input type="text" placeholder="Enter Email Address"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <button className="add-btn">Submit</button>



            </div>
        </>
    )
}

export default Form;