import css from './input-row.module.scss';

import type { PropsWithChildren } from 'react';

export const InputRow = ({ children }: PropsWithChildren) => {
	return <div className={css.row}>{children}</div>;
};
