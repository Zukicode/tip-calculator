import React from 'react';

//Styles
import styles from './Entry.module.scss';

interface EntryProps {
	icon: string;
	value: string;
	error: boolean;
	setValue: (str: string) => void;
	title: string;
}

export const Entry = ({ icon, value, error, setValue, title }: EntryProps) => {
	return (
		<div className={styles.entry}>
			<div className={styles.header}>
				<p className={styles.title}>{title}</p>
				{error && <p className={styles.error}>Can't be zero</p>}
			</div>

			<div className={styles.input}>
				<img src={icon} alt='iconForInput' />
				<input
					type='text'
					className={error ? styles.wrong : ''}
					value={value}
					onChange={e => setValue(e.target.value)}
					placeholder='0'
				/>
			</div>
		</div>
	);
};
