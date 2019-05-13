import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD, RAIN, SNOW, SUN, THUNDER, DRIZZLE,} from '../../constants/weathers';
import PropTypes from 'prop-types';

const icons = {
    [CLOUD]: "cloud",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [SUN]: "day-sunny",
    [THUNDER]: "day-thunderstore",
    [DRIZZLE]: "day-showers",
};

const getWeatherIcon = (weatherState) => {
    const ico = icons[weatherState];
    const sizeIcon = "4x";

    if(ico)
        return <WeatherIcons className="wicon" name={ico} size={sizeIcon} />
    else
        return <WeatherIcons className="wicon" name="day-sunny" size={sizeIcon}></WeatherIcons>;

} 
const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;