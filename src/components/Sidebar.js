import React from "react";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import { useStateValue } from "../context/GlobalContextProvider";

function Sidebar() {
	const [{ playLists }, dispatch] = useStateValue();
	// console.log(playLists);
	return (
		<div className="sidebar">
			<img
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt=""
				className="sidebar__logo"
			/>

			<SidebarOption Icon={HomeIcon} title="Home" />
			<SidebarOption Icon={SearchIcon} title="Search" />
			<SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

			<strong>
				<h4 className="sidebar__title">PLAYLISTS</h4>
			</strong>
			<hr />

			{playLists?.items?.map((item) => (
				<SidebarOption title={item.name} key={item.id} />
			))}
		</div>
	);
}

export default Sidebar;
