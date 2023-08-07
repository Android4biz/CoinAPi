"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "../pagination/Pagination";
import style from "./CoinsApi.module.scss";

let PageSize: number = 10;

export function CoinsApi(): JSX.Element {
	const [apiName, setApiName] = useState([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [fullData, setFullData] = useState([]);

	const filterCoins = useSelector((state) => state.filter.filter);
	const filterSelectCoins = useSelector((state) => state.selectCoins.option)

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
		const dataSlice = data.slice(
			firstPageIndex,
			lastPageIndex
		);
		setApiName(dataSlice);
		setFullData(data);
	};

	useEffect(() => {
		Request()
	}, [currentPage, filterSelectCoins]);

	return (
		<div className={style.block__items}>
			<ul className={style.items}>
				{!filterCoins
					? apiName.map((el) => (
							<div className={style.block__list}>
								<li className={style.item__list}>
									<div className={style.name__element}>{el.name}</div>
									<div className={style.name__element}>Current Price: {el.current_price}</div>
								</li>
								<img
									src={`${el.image}`}
									className={style.back__img}
								></img>
							</div>
					  ))
					: fullData.map((el) =>
							el.name.toLowerCase() === filterCoins.toLowerCase() ? (
								<div id={el.id} className={style.block__list}>
									<div className={style.name__element}>{el.name}</div>
									<div className={style.name__element}>{el.current_price}</div>
									<img
										src={`${el.image}`}
										className={style.back__img}
									></img>
								</div>
							) : (
								""
							)
					  )}
				<Pagination
					value={apiName}
					currentPage={currentPage}
					totalPages={PageSize}
					onPageChange={handlePageChange}
				/>
			</ul>
		</div>
	);
}
