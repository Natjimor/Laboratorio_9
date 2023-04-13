const contenedorComentarios = document.getElementById("Comments_Container")
const contenedorPrincipal = document.getElementById("Comment_Bar")
const modal = document.getElementById("Comments_Box")
const boton = document.getElementById("Post_button")
const texto = document.getElementById("MakeComment")

function MostrarModal() {
    contenedorPrincipal.classList.add("blur")
    modal.classList.remove("No_Add_Comment")
    modal.classList.add("Add_Comment")
    boton.disabled = true;
}

function OcultarModal() {
    contenedorPrincipal.classList.remove("blur")
    modal.classList.remove("Add_Comment")
    modal.classList.add("No_Add_Comment")
    boton.classList.remove("Post_activate")
    boton.classList.add("Post_desactivate")
    boton.disabled = true;
    texto.value = ""
    
}

function ActivarBoton() {
    var value = texto.value
    if ( value === "") {
        boton.classList.remove("Post_activate")
        boton.classList.add("Post_desactivate")
        boton.disabled = true;
    } else {
        boton.classList.remove("Post_desactivate")
        boton.classList.add("Post_activate")
        boton.disabled = false;
    }
}

function CrearPublicacion() {
    var text = texto.value
    var comment = `
    <div class="Comment">
        <div class="User_inf">
            <img class="User_Img" src="User.png" alt="User_logo">
            <h4 class="Text_Comment">Natalia Jimenez Orozco</h4>
        </div>
        <p class="Post_Comment">${text}</p>
    </div>
    `
    contenedorComentarios.innerHTML += comment
    OcultarModal()
}