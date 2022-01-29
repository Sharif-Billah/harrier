import React, { useEffect, useState } from 'react';
import './CarParts.css'

const CarParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className="container">
            <div className="row parts">
                <h1>AUTO PARTS</h1>
                <div class="container">
                    <h3>WHAT ARE YOU WORKING ON TODAY?</h3>
                    <p>Shop for your specific vehicle to find parts that fit.</p>
                </div>
                <h1 className="text-start">MOST POPULAR PARTS</h1>

                {
                    parts.map(part => (
                        <div class="col-lg-3 col-md-4 col-sm-6 ">
                            <div className="border h-100">
                                <img src={part.img} alt="" />
                                <p>{part.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>


    );
};

export default CarParts;