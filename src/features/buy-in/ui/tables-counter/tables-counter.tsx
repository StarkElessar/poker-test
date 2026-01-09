import css from './tables-counter.module.scss';

import type { ChangeEvent } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import { Button, Input } from '@/shared/ui';

import { TABLES_MIN } from '../../model/constants';
import { InputRow } from '../input-row';

interface TablesCounterProps {
	value: number;
	onIncrement: () => void;
	onDecrement: () => void;
	onChange: (value: number) => void;
}

export const TablesCounter = ({
	value,
	onIncrement,
	onDecrement,
	onChange,
}: TablesCounterProps) => {
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = parseInt(e.target.value, 10);

		if (!isNaN(newValue)) {
			onChange(newValue);
		}
	};

	return (
		<InputRow>
			<Button
				fullWidth
				variant="secondary"
				className={css.counterButton}
				onClick={onDecrement}
				disabled={value <= TABLES_MIN}
			>
				<FiMinus />
			</Button>

			<Input
				label="Number of tables"
				type="number"
				value={value}
				onChange={handleInputChange}
				min={TABLES_MIN}
			/>

			<Button
				fullWidth
				variant="secondary"
				className={css.counterButton}
				onClick={onIncrement}
			>
				<FiPlus />
			</Button>
		</InputRow>
	);
};
