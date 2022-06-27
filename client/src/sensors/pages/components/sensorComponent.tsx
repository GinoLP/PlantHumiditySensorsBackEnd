import React, {useEffect, useState} from 'react';
// @ts-ignore
import temperatureIcon from "../../../ressources/icons/temperatureIcon.svg";
// @ts-ignore
import sunIcon from "../../../ressources/icons/sunIcon.svg";
import Sensor from './sensor';

function SensorComponent({props}: {props: Sensor}) {
    return(
        <span className="sensor">
              <div className="sensorInfo">
                <div className="infoText">
                  <div className="plantInfo">
                    <h3>Current Humidity</h3>
                    <p>{props.currentHumidity}</p>
                  </div>
                  <div className="plantInfo">
                    <h3>Min Humidity</h3>
                    <p>{props.minHumidity}</p>
                  </div>
                  <div className="plantInfo">
                    <h3>Max Humidity</h3>
                    <p>{props.maxHumidity}</p>
                  </div>
                </div>
                <img src={props.plantPicture} className="plantPicture" alt="plant"/>
              </div>
              <div className="plantCharacteristics">
                <h1>{props.plantName}</h1>
                <p>Fuga occaecati enim magni. Cum placeat ut soluta. Ipsa perspiciatis repudiandae quam.
                  Ipsum recusandae quo maxime est sunt ipsa. Odit incidunt dolor sed sunt delectus.</p>
                <div className="plantCare">
                  <div className="care">
                    <div className="careIcon">
                      <img src={temperatureIcon} className="iconPictures"  alt="temperature"/>
                    </div>
                    <div className="careText">
                      <p><strong>Temperature</strong></p>
                      <p>18°C - 30°C</p>
                    </div>
                  </div>
                  <div className="care">
                    <div className="careIcon">
                      <img src={sunIcon} className="iconPictures"  alt="temperature"/>
                    </div>
                    <div className="careText">
                      <p><strong>Light</strong></p>
                      <p>Avoid direct sunlight</p>
                    </div>
                  </div>
                </div>
              </div>
            </span>
    )
}
export default SensorComponent;