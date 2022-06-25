import React, {useEffect, useState} from 'react';

const SensorList = () => {
    const [sensors, SetSensors] = useState([]);
    const [pictures, SetPictures] = useState([])
}

const fetchData = async () => {
    const result = await fetch("https://plant-humidity-sensors.herokuapp.com/sensors");
    const data = await result.json();
    
    SetSensors(() => {
        return [...sensors, ...data];
    });
};
