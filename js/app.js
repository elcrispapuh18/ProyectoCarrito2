//Variables para referenciar los objetos
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector ("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector('vaciar-carrito');

let listadoCarrito=[];

const agregarCurso = (e) => {
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const curso= e.target.parentElement;
        const infoCurso={
            imagen: curso.querySelector("img").src,
            nombre: curso.querySelector("h4").textContent,
            precio: curso.querySelector("p.precio").textContent,
            id: curso.querySelector(".agregar-carrito").getAttribute("data-id"),
            cantidad: 1
        }
    console.log ("Presionaste en el div");
    agregarCarrito (infoCurso);
    }
}
const agregarCarrito=curso => {
    listadoCarrito = [...listadoCarrito, curso]
    console.log(listadoCarrito);
    generaHTML();
}
const generaHTML = () =>
vaciarCarrito();
listadoCarrito.forEach (curso=> {
    const row = document.createElement ("row");
    const cursoHTML = 
    <td>
        curso.nombre
    </td>
    row.innerHTML = cursoHTML;
    contenedorCarrito.appendChild(row);
});
    const cargarEventListener = () => {
    listaCursos.addEventListener ('click',agregarCurso) 
    
    const vaciarCarrito=()=>{
        
    }
}

cargarEventListener();
