import React, {useEffect, useState} from 'react';
import Sensor from "../components/sensorComponent";
import sensor from "../components/sensor";

const SensorPage = () => {
    const [sensors, setSensors] = useState([]);
    const [isFetching, setIsFetching] = useState([]);

    useEffect(() => {
        fetchSensors();
    })

    const fetchSensors = async () => {
        const res = await fetch("https://plant-humidity-sensor.herokuapp.com/sensors");
        const sensors = await res.json();
        console.log(sensors);
    }

    return(
        <span>yeeeeeeeee</span>
    );
}

export default SensorPage;