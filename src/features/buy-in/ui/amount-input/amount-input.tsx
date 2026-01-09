import css from './amount-input.module.scss';

import type { ChangeEvent, CSSProperties } from 'react';

import { Button } from '@/shared/ui';
import { Input } from '@/shared/ui/input';

import { AMOUNT_MAX, AMOUNT_MIN, AMOUNT_STEP } from '../../model/constants';
import { InputRow } from '../input-row';

interface AmountInputProps {
	value: number;
	onChange: (value: number) => void;
	onMin: () => void;
	onMax: () => void;
}

export const AmountInput = ({ value, onChange, onMin, onMax }: AmountInputProps) => {
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = parseFloat(e.target.value);
		if (!isNaN(newValue)) {
			onChange(newValue);
		}
	};

	const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(parseFloat(e.target.value));
	};

	const sliderPercentage = ((value - AMOUNT_MIN) / (AMOUNT_MAX - AMOUNT_MIN)) * 100;

	return (
		<div className={css.container}>
			<InputRow>
				<Button fullWidth variant="primary" onClick={onMin}>
					Min ${AMOUNT_MIN}
				</Button>

				<div className={css.inputWrapper}>
					<Input
						type="number"
						value={value}
						label="Amount"
						onChange={handleInputChange}
						min={AMOUNT_MIN}
						max={AMOUNT_MAX}
						step={AMOUNT_STEP}
						className={css.input}
					/>
				</div>

				<Button fullWidth variant="primary" onClick={onMax}>
					Max ${AMOUNT_MAX}
				</Button>
			</InputRow>

			<div className={css.sliderWrapper}>
				<input
					type="range"
					min={AMOUNT_MIN}
					max={AMOUNT_MAX}
					step={AMOUNT_STEP}
					value={value}
					onChange={handleSliderChange}
					className={css.slider}
					style={
						{
							'--slider-percentage': `${sliderPercentage}%`,
						} as CSSProperties
					}
				/>
			</div>
		</div>
	);
};
