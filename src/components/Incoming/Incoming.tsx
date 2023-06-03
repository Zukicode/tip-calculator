import React from 'react';

//Styles
import styles from './Incoming.module.scss';

//Components
import { Entry } from 'components/Entry/Entry';

//Icons
import dollarIcon from 'images/icon-dollar.svg';
import personIcon from 'images/icon-person.svg';

//Model
import { IValues } from 'models/models';

interface IncomingProps {
	values: IValues;
	onChangeBill: (str: string) => void;
	onChangePeople: (str: string) => void;
	activeTip: string;
	setActiveTip: (tip: string) => void;
	onChangeCustomTip: (tip: string) => void;
}

export const Incoming = ({
	onChangeBill,
	onChangePeople,
	values,
	activeTip,
	setActiveTip,
	onChangeCustomTip,
}: IncomingProps) => {
	return (
		<div className={styles.incoming}>
			<div className={styles.bill}>
				<Entry
					icon={dollarIcon}
					value={values.bill.billValue}
					error={values.bill.billError}
					setValue={onChangeBill}
					title='Bill'
				/>
			</div>
			<div className={styles.selectTip}>
				<div className={styles.header}>
					<p>Select Tip %</p>
				</div>

				<div className={styles.buttons}>
					{['5', '10', '15', '25', '50'].map(button => (
						<button
							key={button}
							onClick={() => setActiveTip(button)}
							className={
								activeTip === button
									? `${styles.tipButton} ${styles.active}`
									: styles.tipButton
							}
						>
							{button}%
						</button>
					))}
					<input
						type='text'
						onChange={e => onChangeCustomTip(e.target.value)}
						className={
							false
								? `${styles.tipButtonCustom} ${styles.focus}`
								: styles.tipButtonCustom
						}
						placeholder='Custom'
					/>
				</div>
			</div>

			<div className={styles.people}>
				<Entry
					icon={personIcon}
					value={values.people.peopleValue}
					error={values.people.peopleError}
					setValue={onChangePeople}
					title='Number of people'
				/>
			</div>
		</div>
	);
};
