import React from "react";
import "./HomeSection.css";

export default function HomeSection() {
	return (
		<div className="HS-Container">
			{/* Main Body Content */}
			
				<div className="HS-logoContainer">
					<div className="HS-logo">
						<a href="#home">
							<img
								className="DA-web-dev-logo"
								src="./images/Web-Dev-Logo.svg"
								alt="DA-web-dev logo"
							/>
						</a>
					</div>
							<h2 className="HS-title">Dev Designs</h2>
				</div>
				{/* <div className="HS-subTitle">
					<h3>
						Creativity Is Limited Only If You Want It To Be!
					</h3>
				</div> */}
		</div>
	);
}
