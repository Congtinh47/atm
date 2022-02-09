import React from "react";
import ReactLoading from "react-loading";
import { LoaddingStyle } from "./styled";

const Loading: React.FC = () => {
	return (
		<LoaddingStyle>
			<div className="loadding">
				<h3 className="text-dark">Loading...</h3>
				<ReactLoading className="text-dark" type="spinningBubbles" color="#fff" />
			</div>
		</LoaddingStyle>
	);
};

export default Loading;
