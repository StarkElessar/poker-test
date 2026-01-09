import css from './input.module.scss';

import type { InputHTMLAttributes } from 'react';
import cn from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const Input = ({
	type = 'text',
	label,
	className,
	...props
}: InputProps) => {
	return (
		<span className={cn(css.inputWrapper, label && css.withLabel)} data-label={label}>
			<input className={cn(className, css.input, css[type])} type={type} {...props}/>
		</span>
	);
};
