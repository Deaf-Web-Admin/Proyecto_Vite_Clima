import "./Footer.css";

const template = () => {
	return `
  <a href="mailto:linux.user@techie.com">CopyLeft 2023</a>
  `;
};

const Footer = () => {
	document.querySelector("footer").innerHTML = template();
};
console.log(
	"WebPage - SPA Written by Me, u can contact me at linux[dot]user[at]techie[dot]com"
);
console.log("Thanks LHB for Taugh us Nice!");

export default Footer;
