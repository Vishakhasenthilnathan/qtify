import LogoImage from "../assets/logo.png";
export default function Logo() {
	return (
		<img
			src={LogoImage}
			alt="Logo"
			width="67px"
			height="36px"
			style={{
				marginTop: "10px",
			}}
		/>
	);
}
