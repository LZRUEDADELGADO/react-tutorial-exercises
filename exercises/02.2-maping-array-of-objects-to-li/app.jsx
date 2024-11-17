import React from "react";
import ReactDOM from "react-dom";

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

const planetsInHTML = planets.map((planet, index) => {
	return (
		<li key={index} className="list-group-item">
			{planet}
		</li>
	);
});

const content = <ul className="list-group m-5">{planetsInHTML}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
