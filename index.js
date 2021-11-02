/*//////////////////// Elementos ////////////////////////*/

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

const selectTipo = document.getElementById('select-tipo');
const selectCategoria = document.getElementById("select-categoria");
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


//// Filtros-Tipo y Categorias //////
const operaciones = [
  {
    descripcion: 'Cena con amigos',
    categoria: 'salidas',
    fecha: '25/09/2021',
    monto: 2500,
    tipo: 'gasto',
  },
  {
    descripcion: 'sueldo',
    categoria: 'sueldo',
    fecha: '01/09/2021',
    monto: 50000,
    tipo: 'ganancia',
  },
  {
    descripcion: 'pagar monotributo',
    categoria: 'sueldo',
    fecha: '01/09/2021',
    monto: 40000,
    tipo: 'gasto',
  },
  {
    descripcion: 'Aguinaldo',
    categoria: 'sueldo',
    fecha: '15/09/2021',
    monto: 25000,
    tipo: 'ganancia',
  },
  {
    descripcion: 'Comida para gatos',
    categoria: 'mascotas',
    fecha: '25/09/2021',
    monto: 3000,
    tipo: 'gasto',
  },
  {
    descripcion: 'alquiler',
    categoria: 'alquiler',
    fecha: '25/09/2021',
    monto: 25000,
    tipo: 'gasto',
  },
  {
    descripcion: 'Expensas',
    categoria: 'alquiler',
    fecha: '01/09/2021',
    monto: 5000,
    tipo: 'gasto',
  },
];

/////Filtros Seccion Categorias//////

const aplicarFiltros = () => {
  const tipo = selectTipo.value;

  const filtradoPorTipo = operaciones.filter((operacion) => {
    if (tipo === 'todos') {
      return operacion;
    }
    return operacion.tipo === tipo;
  });

  const categoria = selectCategoria.value;

  const filtradoFinal = filtradoPorTipo.filter((operacion) => {
    if (categoria === 'todos') {
      return operacion;
    }
    return operacion.categoria === categoria;
  });

  return filtradoFinal;
};

//////  Filtro por Tipo  //////

selectTipo.onchange = () => {
  const arrayFiltroTipo = aplicarFiltros();
  mostrarOperacionesEnHTML(arrayFiltroTipo);
};

/////  Filtrado por Categoria  /////

selectCategoria.onchange = () => {
  const arrayFiltradoFinal = aplicarFiltros();
  mostrarOperacionesEnHTML(arrayFiltradoFinal);
};