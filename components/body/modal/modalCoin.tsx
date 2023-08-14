"use client";
import style from "./modalCoin.module.scss";

export function ModalCoin({ id, cap, valuation, openClick }): JSX.Element {

	return (
		<div className={style.modal__block}>
			<div className={style.modal}>
				<button
					className={style.modal__img}
					onClick={openClick}
				></button>
				<div className={style.modal__item_block}>{id}</div>
			</div>
			<div className={style.module__cap}>Market Cap: {cap}</div>
			<div className={style.module__valuation}>
				Fully Diluted Valuation: {valuation}
			</div>
		</div>
	);
}
