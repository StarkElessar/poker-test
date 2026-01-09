import css from './button.module.scss';

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary';
	fullWidth?: boolean;
	width?: string | number;
	children: ReactNode;
}

export const Button = ({
	variant = 'primary',
	fullWidth = false,
	type = 'button',
	children,
	width,
	className,
	...props
}: ButtonProps) => {
	return (
		<button
			type={type}
			style={{ width }}
			className={cn(css.button, css[variant], fullWidth && css.fullWidth, className)}
			{...props}
		>
			<span>{children}</span>
		</button>
	);
};
