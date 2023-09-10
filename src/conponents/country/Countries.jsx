import React, { useEffect, useState } from 'react';
import Country from './Country';
import "./Countries.css"

const Countries = () => {

    const [country, SetCountry] = useState([])
    const [visitedCountry, setVisitedCountry] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => SetCountry(data))
    }, [])

    const handleVisitedCountry = (country) => {
        console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountries)

    }
    return (
        <div>
            <h3>Country: {country.length}</h3>
            <div>
                <h5>Visited Countries : {visitedCountry.length}</h5>

                <div className='my-4 border ml-3'>
                    {
                        visitedCountry.map(visit => <li key={visit.ccn3}>{visit.name.common}</li>)
                    }
                </div>

            </div>
            <div className='countries-container'>
                {
                    country.map(country => <Country
                        key={country.ccn3}
                        handleVisitedCountry={handleVisitedCountry}
                        allCountry={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;