import css from './app.module.scss';

import { AmountInput, MoneyTypeSelector, TablesCounter, useBuyIn } from '@/features/buy-in';
import { Button } from '@/shared/ui';

export const App = () => {
	const {
		moneyType,
		setMoneyType,
		amount,
		setAmount,
		setMin,
		setMax,
		numberOfTables,
		incrementTables,
		decrementTables,
		setTables,
		handleCancel,
		handleOk,
	} = useBuyIn();

	return (
		<div className={css.overlay}>
			<div className={css.modal}>
				<div className={css.header}>
					<h2 className={css.title}>Buy-In</h2>
					<button className={css.closeButton} onClick={handleCancel} aria-label="Close">
						<img src="/icons/cross.svg" alt="Close" />
					</button>
				</div>

				<div className={css.content}>
					<MoneyTypeSelector
						typeMoney={moneyType}
						onChange={setMoneyType}
						amountValue={amount}
					/>

					<AmountInput
						value={amount}
						onChange={setAmount}
						onMin={setMin}
						onMax={setMax}
					/>

					<Button variant="secondary" fullWidth>
						Auto Buy-In and Auto Rebuy
					</Button>

					<TablesCounter
						value={numberOfTables}
						onIncrement={incrementTables}
						onDecrement={decrementTables}
						onChange={setTables}
					/>
				</div>

				<div className={css.footer}>
					<Button fullWidth variant="secondary" onClick={handleCancel}>
						Cancel
					</Button>
					<Button fullWidth variant="primary" onClick={handleOk}>
						Ok
					</Button>
				</div>
			</div>
		</div>
	);
};
