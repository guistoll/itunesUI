import React from 'react';
import style from './tracksList.css';

export default class TracksList extends React.Component{
	render(){
		const tracks = this.props.tracksList;
		
		const listTracks = tracks && tracks.map((track, index) =>
		  	<li key={index}>
		  		{track.trackName}
		  		<p>{track.trackDuration}</p>
		  	</li>
		);

		return(
			<div className={style.tracksList}>
				<ul>
					{listTracks}
				</ul>
			</div>
		)
	}
}