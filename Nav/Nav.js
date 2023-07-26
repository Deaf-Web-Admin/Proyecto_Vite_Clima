import "./Nav.css";

const Cities = [
	"Belize",
	"Madrid",
	"Vallecas",
	"Getafe",
	"Pinto",
	"Parla",
	"Cienpozuelos",
	"Aranjuez",
	"Cordoba",
	"Lucena",
	"Montilla",
	"Puente Genil",
	"MonteMayor",
	"Monturque",
	"Espejo",
	"Cabra",
	"Murcia",
	"Yecla",
	"Llorca",
	"Alhama",
	"Jaen",
	"Torre don jimeno",
	"Torre del Campo",
	"Martos",
	"Albacete",
	"Vizcaia",
	"Burgos",
	"Leon",
];

//la verda, me costo crear este metodo
/*

const DrawLinks = () => {
	const Navigator = document.querySelector("#Navigator");
	for (const City of Cities) {
		const FutureLink = document.createElement("a");
		FutureLink.text = `${City}`;
		const LinkArmado = "javascript:mostrar('InfoBar');city('" + City + "');";
		FutureLink.setAttribute("href", LinkArmado);
		Navigator.appendChild(FutureLink);
		//btn.classList.add("SoyONoSoyUnBoton");
		//btn.setAttribute = "google.com";
		console.log(FutureLink);
	}
};
*/

const DrawButtons = () => {
	const Navigator = document.querySelector("Nav");
	for (const City of Cities) {
		const btn = document.createElement("button");
		btn.innerHTML = `${City}`;
		Navigator.appendChild(btn);
		btn.classList.add("SoyONoSoyUnBoton");
		btn.setAttribute("value", City);
		//console.log(btn);
	}
};
/*
$("button").click(function () {
	var fired_button = $(this).val();
	alert(fired_button);
});
*/

const template = () => {
	return `
  `;
};

const Nav = () => {
	document.querySelector("Nav").innerHTML = template();
	DrawButtons();
};

export default Nav;
