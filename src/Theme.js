import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	spacing: 4,
	typography: {
		fontFamily: ["Poppins"].join(","),
	},
	palette: {
		background: {
			default: "#34C94B", //green
		},
		primary: {
			main: "#121212", //indigo
		},
		secondary: {
			main: "#FFFFFF", //pink
		},
		error: {
			main: "#D72A2A", //red
		},
		warning: {
			main: "#FC7B09", //orange
		},
		info: {
			main: "#6B7D6A", //gray
		},
		success: {
			main: "#09FE00", //green
		},
		text: {
			primary: "#09FE00", //black
			secondary: "#FFFFFF", //white
		},
	},
});

export default theme;
