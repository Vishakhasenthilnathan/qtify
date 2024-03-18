import "./App.css";
import React, { Component } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";

function App() {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<div className="App">
					<NavBar />
					<Hero />
				</div>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
