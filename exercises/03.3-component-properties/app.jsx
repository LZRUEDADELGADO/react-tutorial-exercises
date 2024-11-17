import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = (props) => {
	// 1) Replace the hard-coded image, description, link, etc. With their property variable
	return (
		<div className="card m-5">
			<img
				className="card-img-top"
				src={props.imageUrl}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
