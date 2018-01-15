import React from 'react';
import styles from './viewport.css';
import image from '../images/userAvatar.jpg';

export default class UserAvatar extends React.Component{
	render() {
		return(
			<img className={styles.user_image} alt="" src={image} />
		)
	}
}