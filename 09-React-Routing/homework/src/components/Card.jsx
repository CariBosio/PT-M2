import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ temp, min, max, name, country, img, onClose, id }) {
  return (
    <div className="card">
    <div className="cover">
    <div class="cover" >
      <div id="closeIcon" className="row">
        <button onClick={onClose} className="btn btn-sm btn-danger">
          X
        </button>
      </div>

     

      <div className="card-body">
        <Link to={`/ciudad/${id}`}>
          <h5 className="card-title" >{name}, {country}</h5>
          
        </Link>

        <h5 className="card-temp">{temp}<sup className="grad">&deg;<span id="metric">C</span></sup></h5>

        {/* <div className="card-temp">
          {temp}
          <p>Temp</p>
          <p>{max}°</p>
        </div> */}

        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p>{max}°</p>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="iconoClima"
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="80"
              height="80"
              alt=""
            />
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}
      