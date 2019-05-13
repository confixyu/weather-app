import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities }) => {
    return (
        <div>
            <WeatherLocation city= "Barranquilla,Col"></WeatherLocation>
            <WeatherLocation city= "Bogota,Col"></WeatherLocation>
            <WeatherLocation city= "Chicago,US"></WeatherLocation>
            <WeatherLocation city= "New York,US"></WeatherLocation>
        </div>
    )};

LocationList.protoTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;