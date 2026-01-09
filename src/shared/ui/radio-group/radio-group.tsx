import css from './radio-group.module.scss';

import cn from 'classnames';

interface RadioOption<T extends string> {
	value: T;
	label: string;
}

interface RadioGroupProps<T extends string> {
	name: string;
	options: RadioOption<T>[];
	value: T;
	onChange: (value: T) => void;
	className?: string;
}

export const RadioGroup = <T extends string>({
	name,
	options,
	value,
	onChange,
	className,
}: RadioGroupProps<T>) => {
	return (
		<div className={cn(css.radioGroup, className)}>
			{options.map(option => (
				<label key={option.value} className={css.radioLabel}>
					<input
						type="radio"
						name={name}
						value={option.value}
						checked={value === option.value}
						onChange={() => onChange(option.value)}
						className={css.radioInput}
					/>
					<span className={css.radioCustom} />
					<span className={css.radioText}>{option.label}</span>
				</label>
			))}
		</div>
	);
};
