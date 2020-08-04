import React, { useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import Login from '../Login/Login'
import Player from '../Player/Player'
import { useDataLayerValue } from '../../DataLayer'
import { getTokenFromUrl } from '../../spotify'
import './App.css'

const _spotify = new SpotifyWebApi()

const App = () => {
	const [ { token }, dispatch ] = useDataLayerValue()

	useEffect(
		() => {
			const hash = getTokenFromUrl()
			const _token = hash.access_token

			if (_token) {
				dispatch({ type: 'SET_TOKEN', token: _token })

				_spotify.setAccessToken(_token)

				_spotify
					.getMe()
					.then((user) => dispatch({ type: 'SET_USER', user }))

				_spotify
					.getUserPlaylists()
					.then((playlists) =>
						dispatch({ type: 'SET_PLAYLISTS', playlists })
					)

				_spotify
					.getPlaylist('37i9dQZEVXcW4H5oeXaBzw')
					.then((discover_weekly) =>
						dispatch({
							type: 'SET_DISCOVER_WEEKLY',
							discover_weekly
						})
					)
			}
		},
		[ dispatch ]
	)

	return (
		<div className="app">
			{token ? <Player spotify={_spotify} /> : <Login />}
		</div>
	)
}

export default App
