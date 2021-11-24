/*//////////////////// Elementos ////////////////////////*/ ////
// MAQUETADO
const linkBalance = document.querySelector(".link-balance");
const linkCategorias = document.querySelector(".link-categorias");
const linkReportes = document.querySelector(".link-reportes");
const seccionPrincipal = document.querySelector("#principal");
const seccionCategorias = document.querySelector("#seccion-categorias");
const seccionReportes = document.querySelector(".reportes");
const menuDesplegableMobile = document.querySelector(
  "#menu-desplegable-mobile"
);
const botonHamburguesa = document.getElementById("boton-hamburguesa");
const linkBalanceMobile = document.querySelector(".link-balance-mobile");
const linkCategoriasMobile = document.querySelector(".link-categorias-mobile");
const linkReportesMobile = document.querySelector(".link-reportes-mobile");

const seccionNuevaOperacion = document.getElementById(
  "formulario-nueva-operacion"
);

const seccionEditarCategoria = document.querySelector(
  "#seccion-editar-categorias"
);
const contenedorFiltros = document.querySelector("#contenedor-filtros");
const botonFiltros = document.querySelector("#boton-filtros");

//CATEGORIAS
const selectTipo = document.getElementById("select-tipo");
const selectCategoria = document.getElementById("select-categoria");
const selectOrden = document.getElementById("select-orden");
const formAgregarCategoria = document.getElementById("form-agregar-categoria");
const inputAgregarCategoria = document.getElementById(
  "input-agregar-categoria"
);
const botonAgregarCategoria = document.getElementById(
  "boton-agregar-categoria"
);
const contenedorCategoriaAgregada = document.getElementById(
  "contenedor-categorias-agregadas"
);
const seccionEditarCategorias = document.getElementById(
  "seccion-editar-categorias"
);
const botonEditarCategoria = document.querySelector(
  "#boton-editar-categoria-formulario"
);
const botonCancelarEditarCategoria = document.querySelector(
  "#boton-cancelar-editar-categoria"
);
const inputEditarNombreCategoria = document.getElementById(
  "input-editar-nombre-categoria"
);

const botonEditarCategoriaFormulario = document.getElementById(
  "boton-editar-categoria-formulario"
);

let botonesEditarItemCategoria = document.querySelectorAll(
  ".boton-editar-item-categoria"
);

const formEditarCategoria = document.getElementById("form-editar-categoria");

//OPERACIONES
const seccionSinOperaciones = document.getElementById(
  "contenedor-sin-operaciones"
);
const seccionConOperaciones = document.getElementById(
  "contenedor-titulos-nuevas-operaciones"
);
const contenedorNuevasOperaciones = document.getElementById(
  "contenedor-listado-nuevas-operaciones"
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
const itemNuevaOperacion = document.getElementById("item-nueva-operacion");

const inputDescripcionNuevaOperacion = document.getElementById(
  "descripción-nueva-operación"
);
const inputMontoNuevaOperacion = document.getElementById(
  "monto-nueva-operación"
);
const selectTipoNuevaOperacion = document.getElementById(
  "tipo-nueva-operacion"
);
const selectCategoriaNuevaOperacion = document.getElementById(
  "categoria-nueva-operacion"
);
const inputFechaNuevaOperacion = document.getElementById(
  "fecha-nueva-operación"
);
//EDITAR OPERACIONES
const formularioEditarOperacion = document.getElementById("formulario-editar-operacion");
const inputDescripcionEditarOperacion = document.getElementById("descripción-editar-operación")
const inputMontoEditarOperacion = document.getElementById("monto-editar-operación")
const selectTipoEditarOperacion = document.getElementById("tipo-editar-operacion")
const selectCategoriaEditarOperacion = document.getElementById("categoria-editar-operacion")
const inputFechaEditarOperacion = document.getElementById("fecha-editar-operación")
const botonCancelarEditarOperaciones = document.getElementById("boton-cancelar-editar-operaciones")
const botonFormularioEditarOperaciones = document.getElementById("boton-formulario-editar-operaciones")

/////////////////////////////////// FUNCION AUXILIAR MAQUETADO ////////////////////////////////////////
const arraySecciones = [
  seccionPrincipal,
  seccionCategorias,
  seccionReportes,
  seccionNuevaOperacion,
  seccionEditarCategorias,
  formularioEditarOperacion
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

////// Links del NAV ///
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

botonHamburguesa.onclick = () => {
  botonHamburguesa.classList.toggle("is-active");
  menuDesplegableMobile.classList.toggle("is-active");
};

/*//////////////////// Ocultar filtros sección principal ////////////////////////*/

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

//INFORMACION CATEGORIAS//
const categorias = [
  "Trabajo",
  "Comida",
  "Educación",
  "Transporte",
  "Servicios",
  "Salidas",
  "Alquiler",
];

// Funciones auxiliares
const guardarCategoriasLocalStorage = (array, clave) => {
  const nuevoObjeto = { categorias: array };
  const objetoJSON = JSON.stringify(nuevoObjeto);
  localStorage.setItem(clave, objetoJSON);
};

const traerCategoriasDesdeLS = (clave) => {
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

//////////// Editar categorías //////////////

formEditarCategoria.onsubmit = (event) => {
  event.preventDefault();
};

const mostrarCategoriaAEditar = () => {
  const botonesEditarItemCategoria = document.querySelectorAll(
    ".boton-editar-item-categoria"
  );

  for (let index = 0; index < botonesEditarItemCategoria.length; index++) {
    botonesEditarItemCategoria[index].onclick = () => {
      const id = botonesEditarItemCategoria[index].id.slice(23);
      const idCategoria = Number(id);
      mostrarSeccion(arraySecciones, seccionEditarCategoria);
      let categoriaAEditar = traerCategoriasDesdeLS("categorias")[idCategoria];
      inputEditarNombreCategoria.value = categoriaAEditar;

      const categoriasRestantes = traerCategoriasDesdeLS("categorias").filter(
        (categoria) => {
          return categoriaAEditar !== categoria;
        }
      );
      guardarCategoriasLocalStorage(categoriasRestantes, "categorias");

      botonCancelarEditarCategoria.onclick = () => {
        const categoriasLS = traerCategoriasDesdeLS("categorias");
        categoriasLS.push(categoriaAEditar);
        guardarCategoriasLocalStorage(categoriasLS, "categorias");
        agregarCategoriaHTML(
          traerCategoriasDesdeLS("categorias"),
          selectCategoria
        );
        agregarCategoriaHTML(
          traerCategoriasDesdeLS("categorias"),
          selectCategoriaNuevaOperacion
        );
        agregarCategoriaHTML(
          traerCategoriasDesdeLS("categorias"),
          selectCategoriaEditarOperacion
        );
        agregarItemCategoria(traerCategoriasDesdeLS("categorias"));
        mostrarSeccion(arraySecciones, seccionCategorias);
      };
    };
  }
};

//AGREGAR ITEM CATEGORIA Y MOSTRARLO EN HTML
const agregarItemCategoria = (array) => {
  const itemAgregadoEnCategorias = array.reduce((acc, elemento, index) => {
    return (
      acc +
      `<div class="columns is-mobile" id=categoria-agregada>
    <div class="column">
    <p class="tag is-primary is-light">${elemento}</p>
  </div>
  <div class="column is-flex is-justify-content-flex-end ">
    <button  id="boton-editar-categoria-${index}"class="button is-ghost is-size-7 boton-editar-item-categoria">Editar</button>
    <button id="boton-eliminar-categoria-${index}"class="button is-ghost is-size-7 boton-eliminar-categoria">Eliminar</button>
  </div> 
  </div>`
    );
  }, "");
  contenedorCategoriaAgregada.innerHTML = itemAgregadoEnCategorias;
  mostrarCategoriaAEditar();
  ejecutarBotonesEliminarCatagoria();
};

// AGREGAR CATEGORIA EN EL SELECT
const agregarCategoriaHTML = (categorias, select) => {
  if (select === selectCategoria) {
    const opcionTodos = `<option value="Todos">Todas</option>`;
    const categoriasEnHTML = categorias.reduce(
      (acc, categoria, index, array) => {
        return (
          acc +
          `<option value="${categoria}" id="categoria-${index}">${categoria}</option>`
        );
      },
      opcionTodos
    );
    select.innerHTML = categoriasEnHTML;
  } else {
    const categoriasEnHTML = categorias.reduce(
      (acc, categoria, index, array) => {
        return (
          acc +
          `<option value="${categoria}" id="categoria-${index}">${categoria}</option>`
        );
      },
      ''
    );
    select.innerHTML = categoriasEnHTML;
  }
}

//Formulario agregar categoria

formAgregarCategoria.onsubmit = (event) => {
  event.preventDefault();
};

botonAgregarCategoria.onclick = () => {
  const categoriaCapitalizada = capitalizar(inputAgregarCategoria.value);
  const arrayDesdeLS = traerCategoriasDesdeLS("categorias");

  if (arrayDesdeLS.includes(categoriaCapitalizada)) {
    alert("¡Categoria ya existente!");
  } else if (categoriaCapitalizada === "") {
    alert("¡Categoria sin nombre!");
  } else {
    arrayDesdeLS.push(categoriaCapitalizada);
    guardarCategoriasLocalStorage(arrayDesdeLS, "categorias");
    agregarCategoriaHTML(traerCategoriasDesdeLS("categorias"), selectCategoria);
    agregarCategoriaHTML(
      traerCategoriasDesdeLS("categorias"),
      selectCategoriaNuevaOperacion
    );
    agregarCategoriaHTML(
      traerCategoriasDesdeLS("categorias"),
      selectCategoriaEditarOperacion
    );
    agregarItemCategoria(traerCategoriasDesdeLS("categorias"));
    inputAgregarCategoria.value = "";
  }
};


///////////////////* Funcion crear item de nueva operación *///////////////////////
const guardarOperacionesLocalStorage = (array, clave) => {
  const arrayJSON = JSON.stringify(array);
  localStorage.setItem(clave, arrayJSON);
};

const traerOperacionesDesdeLS = (clave) => {
  const datosLocalStorage = localStorage.getItem(clave);
  const operacionesDesdeLS = JSON.parse(datosLocalStorage);
  if (operacionesDesdeLS === null) {
    return null;
  } else {
    return operacionesDesdeLS;
  }
};

// funcion ordenar fechas
const inputFecha = document.querySelector("#input-fecha");

const ordenarFechas = (array) => {
  console.log(array)
  const fechasOrdenadas = array.sort((a,b) => {
    return new Date(b.fecha) - new Date(a.fecha)
  });
  console.log(fechasOrdenadas)
  const fechaFinal = fechasOrdenadas.map((operacion) => {
    new Date(operacion.fecha).toLocaleDateString()
    return operacion;
  });
  return fechaFinal;

};
//funcion filtro fechas
const fechasNuevas = (operaciones) => {
  const fechasSeccionadas = [];
  for (let i = 0; i < operaciones.length; i++) {
    if (new Date(inputFecha.value) <= new Date(operaciones[i].fecha)) {
      fechasSeccionadas.push(operaciones[i]);
    }
  }
  return fechasSeccionadas;
};


//// Información ////
let operaciones = traerOperacionesDesdeLS("operaciones");

/// Editar operacion///
formularioEditarOperacion.onsubmit = (event) => {
  event.preventDefault();
}
//Formulario editar operaciones//

const mostrarOperacionAEditar = () => {
  const botonEditarItemOperacion = document.querySelectorAll(".boton-editar-item-operacion");

  for (let index = 0; index < botonEditarItemOperacion.length;index++) {
    botonEditarItemOperacion[index].onclick = () => {
      let id = botonEditarItemOperacion[index].id.slice(30)
      let idOperacion = Number(id)
      mostrarSeccion(arraySecciones,formularioEditarOperacion)
      operaciones = traerOperacionesDesdeLS("operaciones")
      const operacionAEditar = operaciones[idOperacion]
      inputDescripcionEditarOperacion.value = operacionAEditar.descripcion
      inputMontoEditarOperacion.value = operacionAEditar.monto
      selectTipoEditarOperacion.value = operacionAEditar.tipo
      selectCategoriaEditarOperacion.value = operacionAEditar.categoria
      inputFechaEditarOperacion.value = operacionAEditar.fecha

      botonFormularioEditarOperaciones.onclick = (event) => {
        event.preventDefault();
        operacionAEditar.descripcion = inputDescripcionEditarOperacion.value,
        operacionAEditar.categoria = selectCategoriaEditarOperacion.value,
        operacionAEditar.fecha = inputFechaEditarOperacion.value,
        operacionAEditar.monto = inputMontoEditarOperacion.value,  
        operacionAEditar.tipo = selectTipoEditarOperacion.value, 

        guardarOperacionesLocalStorage(operaciones,"operaciones")
        mostrarOperacionesEnHTML(ordenarFechas(traerOperacionesDesdeLS("operaciones")))
        mostrarSeccion(arraySecciones, seccionPrincipal);
      }

      botonCancelarEditarOperaciones.onclick = (event)=> {
        event.preventDefault()
        mostrarOperacionesEnHTML(traerOperacionesDesdeLS("operaciones"))
        mostrarSeccion(arraySecciones, seccionPrincipal);
      }
    }
    
  }
  
}

//MOSTRAR OPERACIONES EN HTML - FUNCION AUXILIAR, CAMBIA EL COLOR DE LAS OPERACIONES EN HTML//

const colorDeMonto = (objeto) => {
  if (objeto.tipo === "gasto") {
    return "has-text-danger";
  } else {
    return "has-text-success";
  }
};

const signoMonto = (objeto) => {
  if (objeto.tipo === "gasto") {
    return "-$";
  } else {
    return "+$";
  }
};



/// Boton Elimina Operaciones
const eliminarOperacion = (index) => {
  operaciones = operaciones.filter((elemento, i)=>{
    return index !== i
  })
  guardarOperacionesLocalStorage(operaciones, "operaciones")
  mostrarOperacionesEnHTML(operaciones)
}

const asignarFuncionEliminar = () => {
  const botonEliminarOperacion = document.querySelectorAll(
    '.boton-eliminar-item-operacion'
  );
  for (let i = 0; i < botonEliminarOperacion.length; i++) {
    botonEliminarOperacion[i].onclick = () => {
      eliminarOperacion(i)
    }
  }
}


const mostrarOperacionesEnHTML = (array) => {
  const itemsOperaciones = array.reduce((acc, operacion, index) => {
    return (
      acc +
      `<div id="item-nueva-operacion" class="columns is-mobile">
    <p id="descripcion-item-operacion" class="column is-3 mr-0-mobile has-text-weight-semibold">${operacion.descripcion
      }</p>
    <div class="column is-3 is-6-mobile">
      <p id="categoria-item-operacion" class="tag is-primary is-light">${operacion.categoria
      }</p>
    </div>
    <p id="fecha-item-operacion" class="is-size-7 column is-2 is-hidden-mobile has-text-right">${operacion.fecha
      }</p>
    <p id="monto-item-operacion" class="column is-2-desktop is-3-mobile has-text-right has-text-weight-bold ${colorDeMonto(
        operacion
      )}"> ${signoMonto(operaciones)}${operacion.monto}
    </p>
    <div class="column is-2-desktop is-3-mobile pt-0 has-text-right">
      <button id="boton-editar-item-operaciones-${index}" class="button is-ghost is-small pt-0 pb-0 boton-editar-item-operacion">Editar</button>
      <button id="boton-eliminar-item-operaciones" class="button is-ghost is-small pt-0 boton-eliminar-item-operacion">Eliminar</button> 
    </div>
    </div>`
    ); //agregar aca el identificador unico para los botones!, agrego eso mas la clase para eliminar item
  }, "");
  contenedorNuevasOperaciones.innerHTML = itemsOperaciones;
  asignarFuncionEliminar()
   mostrarOperacionAEditar()
};

//////////////////////* Función auxiliar Balance*//////////////////////////

const numeroGananciaBalance = document.querySelector("#numero-ganancias");
const numeroGastosBalance = document.querySelector("#numero-gastos");
const numeroTotalBalance = document.querySelector("#numero-total");

const filtrarOperacionesTipo = (array, tipo) => {
  const operaciones = array.filter((curr) => {
    return curr.tipo === tipo;
  });
  return operaciones;
};

const mostrarEnBalance = (operaciones) => {
  const sumaGastos = filtrarOperacionesTipo(operaciones, "gasto").reduce(
    (acc, curr) => {
      return (acc = acc + Number(curr.monto));
    },
    0
  );

  const sumaGanancias = filtrarOperacionesTipo(operaciones, "ganancia").reduce(
    (acc, elemento) => {
      return (acc = acc + Number(elemento.monto));
    },
    0
  );
  numeroGastosBalance.textContent = `-$${sumaGastos}`;
  numeroGananciaBalance.textContent = `+$${sumaGanancias}`;

  let resultado = sumaGanancias - sumaGastos;

  if (resultado > 0) {
    numeroTotalBalance.classList.add("has-text-success");
    numeroTotalBalance.textContent = `+$${resultado}`;
  } else {
    let resultadoString = String(resultado);
    let stringCortado = resultadoString.slice(1);
    numeroTotalBalance.classList.add("has-text-danger");
    numeroTotalBalance.textContent = `-$${Number(stringCortado)}`;
  }
};

// agregar operacion///
botonAgregarNuevaOperacion.onclick = (event) => {
  event.preventDefault();
  let operacion = {
    descripcion: inputDescripcionNuevaOperacion.value,
    categoria: selectCategoriaNuevaOperacion.value,
    fecha: inputFechaNuevaOperacion.value,
    monto: inputMontoNuevaOperacion.value,
    tipo: selectTipoNuevaOperacion.value,
  };
  operaciones.push(operacion);
  guardarOperacionesLocalStorage(operaciones, "operaciones");
  mostrarOperacionesEnHTML(traerOperacionesDesdeLS("operaciones"));
  mostrarSeccion(arraySecciones, seccionPrincipal);
  seccionSinOperaciones.classList.add("is-hidden");
  seccionConOperaciones.classList.remove("is-hidden");
  mostrarEnBalance(traerOperacionesDesdeLS("operaciones"));
};

/////Filtros Seccion Categorias//////

const aplicarFiltros = () => {
  const tipo = selectTipo.value;

  const filtradoPorTipo = traerOperacionesDesdeLS("operaciones").filter(
    (operacion) => {
      if (tipo === "Todos") {
        return operacion;
      }
      return operacion.tipo === tipo;
    }
  );
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


//cuando se selecciona una fecha se ejecuta la funcion y muestar en html
inputFecha.onchange = () => {
  const filtradoDeFechas = fechasNuevas(traerOperacionesDesdeLS("operaciones"));
  mostrarOperacionesEnHTML(ordenarFechas(filtradoDeFechas));
};

/////// Comparación que muestra OPERACIONES según lo que esté guardado en LS

if (traerOperacionesDesdeLS("operaciones") === null) {
  seccionSinOperaciones.classList.remove("is-hidden");
  seccionConOperaciones.classList.add("is-hidden");
  operaciones = [];
  mostrarEnBalance(operaciones);
} else {
  seccionSinOperaciones.classList.add("is-hidden");
  seccionConOperaciones.classList.remove("is-hidden");
  mostrarOperacionesEnHTML(ordenarFechas(traerOperacionesDesdeLS("operaciones")));
  mostrarEnBalance(traerOperacionesDesdeLS("operaciones"));
}

/// Funciones Ordenar Por
selectOrden.onchange = () => {
  const arrayOrdenadoFinal = ordenarPor();
  mostrarOperacionesEnHTML(arrayOrdenadoFinal);
};

const ordenarPor = () => {
  const orden = selectOrden.value;
  let operaciones = aplicarFiltros();
  if (orden === "A/Z") {
    operaciones = operaciones.sort((a, b) => {
      return a.descripcion.localeCompare(b.descripcion);
    });
  } else if (orden === "Z/A") {
    operaciones = operaciones.sort((a, b) => {
      return b.descripcion.localeCompare(a.descripcion);
    });
  } else if (orden === "Mayor monto") {
    operaciones = operaciones.sort((a, b) => {
      return b.monto - a.monto;
    });
  } else if (orden === "Menor monto") {
    operaciones = operaciones.sort((a, b) => {
      return a.monto - b.monto;
    });
  } else if (orden === "Mas reciente") {
    operaciones = operaciones.sort((a, b) => {
      return new Date(b.fecha) - new Date(a.fecha);
    });
  } else if (orden === "Menos reciente") {
    operaciones = operaciones.sort((a, b) => {
      return new Date(a.fecha) - new Date(b.fecha);
    });
  }
  return operaciones;
};

/// Boton eliminar categoria
const ejecutarBotonesEliminarCatagoria = () => {
  const botonEliminarCategoria = document.querySelectorAll(
    ".boton-eliminar-categoria"
  );
  // console.log(botonEliminarCategoria);
  for (let i = 0; i < botonEliminarCategoria.length; i++) {
    botonEliminarCategoria[i].onclick = () => {
      idCortado = botonEliminarCategoria[i].id.slice(25);
      console.log(idCortado);
      idDelBoton = Number(idCortado);
      const categoriasNoEliminadas = traerCategoriasDesdeLS(
        "categorias"
      ).filter((elemento, index) => {
        return index !== idDelBoton;
      });
      console.log(categoriasNoEliminadas);
      guardarCategoriasLocalStorage(categoriasNoEliminadas, "categorias");
      traerCategoriasDesdeLS("categorias");
      agregarItemCategoria(traerCategoriasDesdeLS("categorias"));
      agregarCategoriaHTML(
        traerCategoriasDesdeLS("categorias"),
        selectCategoria
      ); // select de categorias
      agregarCategoriaHTML(
        traerCategoriasDesdeLS("categorias"),
        selectCategoriaNuevaOperacion
      );
      agregarCategoriaHTML(
        traerCategoriasDesdeLS("categorias"),
        selectCategoriaEditarOperacion
      );
      // item de nueva operacion
    };
  }
};

//boton editar categoria del formulario
botonEditarCategoriaFormulario.onclick = () => {
  const arrayCategoriasLS = traerCategoriasDesdeLS("categorias");
  arrayCategoriasLS.push(inputEditarNombreCategoria.value);
  guardarCategoriasLocalStorage(arrayCategoriasLS, "categorias");

  agregarCategoriaHTML(traerCategoriasDesdeLS("categorias"), selectCategoria);
  agregarCategoriaHTML(
    traerCategoriasDesdeLS("categorias"),
    selectCategoriaNuevaOperacion
  );
  agregarCategoriaHTML(
    traerCategoriasDesdeLS("categorias"),
    selectCategoriaEditarOperacion
  );
  agregarItemCategoria(traerCategoriasDesdeLS("categorias"));
  mostrarSeccion(arraySecciones, seccionCategorias);
};

/// Comparación que muestra CATEGORIAS según lo que esté guardado en LS

if (traerCategoriasDesdeLS("categorias") === null) {
  agregarCategoriaHTML(categorias, selectCategoria);
  agregarCategoriaHTML(categorias, selectCategoriaNuevaOperacion);
  agregarCategoriaHTML(categorias, selectCategoriaEditarOperacion);
  agregarItemCategoria(categorias);
} else {
  agregarCategoriaHTML(traerCategoriasDesdeLS("categorias"), selectCategoria);
  agregarCategoriaHTML(
    traerCategoriasDesdeLS("categorias"),
    selectCategoriaNuevaOperacion
  );
  agregarCategoriaHTML(
    traerCategoriasDesdeLS("categorias"),
    selectCategoriaEditarOperacion);
  agregarItemCategoria(traerCategoriasDesdeLS("categorias"));
}








