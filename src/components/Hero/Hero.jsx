import React from "react";
import styles from "./Hero.module.css";
function Hero() {
	return (
		<div className={styles.hero}>
			<div style={{ lineHeight: "0.7", alignSelf: "center" }}>
				<h1>100 Thousand songs, ad-free</h1>
				<h1>Over Thousand podcast episodes</h1>
			</div>
			<div>
				<img
					src={require("../../assets/hero_headphones.png")}
					width={212}
					alt="headphones"
				/>
			</div>
		</div>
	);
}

export default Hero;
