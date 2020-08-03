export const initialState = {
	user: null,
	playlists: [],
	isPlaying: false,
	item: null,
	// REMOVE AFTER DEVELOPMENT
	token:
		'BQCHrSQxy2HNRPd1Jjwgw5SdRl3rLamCpdE5CfoK6yPhbrwEtKGUJ5uRq9fEKh2NEd2KiwQxNV8QIaZdAvKypX2xh1C-PqadPMisb-k9jD9-GaOgIsgnM33LsTPW1tFI1mz1dpbIjoMmvMQYep13G0KmBLMQB7Fd'
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_TOKEN':
			return { ...state, token: action.token }
		case 'SET_USER':
			return { ...state, user: action.user }
		default:
			return state
	}
}

export default reducer
