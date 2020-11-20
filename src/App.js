import React, { useEffect } from "react";
import Login from "./components/Login";
import Player from "./components/Player";

import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "./spotify/spotify"; // grabs the access token
import { useStateValue } from "./context/GlobalContextProvider";

const spotify = new SpotifyWebApi();

function App() {
	const [state, dispatch] = useStateValue();

	useEffect(() => {
		const hash = getTokenFromUrl(); // gets token from api
		window.location.hash = ""; // hides the access token when redirected

		const _token = hash.access_token; // store token in state
		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				payload: _token,
			});

			// spotify commands to get the spotify API functions to your app

			spotify.setAccessToken(_token); // use the token in the new spotify api to connect spotify to react

			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					payload: user,
				});
			});

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: "SET_PLAYLISTS",
					payload: playlists,
				});
			});
			spotify.getPlaylist("37i9dQZEVXcIJazRV9ISoM").then((response) => {
				dispatch({
					type: "SET_DISCOVER_WEEKLY",
					payload: response,
				});
			});
		}
	}, [dispatch]);

	// console.log(state);

	// BEM CONVENTION
	return (
		<div className="app">
			{state.token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
