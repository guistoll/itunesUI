import React from 'react';
import FontAwesome from 'react-fontawesome';
import AlbumsDetails from './AlbumsDetails.js';
import style from './albumsList.css';

export default class AlbumsList extends React.Component{
	render(){
		const albums = this.props.albums;

		const albumsDetails = albums && albums.map((album, index) =>
		  	<AlbumsDetails
		  		album={album}
		  		key={index}
		  		className={index === 0 ? 'show_Web_Mobile' : 'show_only_Web'}
		  	/>
		);

		return(
			<div className={style.albumList}>
				{albumsDetails}

				<div className={style.footer_pagination}>
					<FontAwesome name="angle-left"/>
					<FontAwesome name="angle-right"/>
				</div>
			</div>
		)
	}
}