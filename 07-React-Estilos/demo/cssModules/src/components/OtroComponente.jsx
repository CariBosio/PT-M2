//!Lo hice yo
import React from 'react';
import s from  './OtroComponente.css'; //s es un {}, donde adentro van a estar definidos los estilos

export default function OtroComponente(){
    console.log('esto es s:', s);
return(
<div className={s.producto}>
    <p>Otro componente</p>
</div>
)
}