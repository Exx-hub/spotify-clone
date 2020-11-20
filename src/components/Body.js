import React from "react";
import { useStateValue } from "../context/GlobalContextProvider";
import "../styles/Body.css";
import Header from "./Header";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Song from "./Song";

function Body({ spotify }) {
	const [{ discover_weekly }] = useStateValue();
	// console.log(discover_weekly);
	return (
		<div className="body">
			<Header spotify={spotify} />
			<div className="body__info">
				<img
					// src={discover_weekly?.images[0]?.url}
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKeaCkv9qJTlPGEJzWDPMBzXALREltDmrWZg&usqp=CAU"
					alt=""
					className="body__image"
				/>
				<div className="body__infoText">
					<strong>Playlist</strong>
					<h2>{discover_weekly?.name}</h2>
					<p>{discover_weekly?.description}</p>

					<p>Spotify·1 like·1hr 23 mins</p>
				</div>
			</div>
			<div className="body__songs">
				<div className="body__icons">
					<PlayCircleFilledIcon fontSize="large" className="body__play" />
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>
				<div>
					{discover_weekly?.tracks?.items?.map((track) => (
						<Song key={track.track.id} track={track.track} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Body;
