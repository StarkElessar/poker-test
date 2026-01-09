import { useState } from 'react';

import type { MoneyType } from './constants';
import { AMOUNT_MAX, AMOUNT_MIN, TABLES_MIN } from './constants';

export const useBuyIn = () => {
	const [moneyType, setMoneyType] = useState<MoneyType>('real');
	const [amount, setAmountState] = useState(AMOUNT_MIN);
	const [numberOfTables, setNumberOfTables] = useState(TABLES_MIN);

	return {
		moneyType,
		setMoneyType,
		amount,
		setAmount: (value: number) => {
			const clampedValue = Math.min(Math.max(value, AMOUNT_MIN), AMOUNT_MAX);
			setAmountState(clampedValue);
		},
		setMin: () => {
			setAmountState(AMOUNT_MIN);
		},
		setMax: () => {
			setAmountState(AMOUNT_MAX);
		},
		numberOfTables,
		incrementTables: () => {
			setNumberOfTables(prev => prev + 1);
		},
		decrementTables: () => {
			setNumberOfTables(prev => Math.max(prev - 1, TABLES_MIN));
		},
		setTables: (value: number) => {
			const validValue = Math.max(Math.floor(value), TABLES_MIN);
			setNumberOfTables(validValue);
		},
		handleCancel: () => {
			alert('Canceled');
		},
		handleOk: () => {
			alert(
				JSON.stringify(
					{
						moneyType,
						amount,
						numberOfTables,
					},
					null,
					4
				)
			);
		},
	};
};
