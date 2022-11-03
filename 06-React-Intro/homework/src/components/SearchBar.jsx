import React from "react";
import stylesSearchBar from "../styles/SearchBar.module.css";
import { BsSearch } from "react-icons/bs";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={stylesSearchBar.container}>
      <input type="text" placeholder={"Buscar ciudad ...."} />
      <button
        onClick={() => props.onSearch("Buscando Ciudad")}
        className={stylesSearchBar.btn}
      >
        Agregar
      </button>
    </div>
    // <div className={stylesSearchBar.header}>
    //   <form className={stylesSearchBar.searchBar}>
    //     <BsSearch className={stylesSearchBar.icon} />
    //     <input className={stylesSearchBar.input} placeholder="Ciudad..." />
    //     <button className={stylesSearchBar.submit} type="submit">
    //       Buscar
    //     </button>
    //   </form>
    // </div>
  );
}

//!COMPONENTE CON CLASE
// export default class SearchBar extends React.Component{
//   render(){
//     return (
//       <div>
//     <input type="text" placeholder={"Buscar ciudad ...."} />
//     <button onClick={()=>this.props.onSearch("Buscando Ciudad")}>Agregar</button>

//   </div>
//     )
//   }
// }
