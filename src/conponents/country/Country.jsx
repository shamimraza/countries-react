import React, { useState } from 'react';
import "./Country.css"

const Country = ({ allCountry, handleVisitedCountry }) => {
    // console.log(allCountry);
    const { name, flags, population, area, cca2, startOfWeek
    } = allCountry;

    const [button, setButton] = useState(false)

    const handleButton = () => {
        setButton(!button)
    }


    return (
        <div className={`country-container ${button ? 'visited' : 'blue'}`}>
            <h3 className={`${button ? 'visited' : 'blue'}`}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>area: {area}</p>
            <p><small>cca2: {cca2}</small></p>
            <p>startOfWeek: {startOfWeek}</p>
            <button onClick={() => handleVisitedCountry(allCountry)} className='mt-3 btn btn-neutral'>Mark Visited</button>
            <br />
            <button onClick={handleButton} className="btn btn-primary my-3">Visited</button>
            {button ? '  suscess button visited' : ' I have visit'}

        </div>
    );
};

export default Country;