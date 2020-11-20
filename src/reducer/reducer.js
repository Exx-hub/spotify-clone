export const initialState = {
	user: null,
	playLists: [],
	playing: false,
	discover_weekly: null,
	item: null,
	token: null,
	// token:
	// 	"BQBRj_ICaLIUB5tG4XqqXYudDOFBMcU6bZdYO-AXrf0x8bJU193RRDE9NEfWuyHK-70LPhoitnCrpC7czzx921uy8ReFSMlDUa6XO-36mvJJalsdVDhSr3lThbX-19kk8tm543KCdYuLrOL0xTGjXPFvYj3zvg",
};

const reducer = (currState, action) => {
	console.log(action); // always do this to make life easier
	switch (action.type) {
		case "SET_USER":
			return { ...currState, user: action.payload };
		case "SET_TOKEN":
			return { ...currState, token: action.payload };
		case "SET_PLAYLISTS":
			return { ...currState, playLists: action.payload };
		case "SET_DISCOVER_WEEKLY":
			return { ...currState, discover_weekly: action.payload };
		default:
			return currState;
	}
};

export default reducer;
