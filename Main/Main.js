import "./Main.css";

const HTMLdeInfo = () => {
	return `
  <div class="container">
    <p id="Temperatura">32</p>
    <p id="CountryName">Belize</p>
    </div>
  `;
};

const HTMLdeMapa = () => {
	return `
  mapas
  
  `;
};

const Main = () => {
	document.querySelector(".divisor4").innerHTML = HTMLdeInfo();
	document.querySelector(".divisor3").innerHTML = HTMLdeMapa();
};

export default Main;
//https://www.google.com/maps/@40.4190137,-3.7179958,14z?entry=ttu
//<div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">GPS devices</a></iframe></div>
