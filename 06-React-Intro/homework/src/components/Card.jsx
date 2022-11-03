import React from "react";
import stylesCard from "../styles/Card.module.css";

export default function Card(props) {
  //max, min, name, img, onClose
  // acá va tu código
  return (
    <div className={stylesCard.cardLondres}>
      <hr />
      <button
        onClick={props.onClose}
        className={`${stylesCard.btn} {styles.btnColor}`}
      >
        X
      </button>

      <h4>{props.name}</h4>
      <div className={stylesCard.DivMiddle}>
        <div className={stylesCard.divTemperature}>
          <p>Min</p>
          <p>{props.min}</p>
        </div>

        <div className={stylesCard.divTemperature}>
          <p>Max</p>
          <p>{props.max}</p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          //src={`https://developer.accuweather.com/sites/default/files/${props.img}.png`}
          alt="img"
        />
      </div>
    </div>
  );
}

//!COMPONENTE CON CLASE
// class Card extends React.Component{
//   render() {
//     return (
//       <div>
// <button onClick={this.props.onClose}>X</button>
//       <h4>{this.props.name}</h4>
//       <div>
//         <p>Min</p>
//         <p>{this.props.min}</p>
//         <p>Max</p>
//         <p>{this.props.max}</p>
//       </div>
//       <img src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`} alt="img" />

//       </div>
//     )
//   }
// }

// export default Card
