import React from "react";
//import cities from '../data';
import Card from "./Card";
import stylesCards from "../styles/Cards.module.css";

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  if (!props.cities) {
    return <h1>No hay ciudades disponibles</h1>;
  }
  return (
    <div className={stylesCards.container}>
      {props.cities &&
        props.cities.map((c) => (
          <Card
            key={c.id}
            min={c.main.temp_min}
            max={c.main.temp_max}
            name={c.name}
            img={c.weather[0].icon}
            onClose={() => alert(c.name)}
          />
        ))}
      {/* {console.log(props.cities)}; */}
    </div>
  );
}

//!COMPONENTE CON CLASE
// class Cards extends React.Component {
//   render() {
//     return (
//       <div>
//         {
//           this.props.cities.map(c => (
//             <Card
//               key={c.id}
//               min={c.main.temp_min}
//               max={c.main.temp_max}
//               name={c.name}
//               img={c.weather[0].icon}
//               onClose={() => alert(c.name)}
//             />

//           ))
//         }

//       </div>
//     )
//   }
// }

//  export default Cards;
