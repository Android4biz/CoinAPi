"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "../pagination/Pagination";
import { ModalCoin } from "../modal/modalCoin";
import style from "./CoinsApi.module.scss";
import { toggleClickOpen } from "../../../app/store/features/toggleSlice";
import { RootState } from "../../../app/store/index";

let PageSize: number = 10;

interface apiTs {
	id: string;
	name: string;
	market_cap: string;
	fully_diluted_valuation: string;
	current_price: string;
	image: HTMLImageElement;
	high_24h: string;
	low_24h: string;
}

interface fullTs {
	name: string;
	current_price: string;
	id: string;
	image: HTMLImageElement;
}

export function CoinsApi(): JSX.Element {
	const [apiName, setApiName] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [fullData, setFullData] = useState([]);

	const filterCoins = useSelector((state: RootState) => state.filter.filter);
	const filterSelectCoins = useSelector(
		(state: RootState) => state.selectCoins.option
	);
	const toggleCoins = useSelector((state: RootState) => state.toggle.toggle);
	const toggleCoinsId = useSelector(
		(state: RootState) => state.toggle.modalId
	);

	const dispatch = useDispatch();

	const handlePageChange = (currentPage: number): void => {
		setCurrentPage(currentPage);
	};

	const Request = async () => {
		const data = await (
			await fetch(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${filterSelectCoins}`
			)
		).json();
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + Math.floor(data.length / 10);
		const dataSlice = data.slice(firstPageIndex, lastPageIndex);
		setApiName(dataSlice);
		setFullData(data);
	};

	useEffect(() => {
		Request();
	}, [currentPage, filterSelectCoins]);

	const openClick = (id: string): void => {
		dispatch(toggleClickOpen(id));
	};

	return (
		<div className={style.block__items}>
			<ul className={style.items}>
				{!filterCoins
					? apiName.map((el: apiTs) => (
							<div
								className={
									toggleCoins
										? style.block__list_active
										: style.block__list
								}
								key={el.id}
							>
								{el.id === toggleCoinsId && toggleCoins ? (
									<ModalCoin
										id={toggleCoinsId}
										high={el.high_24h}
										low={el.low_24h}
										openClick={openClick}
										name={el.name}
										current={el.current_price}
									/>
								) : (
									false
								)}
								<li
									className={
										toggleCoins
											? style.item__list_active
											: style.item__list
									}
									id={el.id}
									onClick={() => openClick(el.id)}
								>
									<div className={style.name__element}>
										{el.name}
									</div>
									<div className={style.name__element}>
										Current Price: {el.current_price}
									</div>
								</li>
								<img
									onClick={() => openClick(el.id)}
									src={`${el.image}`}
									className={
										toggleCoins
											? style.back__img_active
											: style.back__img
									}
								></img>
							</div>
					  ))
					: fullData.map((el: fullTs) =>
							el.name.toLowerCase() ===
							filterCoins.toLowerCase() ? (
								<div key={el.id} className={style.block__list}>
									<div className={style.name__element}>
										{el.name}
									</div>
									<div className={style.name__element}>
										{el.current_price}
									</div>
									<img
										src={`${el.image}`}
										className={style.back__img}
									></img>
								</div>
							) : (
								""
							)
					  )}
			</ul>
			<Pagination
				currentPage={currentPage}
				totalPages={PageSize}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}
