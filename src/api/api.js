import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
	try {
		const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
		return response.data;
	} catch (e) {
		console.error(e);
	}
};

export const fetchNewAlbums = async () => {
	try {
		const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
		return response.data;
	} catch (e) {
		console.error(e);
	}
};

export const fetchSpecificAlbums = async () => {
	try {
		const response = await axios.get(`${BACKEND_ENDPOINT}/albums/:slug`);
		return response.data;
	} catch (e) {
		console.error(e);
	}
};

export const fetchSongs = async () => {
	try {
		const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
		return response.data;
	} catch (e) {
		console.error(e);
	}
};

export const fetchGenre = async () => {
	try {
		const response = await axios.get(`${BACKEND_ENDPOINT}/genres`);
		return response.data;
	} catch (e) {
		console.error(e);
	}
};
