import React from 'react';
import ArtistDetailHeader from './header/ArtistDetailsHeader';
import AlbumList from './albums/AlbumsList';
import fetchAlbumsList from '../api/ListAlbumsAction';

export default class ArtistDetails extends React.Component{
	constructor() {
		super();
		this.state = {
			artistName: '',
			albums: [{
				collectionName: '',
				albumImageUrl: '',
				releaseDate: '',
				trackNames: [{
					trackDuration: '',
					trackName: '',
				}]
			}],
		}
	}

	componentDidMount() {
		// TODO: Fazer nome do artista variável
		// TODO: Tratar exceções
		fetchAlbumsList('Beatles').then(data => {
			this.setState(data);
		});
	}

	render() {
		return(
			<div>
				<ArtistDetailHeader artistName={this.state.artistName} />
				<AlbumList albums={this.state.albums}/>
			</div>
		)
	}
}
