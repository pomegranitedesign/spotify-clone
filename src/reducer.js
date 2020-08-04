export const initialState = {
	user: null,
	playlists: [],
	isPlaying: false,
	item: null,
	token: null
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_DISCOVER_WEEKLY':
			return { ...state, discover_weekly: action.discover_weekly }
		case 'SET_PLAYLISTS':
			return { ...state, playlists: action.playlists }
		case 'SET_TOKEN':
			return { ...state, token: action.token }
		case 'SET_USER':
			return { ...state, user: action.user }
		default:
			return state
	}
}

export default reducer
