import React from 'react';
import style from './albumsDetails.css';
import TracksList from '../tracks/TracksList';

export default class AlbumDetails extends React.Component{
	render(){
		const album = this.props.album || {};
		const className = [style.album, this.props.className === 'show_Web_Mobile' ? '' : style.show_only_Web].join(' ');

		return(
			<div className={className}>
				<div className={style.albumImage}>
					<img alt="" src={album.albumImageUrl} />
				</div>

				<div className={style.albumDetail}>
					<div className={style.albumDetailHeader}>
						<p>{album.releaseDate}</p>
						<h1>{album.collectionName}</h1>
					</div>

					<TracksList tracksList={album.trackNames} />
				</div>

			</div>
		)
	}
}