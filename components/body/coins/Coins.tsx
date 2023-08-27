import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../app/store/features/filterSlice";
import { selectCoins } from "../../../app/store/features/filterSelectSlice";
import style from "./Coins.module.scss";

export function CoinsCrypto(): JSX.Element {
	const [value, setValue] = useState("")

	const dispatch = useDispatch();

	const handleChange = (e: any): void => {
		setValue(e.target.value);
		dispatch(selectCoins(e.target.value));
	};

	const handleClick = () => {
		dispatch(selectCoins(value));
	};

	return (
		<div className={style.coins__select}>
			<h3 className={style.title}>Coins</h3>
			<select
				className={style.select}
				onChange={handleChange}
				value={value}
			>
				<option onClick={handleClick} className={style.option__item}>USD</option>
				<option onClick={handleClick} className={style.option__item}>EUR</option>
				<option onClick={handleClick} className={style.option__item}>JPY</option>
			</select>
		</div>
	);
}
