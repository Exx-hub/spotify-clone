import React from "react";
import "../styles/Footer.css";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AirplayIcon from "@material-ui/icons/Airplay";

function Footer() {
	return (
		<div className="footer">
			<div className="footer__left">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStDqjGOyr5OCyiCrQr4FfTGoGqqMOzJPMczQ&usqp=CAU"
					className="footer__albumImage"
					alt=""
				/>
				<div className="footer__songInfo">
					<h4>Yeah!</h4>
					<p>Usher</p>
				</div>
				<FavoriteBorderIcon className="footer__heartIcon footer__icon" />
				<AirplayIcon className="footer__airIcon footer__icon" />
			</div>
			<div className="footer__center">
				<ShuffleIcon className="footer__green" />
				<SkipPreviousIcon className="footer__icon" />
				<PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
				<SkipNextIcon className="footer__icon" />
				<RepeatIcon className="footer__green" />
			</div>
			<div className="footer__right">
				<Grid container spacing={3}>
					<Grid item>
						<PlaylistPlayIcon className="footer__icon" />
					</Grid>
					<Grid item>
						<VolumeDownIcon className="footer__icon" />
					</Grid>
					<Grid item xs>
						<Slider />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
