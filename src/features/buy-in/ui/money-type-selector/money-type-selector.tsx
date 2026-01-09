import css from './money-type-selector.module.scss';

import cn from 'classnames';

import { RadioGroup } from '@/shared/ui';

import { CASH_MONEY_BALANCE, type MoneyType, REAL_MONEY_BALANCE } from '../../model/constants';

interface MoneyTypeSelectorProps {
	typeMoney: MoneyType;
	amountValue: number;
	onChange: (value: MoneyType) => void;
}

const moneyOptions: { value: MoneyType; label: string }[] = [
	{ value: 'real', label: 'Use real money' },
	{ value: 'cash', label: 'Use cash money' },
];

export const MoneyTypeSelector = ({ typeMoney, onChange, amountValue }: MoneyTypeSelectorProps) => {
	return (
		<div className={css.container}>
			<RadioGroup name="moneyType" options={moneyOptions} value={typeMoney} onChange={onChange} />

			<hr className={css.separator}/>

			<div className={css.infoSection}>
				<div className={css.infoRow}>
					<div className={css.infoTag}>
						<img className={css.infoIcon} src="/icons/red-chip.svg" width={18} height={18} alt="red chip"/>
						<span className={css.infoLabel}>Game type:</span>
					</div>
					<span className={css.infoValue}>NL Hold’em  2/4</span>
				</div>
				<div className={css.infoRow}>
					<div className={css.infoTag}>
						<img className={css.infoIcon} src="/icons/gold-chip.svg" width={18} height={18} alt="gold chip"/>
						<span className={css.infoLabel}>Available balance:</span>
					</div>
				</div>
			</div>

			<div className={css.balances}>
				<div className={css.balanceRow}>
					<span className={css.label}>Real money:</span>
					<span className={cn(typeMoney === 'real' && css.valueActive)}>
						${REAL_MONEY_BALANCE}
					</span>
				</div>
				{typeMoney === 'cash' && (
					<div className={css.balanceRow}>
						<span className={css.label}>Cash money:</span>
						<span className={cn(typeMoney === 'cash' && css.valueActive)}>
							C${CASH_MONEY_BALANCE}
						</span>
					</div>
				)}
			</div>

			<div className={css.infoSection}>
				<div className={css.infoRow}>
					<div className={css.infoTag}>
						<img className={css.infoIcon} src="/icons/card.svg" width={18} height={18} alt="bank card"/>
						<span className={css.infoLabel}>You will be charged:</span>
					</div>
					<span className={css.infoValue}>${amountValue}</span>
				</div>
			</div>
		</div>
	);
};
