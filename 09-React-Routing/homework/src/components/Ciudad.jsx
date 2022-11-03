import React from "react";
import "./Ciudad.css";
// import "animate.css";
import {BsWind} from "react-icons/bs";
import {BsClouds} from "react-icons/bs";
import {TbWorldLatitude} from "react-icons/tb";
import {TbWorldLongitude} from "react-icons/tb";
import {WiHumidity} from "react-icons/wi";

export default function Ciudad({ city }) {
  return (
    <div className="ciudad">
      <div className="container">
        <div class="glass drop-2"></div>
        <div class="glass drop-1"></div>
        <div className="glass">
          <h1>{city.name}, {city.country}</h1>
          {/* <h3>{city.timezone}</h3> */}
          <div className="divtemperature">
          <p><span className="temp">{city.temp}</span><sup className="grad">&deg;<span id="metric">C</span></sup></p> 
            {/* <div className="temp">{city.temp} ºC</div> */}
            <div className="clima">
            <img
              className="iconoClima"
              src={"http://openweathermap.org/img/wn/" +city.img+ "@2x.png"}
              width="150"
              height="150"
              alt=""
            />
            <div>{city.weather}</div>
            </div>
            </div>
            
            <div className="info">
            
            
            <div><BsWind size={40} />
            <br/>{city.wind} km/h</div>
            <div><WiHumidity size={40}/><br/>{city.humidity}%</div>
            <div><BsClouds size={40}/><br/>{city.clouds} %</div>
            <div><TbWorldLatitude size={40}/> <br/>{city.latitud}º</div>
            <div><TbWorldLongitude size={40}/><br/>{city.longitud}º</div>
          </div>
        </div>

        <div class="glass drop-3"></div>
        <div class="glass drop-4"></div>

        
      </div>
    </div>
  );
}
