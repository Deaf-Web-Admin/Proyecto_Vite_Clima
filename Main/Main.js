import "./Main.css";

const HTMLdeInfo = () => {
	return `
  <div class="container">
  
    </div>
  `;
};

const HTMLdeMapa = () => {
	return `
  <div class="container2">
  
    </div>
  
  `;
};
//ESTA FUNCION SE ENCARGA DE BUSCAR DATOS EN LA API
const getRealTimeData = async (city) => {
	//Hacemos la petición de los datos crudos, y hemos cambiado el valor de location por el argumento que le pasaremos a la función getRealTimeData
	const data = await fetch(
		`https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=xASmtqdrf0smIvzBngVZDN9vPbfOyd6X`
	);
	//Parseamos los datos a json
	const dataJSON = await data.json();
	printData(dataJSON);
};
//ESTA FUNCION SE ENCARGA DE PINTAR LOS DATOS
const printData = (data) => {
	//Recuperamos el contendor
	const container = document.querySelector(".divisor4");
	const container2 = document.querySelector(".divisor3");
	//Vamos a parsear la fecha en tipo fecha para poder utilizar los metodos, por ejemplo, toLocaleString
	const date = new Date(data.data.time);
	//Y aqui tenemos la fecha que nos devuelve la API formateada en España con los datos que queremos en el formato adecuado
	const formattedDate = date.toLocaleString("es-ES", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	});
	container.innerHTML = `
  
    <p id="Temperatura">${data.data.values.temperature}º</p>
    <p id="CountryName">${data.location.name}</p>
  `;
	container2.innerHTML = `
<div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${data.location.lat},${data.location.lon}+(Proyecto%20Vite)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">`;
};
const Main = () => {
	document.querySelector(".divisor4").innerHTML = HTMLdeInfo();
	document.querySelector(".divisor3").innerHTML = HTMLdeMapa();
	getRealTimeData("Belize");
	//Recuperamos el input y el boton
	const botones = document.querySelectorAll(".SoyONoSoyUnBoton");
	const cuandoSeHaceClick = function (evento) {
		// Recuerda, this es el elemento
		getRealTimeData(this.innerText);

		// Podemos cambiar cualquier cosa, p.ej. el estilo
	};
	// botones es un arreglo así que lo recorremos
	botones.forEach((boton) => {
		//Agregar listener
		boton.addEventListener("click", cuandoSeHaceClick);
	});
};

export default Main;
