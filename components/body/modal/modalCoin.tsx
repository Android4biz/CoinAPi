"use client";
import style from "./modalCoin.module.scss";

interface appProps {
	name: string;
	high: string;
	low: string;
	openClick?: any;
	id: string;
	current: string;
}

export function ModalCoin({
	name,
	high,
	low,
	openClick,
	current
}: appProps): JSX.Element {

	return (
		<div className={style.modal__block}>
			<div className={style.modal}>
				<button
					className={style.modal__img}
					onClick={openClick}
				></button>
				<div className={style.modal__item_block}>{name}</div>
			</div>
			<div className={style.module__cap}>
				High 24h: {high}
				</div>
			<div className={style.module__valuation}>
				Low 24h: {low}
			</div>
			<div className={style.module__valuation}>
				Current price: {current}
			</div>
			<div className={style.description}>
				<h2>description:</h2>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis non, iusto debitis ex doloribus itaque beatae necessitatibus deserunt soluta sunt nisi. Corrupti veniam fugiat ab molestias! Totam, ea dolorum! Maiores.</p>
			</div>
		</div>
	);
}
