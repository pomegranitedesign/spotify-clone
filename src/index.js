import React from 'react'
import { render } from 'react-dom'
import { DataLayer } from './DataLayer'
import reducer, { initialState } from './reducer'
import App from './Components/App/App'
import './index.css'

render(
	<React.StrictMode>
		<DataLayer initialState={initialState} reducer={reducer}>
			<App />
		</DataLayer>
	</React.StrictMode>,
	document.getElementById('root')
)
