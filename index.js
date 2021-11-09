/*//////////////////// Elementos ////////////////////////*/ ////

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

const contenedorNuevasOperaciones = document.getElementById(
  "contenedor-listado-nuevas-operaciones"
);
const selectTipo = document.getElementById("select-tipo");
const selectCategoria = document.getElementById("select-categoria");
const inputAgregarCategoria = document.getElementById(
  "input-agregar-categoria"
);
const botonAgregarCategoria = document.getElementById(
  "boton-agregar-categoria"
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

const menuDesplegableMobile = document.querySelector(
  "#menu-desplegable-mobile"
);
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

//INFORMACION//
const operaciones = [
  {
    descripcion: "Cena con amigos",
    categoria: "Salidas",
    fecha: "25/09/2021",
    monto: 2500,
    tipo: "gasto",
  },
  {
    descripcion: "Sueldo",
    categoria: "Trabajo",
    fecha: "01/09/2021",
    monto: 500000,
    tipo: "ganancia",
  },
  {
    descripcion: "Pagar monotributo",
    categoria: "Trabajo",
    fecha: "01/09/2021",
    monto: 40000,
    tipo: "gasto",
  },
  {
    descripcion: "Aguinaldo",
    categoria: "Trabajo",
    fecha: "15/09/2021",
    monto: 25000,
    tipo: "ganancia",
  },
  {
    descripcion: "Comida para gatos",
    categoria: "Comida",
    fecha: "25/09/2021",
    monto: 3000,
    tipo: "gasto",
  },
  {
    descripcion: "Alquiler",
    categoria: "Alquiler",
    fecha: "25/09/2021",
    monto: 25000,
    tipo: "gasto",
  },
  {
    descripcion: "Expensas",
    categoria: "Servicios",
    fecha: "01/09/2021",
    monto: 5000,
    tipo: "gasto",
  },
  {
    descripcion: "Transporte",
    categoria: "Transporte",
    fecha: "01/09/2021",
    monto: 500,
    tipo: "gasto",
  },
  {
    descripcion: "Ada",
    categoria: "Educación",
    fecha: "01/09/2021",
    monto: 5000,
    tipo: "gasto",
  },
];

const categorias = [
  "Todos",
  "Trabajo",
  "Comida",
  "Educación",
  "Transporte",
  "Servicios",
  "Salidas",
  "Alquiler",
];

//////////////////////*Balance*//////////////////////////

const numeroGanancia = document.querySelector("#numero-ganancias");
const numeroGastos = document.querySelector("#numero-gastos");
const numeroTotal = document.querySelector("#numero-total");

const gastos = operaciones.filter((elemento) => {
  return elemento.tipo === "gasto";
});

const sumaGastos = gastos.reduce((acc, elemento) => {
  return (acc = acc + elemento.monto);
}, 0);

numeroGastos.innerHTML = `-$ ${sumaGastos}`;

const ganacia = operaciones.filter((elemento) => {
  return elemento.tipo === "ganancia";
});

const sumaGanancias = ganacia.reduce((acc, elemento) => {
  return (acc = acc + elemento.monto);
}, 0);

numeroGanancia.innerHTML = `+$ ${sumaGanancias}`;

const total = (sumaGanancias, sumaGastos) => {
  let resultado = sumaGanancias - sumaGastos;
  if (resultado > 0) {
    numeroTotal.classList.add("has-text-success");
    return `+$ ${resultado}`;
  } else {
    let resultadoString = String(resultado);
    let stringCortado = resultadoString.slice(1);
    numeroTotal.classList.add("has-text-danger");
    return `-$ ${Number(stringCortado)}`;
  }
};
numeroTotal.textContent = total(sumaGanancias, sumaGastos);

//MOSTRAR OPERACIONES EN HTML - FUNCION AUXILIAR, CAMBIA EL COLOR DE LAS OPERACIONES EN HTML//

const colorDeMonto = (objeto) => {
  if (objeto.tipo === "gasto") {
    return "has-text-danger";
  } else {
    return "has-text-success";
  }
};

const mostrarOperacionesEnHTML = (array) => {
  let acc = "";
  array.map((operacion) => {
    acc =
      acc +
      `<div id="item-nueva-operacion" class="columns is-mobile">
    <p id="descripcion-item-operacion" class="column is-3 mr-0-mobile has-text-weight-semibold">${
      operacion.descripcion
    }</p>
    <div class="column is-3 is-6-mobile">
      <p id="categoria-item-operacion" class="tag is-primary is-light">${
        operacion.categoria
      }</p>
    </div>
    <p id="fecha-item-operacion" class="column is-2 is-hidden-mobile">${
      operacion.fecha
    }</p>
    <p id="monto-item-operacion" class="column is-2 is-3-mobile  has-text-weight-bold ${colorDeMonto(
      operacion
    )}">$${operacion.monto}
    </p>
    <div class="column is-2 is-3-mobile pt-0">
      <button id="boton-editar-item-operaciones" class="button is-ghost is-small pt-0 pb-0">Editar</button>
      <button id="boton-eliminar-item-operaciones" class="button is-ghost is-small pt-0">Eliminar</button>
    </div>
    </div>`;
  });
  contenedorNuevasOperaciones.innerHTML = acc;
};
mostrarOperacionesEnHTML(operaciones);

/////Filtros Seccion Categorias//////

const aplicarFiltros = () => {
  const tipo = selectTipo.value;

  const filtradoPorTipo = operaciones.filter((operacion) => {
    if (tipo === "Todos") {
      return operacion;
    }
    return operacion.tipo === tipo;
  });

  const categoria = selectCategoria.value;

  const filtradoFinal = filtradoPorTipo.filter((operacion) => {
    if (categoria === "Todos") {
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

// Agregar categoria


// Funciones auxiliares
const guardarEnLocalStorage = (array, clave) => {
  const nuevoObjeto = { categorias: array };
  const objetoJSON = JSON.stringify(nuevoObjeto);
  localStorage.setItem(clave, objetoJSON);
};

const traerDesdeLS = (clave) => {
  const datosLocalStorage = localStorage.getItem(clave);
  const objetoLS = JSON.parse(datosLocalStorage);
  if (objetoLS === null) {
    return null;
  } else {
    return objetoLS.categorias;
  }
};

const capitalizar = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

//// Funciones
const agregarCategoriaHTML = (categorias) => {
  const categoriasEnHTML = categorias.reduce((acc, categoria, index, array) => {
    return (
      acc +
      `<option value="${categoria}" id="categoria-${index}">${categoria}</option>`
    );
  }, "");

  selectCategoria.innerHTML = categoriasEnHTML;

  guardarEnLocalStorage(categorias, "categorias");
};

if (traerDesdeLS("categorias") === null) {
  agregarCategoriaHTML(categorias);
} else {
  agregarCategoriaHTML(traerDesdeLS("categorias"));
}

botonAgregarCategoria.onclick = (event) => {
  event.preventDefault();
  const categoriaCapitalizada = capitalizar(inputAgregarCategoria.value);

  const arrayDesdeLS = traerDesdeLS("categorias");

  if (arrayDesdeLS.includes(categoriaCapitalizada)) {
    alert("Categoria ya existente!");
  } else {
    categorias.push(categoriaCapitalizada);
    guardarEnLocalStorage(categorias, "categorias");
    const categoriasActualizadas = traerDesdeLS("categorias");
    agregarCategoriaHTML(categoriasActualizadas);
    inputAgregarCategoria.value = "";
  }
};
