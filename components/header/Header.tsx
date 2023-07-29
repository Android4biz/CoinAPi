import React from "react";
import style from "./Header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setFilter } from "../../app/store/features/filterSlice";

export function HeaderCoin(): JSX.Element {
	const [value, setValue] = useState("");

	const dispatch = useDispatch();

	const handleChange = (e): void => {
		setValue(e.target.value);
		dispatch(setFilter(e.target.value));
	};

	const handleSubmit = (e): void => {
		e.preventDefault();
	};

	return (
		<div className={style.block__input}>
			<form onSubmit={handleSubmit} className={style.form}>
				<input
					placeholder="Search Cryptocurrency"
					className={style.input}
					onChange={handleChange}
					value={value}
				/>
			</form>
		</div>
	);
}
