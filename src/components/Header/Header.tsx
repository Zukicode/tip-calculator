import React from 'react';

//Styles
import styles from './Header.module.scss';

//Image
import logo from 'images/logo.svg';

export const Header = () => {
	return (
		<div className={styles.header}>
			<img src={logo} alt='logo' />
		</div>
	);
};
