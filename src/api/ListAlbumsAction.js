import millisToMinutesAndSeconds from '../util/millisToMinutesAndSeconds.js';

export default function albumsList(term) {
	const urlSearchAPI = 'https://itunes.apple.com/search?term='+term;

	return fetch(urlSearchAPI).then(results => {
		return results.json();
	}).then(data => {
		const artistName = data.results[0].artistName;
		const albums = {};
		const arrAlbums = [];

		data.results.filter((obj) => {
			return obj.kind === 'song';
		}).map((obj) => {
			if(!albums[obj.collectionId]) {
				albums[obj.collectionId] = {
					collectionName: obj.collectionName,
					trackNames: [],
					releaseDate: new Date(obj.releaseDate).getFullYear(),
					albumImageUrl: obj.artworkUrl100
				};
				
				arrAlbums.push(albums[obj.collectionId]);
			}
			
			const trackDetails = {
				trackName: obj.trackName,
				trackDuration: millisToMinutesAndSeconds(obj.trackTimeMillis),
			}
			albums[obj.collectionId].trackNames.push(trackDetails);

			return arrAlbums;
		});

		return {
			artistName: artistName,
			albums: arrAlbums,
		};
	})
}