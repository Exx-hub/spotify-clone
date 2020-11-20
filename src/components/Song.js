import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import "../styles/Song.css";

function Song({ track }) {
	console.log(track);
	return (
		<div className="song">
			<img src={track?.album?.images[2]?.url} alt="" className="song__album" />
			<div className="song__details">
				<p className="song__title">{track?.name}</p>
				<p className="song__artists">
					{track?.artists[0]?.name}·{track?.album?.name}
				</p>
			</div>
			<div className="song__time"></div>
		</div>
	);
}

export default Song;
