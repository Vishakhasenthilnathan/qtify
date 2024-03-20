import "./App.css";
import React, { useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import NavBar from "./components/NavBar/NavBar";
import {
	fetchGenre,
	fetchNewAlbums,
	fetchSongs,
	fetchTopAlbums,
} from "./api/api";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
	const [data, setData] = useState({});

	const generateData = (key, source) => {
		source().then((data) => {
			setData((prevState) => {
				return { ...prevState, [key]: data };
			});
		});
	};
	useEffect(() => {
		generateData("topAlbums", fetchTopAlbums);
		generateData("newAlbums", fetchNewAlbums);
		generateData("songs", fetchSongs);
		generateData("genres", fetchGenre);
	}, []);

	const { topAlbums = [], newAlbums = [], songs = [], genres = [] } = data;
	return (
		// eslint-disable-next-line react/jsx-no-comment-textnodes
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<div className="App">
					<NavBar />
					<Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
				</div>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
