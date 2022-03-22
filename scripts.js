const categorias = ["Carreras a pie", "Ciclismo", "BTT", "Mushing"];

let carreras_local;
let resultados_busqueda;
let enlace_inscripciones;
let isClicked = [false, false, false, false, false, false, false, false];

// VISTAS
const indexView = () => {
	let view = "";
	view += "<div><h1>Servicios Cinegéticos El Portillo</h1>";
	view += "<h3>Información General</h3>";

	view += `</div>`;
	return view;
};

const monteriasView = () => {
	let view = "";
	view += `<div class="monterias">`;
	//view += "<h3>Monterías</h3>";
	view += '<img class="monterias__img" src="./img/carteles/cartelcorzo.jpeg"/>';

	view += `</div>`;
	return view;
};

const recechosView = () => {
	let view = "";
	view += `<div class="recechos">`;
	//view += `<h3>Recechos</h3>`;
	view += '<img class="recechos__img" src="./img/carteles/carteljabali.jpeg"/>';

	view += `</div>`;
	return view;
};

const esperasView = () => {
	let view = "";
	view += `<div><h1>Servicios Cinegéticos El Portillo</h1>`;
	view += "<h3>Esperas</h3>";

	view += `</div>`;
	return view;
};

/*const editView = (i, carrera) => {

  /*<div class="field">
  Fecha <br>
  <input  type="text" id="fecha" placeholder="Fecha" 
  value="${carrera.fecha}">
  </div>
  return `<h2>Editar Película </h2>
        <div class="field">
        Título <br>
        <input  type="text" id="titulo" placeholder="Título" 
                value="${carrera.titulo}">
        </div>
        
        </div>
        <div class="field">
        Miniatura <br>
        <input  type="text" id="miniatura" placeholder="URL de la miniatura" 
                value="${carrera.miniatura}">
        </div>
        <div class="actionsEvento">
            <button class="update" data-my-id="${i}">
                Actualizar
            </button>
            <button class="index">
                Volver
            </button></div>
       `;
};*/

const showView = (carrera) => {
	view = `
  <div class="detalleevento">
  <div class="tituloDetalle">${carrera.titulo}</div>
  <div class="contenedorDetalle">
    <img id="miniaturaShow" src=${carrera.miniatura}></img>

    <div class="contentTitle">
             <div class="elementoTitulo">Fecha:</div>
             <div class="elementoTitulo">Categoría:</div>
             <div class="elementoTitulo">Hora: </div>
             <div class="elementoTitulo">Distancia: </div>             
             <div class="elementoTitulo">Organizador: </div>
             
    </div>

    <div class="contentDescription">
      <div class="elementoDescripcion">${formatDate(
				parseDate(carrera.fecha)
			)}</div>
      <div class="elementoDescripcion">${carrera.categoria}</div>
      <div class="elementoDescripcion">${
				carrera.hora || "Según categoría"
			}</div>
      <div class="elementoDescripcion">${
				carrera.distancia || "Según categoría"
			}</div>
      <div class="elementoDescripcion">${carrera.organizador || ""}</div>
      
    </div>
    <div class="actionsEvento">`;

	if (carrera.inscripciones != undefined) {
		enlace_inscripciones = carrera.inscripciones;
		view += `<button class="inscripciones botondetallecarrera">Inscripciones</button>`;
	}
	for (let j = 0; j < carrera.botones.length; j++) {
		view += `<a href=${carrera.botones[j].archivo} target=_blank><button class=botondetallecarrera>${carrera.botones[j].titulo}</button></a> `;
	}

	view += `</div>`; //Cierre actionsEvento
	view += `</div>`; //Cierre contenedorDetalle
	view += `</div>`; //Cierre detalleevento

	return view;
};

const showServiciosView = (carrera) => {
	view = `
  <div class="detalleServicios">

  <div class="tituloDetalle">${carrera.titulo}</div>
  <div class="contenedorDetalleServicios">
  <img id="miniaturaShowServicios" src=${carrera.miniatura}></img>
  <div class="descServicios">

    <!--<h2>Descripcion 1</h2>

    <h2>Descripcion 2</h2>
    <p></p>
    <p>Introducir descripción en campo de servicios.js</p>
    <p>Contenido de archivo a continuación</p>-->
    ${carrera.descripcion}
  </div></div></div>`;

	return view;
};

const inscripcionesView = (enlace_inscripciones) => {
	view = "";
	view += `<object class="htmlinscripciones" type="text/html" data="${enlace_inscripciones}" ></object>`;
	return view;
};

const menuView = () => {
	view = "";

	view += `<ul class="listabotones">
            <li class="inicio" onmouseover="ocultar([3,5,7])">
              <p class="inicio">Inicio </p>
            </li>

            <li class="monterias">
            <p class="monterias">Monterías</p>
            </li>

            <li class="recechos" >
            <p class="recechos">Recechos</p>
            </li>

            <li class="esperas" >
            <p class="esperas">Esperas</p>
            </li>

           
              
               
            <li class="contacto" onmouseover="ocultar([3,5,7])">
              <p class="contacto">contacto</p>
            </li>
            
          </ul>`;

	return view;
};

const contactoView = () => {
	view = "";

	view += `
  <div class="formulariocontacto">
    
    <h1 class="h1contacto">Formulario de contacto</h1>

  
    <p>Si quiere ponerse en contacto con nosotros para obtener más información, hágalo a través de estos números de teléfono:</p>

    <h3>Alberto: 690160601</h3>
    <h3>Sergio: 639478438</h3>

  </div>`;

	return view;
};

// CONTROLADORES
const indexContr = () => {
	carreras_local = carreras;
	resetContr(carreras_local);
};

const inicioContr = () => {
	document.getElementById("main").innerHTML = indexView();
};

const monteriasContr = () => {
	document.getElementById("main").innerHTML = monteriasView();
};

const recechosContr = () => {
	document.getElementById("main").innerHTML = recechosView();
};

const esperasContr = () => {
	document.getElementById("main").innerHTML = esperasView();
};

const showContr = (i) => {
	let carrera = resultados_busqueda[i];
	document.getElementById("main").innerHTML = showView(carrera);
};

const showServiciosContr = (i) => {
	let carrera = resultados_busqueda[i];
	document.getElementById("main").innerHTML = showServiciosView(carrera);
};

const resetContr = (carreras) => {
	resultados_busqueda = carreras;
	document.getElementById("main").innerHTML = indexView(
		resultados_busqueda,
		"clasificaciones"
	);
};

const searchDateContr = (year) => {
	let resultado = [];

	for (i = 0; i < carreras.length; i++) {
		if (parseDate(carreras[i].fecha).getFullYear() == year) {
			//Encontrado
			resultado.push(carreras[i]);
		}
	}
	resultados_busqueda = resultado;

	document.getElementById("main").innerHTML = indexView(
		resultado,
		"clasifDate"
	);
};

const searchCatContr = (cat) => {
	let resultado = [];
	for (i = 0; i < carreras.length; i++) {
		if (carreras[i].categoria == categorias[cat]) {
			//Encontrado
			resultado.push(carreras[i]);
		}
	}
	resultados_busqueda = resultado;
	document.getElementById("main").innerHTML = indexView(resultado, "clasifCat");
};

const menuContr = () => {
	document.getElementById("navegador").innerHTML = menuView();
};

const contactoContr = () => {
	document.getElementById("main").innerHTML = contactoView();
};

//CONTROLADORES SIN USAR
const inscripcionesContr = () => {
	document.getElementById(
		"main"
		//).innerHTML = `<object class="htmlinscripciones" type="text/html" data="${enlace_inscripciones}" ></object>`;
	).innerHTML = inscripcionesView(enlace_inscripciones);
};

/*const createContr = () => {
  let mis_carreras = JSON.parse(localStorage.mis_carreras);

  mis_carreras.push({
    titulo: document.getElementById("titulo").value,
    //fecha: document.getElementById("fecha").value,
    miniatura: document.getElementById("miniatura").value,
  });
  localStorage.mis_carreras = JSON.stringify(mis_carreras);
  //mis_peliculas_iniciales.push(JSON.stringify(mis_peliculas))

  indexContr();
};*/

/*const editContr = (i) => {
  let carrera = JSON.parse(localStorage.mis_carreras)[i];
  document.getElementById("main").innerHTML = editView(i, carrera);
};*/

/*const updateContr = (i) => {
  let mis_carreras = JSON.parse(localStorage.mis_carreras);
  mis_carreras[i].titulo = document.getElementById("titulo").value;
  //mis_carreras[i].fecha = document.getElementById("fecha").value;
  mis_carreras[i].miniatura = document.getElementById("miniatura").value;
  localStorage.mis_carreras = JSON.stringify(mis_carreras);
  indexContr();
};*/

/*const deleteContr = (i) => {
  let mis_carreras = JSON.parse(localStorage.mis_carreras);

  if (
    confirm(
      `¿Está seguro de que desea borrar la película ${mis_carreras[i].titulo}?`
    )
  ) {
    mis_carreras.splice(i, 1);
    localStorage.mis_carreras = JSON.stringify(mis_carreras);
  }
  indexContr();

};*/

// Inicialización
document.addEventListener("DOMContentLoaded", inicioContr);
document.addEventListener("DOMContentLoaded", menuContr);

// ROUTER de eventos
const matchEvent = (ev, sel) => ev.target.matches(sel);
const myId = (ev) => Number(ev.target.dataset.myId);

document.addEventListener("click", (ev) => {
	//Añadir nueva clase de boton para las de inicio (próximos)
	if (matchEvent(ev, ".reset")) resetContr(carreras);
	else if (matchEvent(ev, ".inicio")) inicioContr();
	else if (matchEvent(ev, ".monterias")) monteriasContr();
	else if (matchEvent(ev, ".recechos")) recechosContr();
	else if (matchEvent(ev, ".esperas")) esperasContr();
	else if (matchEvent(ev, ".show")) showContr(myId(ev));
	else if (matchEvent(ev, ".showServicios")) showServiciosContr(myId(ev));
	else if (matchEvent(ev, ".searchDate")) searchDateContr(myId(ev));
	else if (matchEvent(ev, ".searchCat")) searchCatContr(myId(ev));
	else if (matchEvent(ev, ".contacto")) contactoContr();
	//Controladores no usados en esta versión
	//if (matchEvent(ev, ".index")) indexContr();
	else if (matchEvent(ev, ".inscripciones")) inscripcionesContr();
	//else if (matchEvent(ev, ".create")) createContr();
	//else if (matchEvent(ev, ".delete")) deleteContr(myId(ev));
	//else if (matchEvent(ev, ".edit")) editContr(myId(ev));
	//else if (matchEvent(ev, ".update")) updateContr(myId(ev));
});

//Formateo de fechas
const formatDate = (current_datetime) => {
	const months = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre",
	];
	let formatted_date =
		current_datetime.getDate() +
		" de " +
		months[current_datetime.getMonth()] +
		" de " +
		current_datetime.getFullYear();
	return formatted_date;
};

function parseDate(str) {
	//var m = str.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
	//Formato dd/mm/aaaa o dd-mm-aaaa
	var m = str.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
	return m ? new Date(m[3], m[2] - 1, m[1]) : null;
}

/*MENÚ DESPLEGABLE*/
//Se recorre la lista de índices y se muestra en pantalla
function ver(lista) {
	for (i in lista) {
		document.getElementById("subseccion" + lista[i]).style.display = "block";
	}
}
//Se recorre la lista de índices y se oculta
function ocultar(lista) {
	for (i in lista) {
		document.getElementById("subseccion" + lista[i]).style.display = "none";
	}
}
//Resetea los booleanos para mostrar/ocultar los botones del menú
function reset() {
	for (i in isClicked) {
		isClicked[i] = false;
	}
}
//Función que se activa al hacer click en un menú
function clickMenu(indiceMenus) {
	for (i in indiceMenus) {
		//Al hacer click, invierte el estado del booleano
		isClicked[indiceMenus[i]] = !isClicked[indiceMenus[i]];
		//Dependiendo del booleano isClicked, se muestra/oculta el botón corrrespondiente
		if (isClicked[indiceMenus[i]]) {
			ver(indiceMenus);
		} else {
			ocultar(indiceMenus);
		}
	}
}
