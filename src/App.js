import React, { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import Login from './Login'
import Player from './Player'
import { useDataLayerValue } from './DataLayer'
import { getTokenFromUrl } from './spotify'
import './App.css'

const _spotify = new SpotifyWebApi()

const App = () => {
	const [ { user, token }, dispatch ] = useDataLayerValue()

	useEffect(() => {
		const hash = getTokenFromUrl()
		const _token = hash.access_token

		if (_token) {
			dispatch({ type: 'SET_TOKEN', token: _token })

			_spotify.setAccessToken(_token)
			_spotify
				.getMe()
				.then((user) => dispatch({ type: 'SET_USER', user }))
		}
	}, [])

	return (
		<div className="app">
			{token ? <Player spotify={_spotify} /> : <Login />}
		</div>
	)
}

export default App
