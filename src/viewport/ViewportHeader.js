import React from 'react';
import FontAwesome from 'react-fontawesome';
import style from './viewport.css';
import UserAvatar from './UserAvatar.js';

export default class ViewportHeader extends React.Component{
	render() {
		// TODO: buscar dados do usuário
		const userName = 'GUILHERME STOLLMEIER';

		return(
			<div className={style.viewport_header}>
				<div className={style.viewport_content}>
					<div className={style.viewport_icons}>
						<FontAwesome name='user-circle' className={style.icons_web} />
						<FontAwesome name='comments' className={style.icons_web} />
						<FontAwesome name='bell' className={style.icons_web_phone} />
					</div>

					<div className={style.user_avatar}>
						<UserAvatar/>
					</div>

					<FontAwesome className={style.icons_phone} name="angle-down"/>
					<p>{userName}</p>
				</div>
			</div>
		)
	}
}