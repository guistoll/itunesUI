import React from 'react';
import FontAwesome from 'react-fontawesome';
import style from './artistDetailsHeader.css';

export default class ArtistDetailsHeader extends React.Component{
	render() {
		const tabNames = ["albuns", "artists", "playlists"];

		// TODO: Abas controladas por estado
		const tabs = tabNames.map((menu, index) =>
		  	<li className={index === 0 ? style.selected : style.icons_web} key={index}>
		  		<a href={menu}>{menu}</a>
		  	</li>
		);

		return (
			<div className={style.artist_detail_header}>
				<div className={style.artist_detail_content}>
					<div className={style.artist_image}>
						<img alt="" src='https://is1-ssl.mzstatic.com/image/thumb/Music/v4/fb/a6/3b/fba63b0a-7aae-8f51-6a5c-aeab720396c6/source/146x146sr.jpg' />
						<p>{this.props.artistName}</p>
					</div>

					<div className={style.menu_select}>
						<ul>{tabs}</ul>
						<FontAwesome className={style.icons_phone} name="angle-down"/>
					</div>
				</div>
			</div>
		);
	}
}
