import React from 'react'
import Header from '../Header/Header'
import SongRow from '../SongRow/SongRow'
import { useDataLayerValue } from '../../DataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import './Body.css'

const Body = ({ spotify }) => {
	const [ { discover_weekly } ] = useDataLayerValue()
	return (
		<div className="body">
			<Header spotify={spotify} />
			<div className="body__info">
				<img src={discover_weekly?.images[0]?.url} alt="Discover Weekly" />
				<div className="body__infoText">
					<strong>Playlist</strong>
					<h2>Discover Weekly</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>

			<div className="body__songs">
				<div className="body__icons">
					<PlayCircleFilledIcon className="body__shuffle" />
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>
				{discover_weekly?.tracks.items.map(item => 
					<SongRow key={item.track} track={item.track} />	
				)}
			</div>
		</div>
	)
}

export default Body
