import React from "react";
import ReactDOM from "react-dom";

const customer = {
	first_name: "Bob",
	last_name: "Dylan",
};

// Crear la estructura JSX para mostrar el nombre y apellido
const output = (
	<div>
		<h1>My name is {customer.first_name}</h1>
		<h2>My last name is {customer.last_name}</h2>
	</div>
);

// Renderizar en el DOM
ReactDOM.render(output, document.querySelector("#myDiv"));
