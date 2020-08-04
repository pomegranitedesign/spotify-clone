import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from '../../DataLayer'
import './Header.css'

const Header = ({ spotify }) => {
	const [ { user } ] = useDataLayerValue()
	return (
		<header className="header">
			<div className="header__left">
				<SearchIcon />
				<input type="text" placeholder="Search for Artists, Songs" />
			</div>

			<div className="header__right">
				<Avatar src={user?.images[0]?.url} alt="User Avatar" />
        <h4>{user?.display_name}</h4>
			</div>
		</header>
	)
}

export default Header
