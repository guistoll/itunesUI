import React from 'react';
import ViewportHeader from './viewport/ViewportHeader';
import ArtistDetails from './artistDetails/ArtistDetails';

export default class App extends React.Component{
	render(){
		return(
			<div>
				<ViewportHeader/>
				<ArtistDetails/>
			</div>
		)
	}
}
