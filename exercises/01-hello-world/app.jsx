import React from "react";
import ReactDOM from "react-dom";

let age = "12";
let name = "John";

let output = (
	<span>
		James is <strong>{age}</strong> years old
	</span>
);

ReactDOM.render(output, document.querySelector("#myDiv"));
