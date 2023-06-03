import React from 'react';

//Styles
import styles from './App.module.scss';
import { Header } from 'components/Header/Header';
import { Content } from 'components/Content/Content';

export const App = () => {
	return (
		<div className={styles.App}>
			<Header />
			<Content />
		</div>
	);
};
