//!al hacer click en el botón aparezca en el DOM una lista con todos los amigos

const { query } = require("express");


$("#loading").hide(); //para ocultar el loading(ruedita)

$("#boton").click(() => {
    //$("#boton").click(function() {

    const lista = $("#lista");
    lista.empty(); //vacio, no deja que si sigo clickeando ver amigos se siga duplicando la lista

    $("#loading").show(); //aparece el loading


    $.get("http://localhost:5000/amigos", (data) => {
        //!OPCION 2
        //$.get("http://localhost:5000/amigos", function(amigos){
        // amigos.forEach(e => {
        //     let li = document.createElement("li");
        //     li.id = e.id;
        //     li.innerText = e.name;
        //     let list = document.getElementById("lista");
        //     list.appendChild(li)
        // })

        //!OPCION 3
        // $.get("http://localhost:5000/amigos", function (amigos) {
        //     amigos.forEach(e => {
        //     $("lista").append(`<li id = "${e.id}">${e.name} X</li>`)
        // })

        for (let amigo of data) {
            const li = document.createElement("li");
            li.innerText = amigo.name;
            lista.append(li);
        }
        $("#loading").hide(); //desaparece el loading
    });
});


//---------------------------------------------------------------------------------
//!Al hacer click en el boton, buscaremos el amigo que tiene ese id en el servidor

$("#search").click(() => { //boton que va a tener vida
    const id = $("#input").val(); //valor del input
    $("#input").val(""); //setear ese valor en vacío

    $.get("http://localhost:5000/amigos/" + id, (amigo) => {
        $("#amigo").text(amigo.name);
    }).fail(() => {
        $("#amigo").text(`El amigo con el id ${id} no existe`); //si se carga un id que no existe
    });
});

//!OPCION 2
// $("#search").click(function() { //boton que va a tener vida
//     let id = $("#input").val(); //valor del imput

//     if (id) {
//         $.get(`http://localhost:5000/amigos/${id}`, function(amigo) {
//             $("#amigo").text(`${amigo.name} ${amigo.age} ${amigo.email}`);
//         })
//     }
// });




//-------------------------------------------------------------------------------------------
//!Al hacer click en el boton, borraremos el amigo del servidor haciendo un `DELETE` a nuestro servidor, concatenando el id del usuario que queremos borrar.

$("#delete").click(() => { //boton que va a tener vida
    const id = $("#inputDelete").val();
    $("#inputDelete").val(""); //setear ese valor en vacío

    $.ajax({
        url: "http://localhost:5000/amigos/" + id,
        type: "DELETE",
        success: () => {
            $("#sucess").text(`Se eliminó corectamente al amigo con el id ${id}`);
        },
    });
});





//!OPCION 2

// let deleteFriend = function() {
//     let id = $("#inputDelete").val();
//     if (id) {
//         $.ajax({
//             url: `http://localhost:5000/amigos/${id}`,
//             type: "DELETE",
//             success: function() {
//                 $("#sucess").text(`Se eliminó corectamente al amigo con el id ${id}`);
//                 $("#inputDelete").val("");
//                 showFriends();
//             },
//         });
//     } else {

//     }


// };

// $("#delete").click(deleteFriend);