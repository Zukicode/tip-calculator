import React from 'react';

//Styles
import styles from './Output.module.scss';
import { IValues } from 'models/models';

interface OutputProps {
	result: {
		tipAmount: string;
		total: string;
	};
	values: IValues;
	handleReset: () => void;
}

export const Output = ({ result, values, handleReset }: OutputProps) => {
	return (
		<div className={styles.output}>
			<div className={styles.result}>
				<div className={styles.info}>
					<div className={styles.header}>
						<p>Tip Amount</p>
						<span>/ person</span>
					</div>

					<h1>${result.tipAmount ? result.tipAmount : '0.00'}</h1>
				</div>

				<div className={styles.info}>
					<div className={styles.header}>
						<p>Total</p>
						<span>/ person</span>
					</div>

					<h1>${result.total ? result.total : '0.00'}</h1>
				</div>
			</div>

			<button
				type='button'
				onClick={handleReset}
				disabled={
					values.bill.billValue && values.people.peopleValue ? false : true
				}
				className={
					values.bill.billValue && values.people.peopleValue
						? styles.reset
						: styles.disabled
				}
			>
				RESET
			</button>
		</div>
	);
};
