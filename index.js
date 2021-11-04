/*//////////////////// Elementos ////////////////////////*/////

const linkBalance = document.querySelector(".link-balance");
const linkCategorias = document.querySelector(".link-categorias");
const linkReportes = document.querySelector(".link-reportes");

const seccionPrincipal = document.querySelector("#principal");
const seccionCategorias = document.querySelector("#seccion-categorias");
const seccionReportes = document.querySelector(".reportes");
const seccionNuevaOperacion = document.getElementById(
  "formulario-nueva-operacion"
);
const seccionEditarCategoria = document.querySelector(
  "#seccion-editar-categorias"
);

const botonNuevaOperacion = document.getElementById("boton-nueva-operacion");
const botonCancelarNuevasOperaciones = document.getElementById(
  "boton-cancelar-nuevas-operaciones"
);
const botonAgregarNuevaOperacion = document.getElementById(
  "boton-agregar-nuevas-operaciones"
);
const contenedorListadoNuevasOperaciones = document.getElementById(
  "contenedor-listado-nuevas-operaciones"
);
const contenedorSinOperaciones = document.getElementById(
  "contenedor-sin-operaciones"
);

const botonEditarCategoria = document.querySelector("#boton-editar-categoria");

const botonCancelarEditarCategoria = document.querySelector(
  "#boton-cancelar-editar-categoria"
);

/////////////////////////////////// Función auxiliar ////////////////////////////////////////
const arraySecciones = [
  seccionPrincipal,
  seccionCategorias,
  seccionReportes,
  seccionNuevaOperacion,
  seccionEditarCategoria,
];

const mostrarSeccion = (array, seccion) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] != seccion) {
      array[i].classList.add("is-hidden");
    } else if (array[i] === seccion) {
      array[i].classList.remove("is-hidden");
    }
  }
};

linkReportes.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionReportes);
};

linkCategorias.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionCategorias);
};
linkBalance.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionPrincipal);
};

/*//////////////////// Menú desplegable mobile ////////////////////////*/

const menuDesplegableMobile = document.querySelector("#menu-desplegable-mobile");
const botonHamburguesa = document.getElementById("boton-hamburguesa");
const linkBalanceMobile = document.querySelector(".link-balance-mobile");
const linkCategoriasMobile = document.querySelector(".link-categorias-mobile");
const linkReportesMobile = document.querySelector(".link-reportes-mobile");

botonHamburguesa.onclick = () => {
  botonHamburguesa.classList.toggle("is-active");
  menuDesplegableMobile.classList.toggle("is-active");
};

/*//////////////////// Ocultar filtros sección principal ////////////////////////*/

const contenedorFiltros = document.querySelector("#contenedor-filtros");
const botonFiltros = document.querySelector("#boton-filtros");

botonFiltros.onclick = (event) => {
  event.preventDefault();
  contenedorFiltros.classList.toggle("is-hidden");
  if (botonFiltros.textContent === "Ocultar filtros") {
    botonFiltros.textContent = "Mostrar filtros";
  } else {
    botonFiltros.textContent = "Ocultar filtros";
  }
};

/////////////////////*Funcionalidad boton nueva operación *//////////////////////////

botonNuevaOperacion.onclick = () => {
  mostrarSeccion(arraySecciones, seccionNuevaOperacion);
};

////* Boton cancelar seccion Nuevas operaciones *////
botonCancelarNuevasOperaciones.onclick = () => {
  mostrarSeccion(arraySecciones, seccionPrincipal);
};

////* Boton agregar seccion Nuevas operaciones *////

botonAgregarNuevaOperacion.onclick = () => {
  mostrarSeccion(arraySecciones, seccionPrincipal);
};

////* Boton editar categorias *////

botonEditarCategoria.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionEditarCategoria);
};

botonCancelarEditarCategoria.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionCategorias);
};

///////////////////* Resportes *///////////////////////

//////////////////////*Balance*//////////////////////////

const numeroGanancia = document.querySelector("#numero-ganancias")
const numeroGastos = document.querySelector("#numero-gastos")
const numeroTotal = document.querySelector("#numero-total")

const objeto1 = [
  {
    descripcion: "sueldo",
    categoria: "trabajo",
    fecha: "02/11/2021",
    monto: 50000,
    tipo: "ganancia"
  },
  {
    descripcion: "comida",
    categoria: "comida",
    fecha: "02/11/2021",
    monto: 1000,
    tipo: "gasto"
  }
]

const gastos = objeto1.filter((elemento)=> {
  return elemento.tipo === "gasto"
})

const sumaGastos = gastos.reduce((acc, elemento) => {
   return acc = acc + elemento.monto
}, 0)

numeroGastos.innerHTML = `-$ ${sumaGastos}`

const ganacia = objeto1.filter((elemento)=> {
  return elemento.tipo === "ganancia"
})

const sumaGanancias = ganacia.reduce((acc, elemento) => {
  return acc = acc + elemento.monto
}, 0)

numeroGanancia.innerHTML = `+$ ${sumaGanancias}`

const total = sumaGanancias - sumaGastos  
numeroTotal.innerHTML = `${total}`

//////////////////revisar/////////////////////

const postivoNegativo = () => {
  if (total < 0 ){
    numeroTotal.classList.add = "has-text-danger"
  }
  else{
    numeroTotal.classList.add = "has-text-success"
    numeroTotal.classList.remove = "has-text-danger"
  }

}
postivoNegativo(total)