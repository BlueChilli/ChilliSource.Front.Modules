/* eslint-disable */
import React from "react";
import ReactShow from "react-show";

export default ({children, invalid}) => {
	return (
		<ReactShow show={invalid}>
			<div key="1" className="error-text">
				{children}
			</div>
		</ReactShow>
	);
}