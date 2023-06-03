import React, { useState, useEffect } from 'react';

//Styles
import styles from './Content.module.scss';

//Components
import { Incoming } from 'components/Incoming/Incoming';
import { Output } from 'components/Output/Output';
import { IValues } from 'models/models';
import { convertToNumber } from 'utils/convertToNumber';

const initStateValues = {
	bill: {
		billValue: '',
		billError: false,
	},
	people: {
		peopleValue: '',
		peopleError: false,
	},
};

const initStateResult = {
	tipAmount: '',
	total: '',
};

interface ResultModel {
	tipAmount: string;
	total: string;
}

export const Content = () => {
	const [values, setValues] = useState<IValues>(initStateValues);
	const [result, setResult] = useState<ResultModel>(initStateResult);
	const [activeTip, setActiveTip] = useState<string>('');

	const calculateTip = () => {
		if (
			!values.bill.billValue ||
			!values.people.peopleValue ||
			activeTip === ''
		)
			return;
		const tipPercentage = Number(activeTip) / 100;
		const activeTotal = Number(values.bill.billValue);
		const numberOfPeople = Number(values.people.peopleValue);

		const tipPerPerson = (activeTotal * tipPercentage) / numberOfPeople;
		const totalAmountPerson = activeTotal / numberOfPeople + tipPerPerson;

		setResult({
			tipAmount: convertToNumber(tipPerPerson.toString()),
			total: convertToNumber(totalAmountPerson.toString()),
		});
	};

	useEffect(() => {
		calculateTip();
	}, [values, activeTip]);

	const onChangeBill = (str: string) => {
		if (str.length === 0 || str === '') {
			setValues({ ...values, bill: { billError: true, billValue: str } });
			setResult({
				tipAmount: '0.00',
				total: '0.00',
			});
		} else {
			setValues({ ...values, bill: { billError: false, billValue: str } });
		}
	};

	const onChangePeople = (str: string) => {
		if (str.length === 0 || str === '') {
			setValues({
				...values,
				people: { peopleError: true, peopleValue: str },
			});
			setResult({
				tipAmount: '0.00',
				total: '0.00',
			});
		} else {
			setValues({
				...values,
				people: { peopleError: false, peopleValue: str },
			});
		}
	};

	const onChangeCustomTip = (tip: string) => setActiveTip(tip);
	const handleReset = () => {
		setValues(initStateValues);
		setResult(initStateResult);
		setActiveTip('');
	};

	return (
		<div className={styles.content}>
			<Incoming
				values={values}
				onChangeBill={onChangeBill}
				onChangePeople={onChangePeople}
				activeTip={activeTip}
				setActiveTip={setActiveTip}
				onChangeCustomTip={onChangeCustomTip}
			/>
			<Output result={result} values={values} handleReset={handleReset} />
		</div>
	);
};
