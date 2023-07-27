"use client";
import {useEffect,useState} from "react";
import {useSelector} from 'react-redux';
import {Pagination} from "../pagination/Pagination";
import style from "./CoinsApi.module.scss";

let PageSize: number = 10;

// const REQUEST_CHOICE = [
// 	{ur: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", completed: false},
// 	{ur: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur", completed: false},
// 	{ur: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=jpy", completed: false},
// 	{ur: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=etc", completed: false},
// ]

export function CoinsApi(): JSX.Element {
	const [apiName, setApiName] = useState<T[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	
	const filterCoins = useSelector(state => state.filter.filter)

	const handlePageChange = (currentPage): void => {
		setCurrentPage(currentPage);
	};
	useEffect(() => {
		const Request = async (): Promise<T> => {
			const data = await (
				await fetch(
					`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`
				)
			).json();
			const firstPageIndex = (currentPage - 1) * PageSize;
			const lastPageIndex = firstPageIndex + Math.floor(data.length / 10);
			// const lastPageIndex = firstPageIndex + PageSize
			const dataSlice: number[] = data.slice(
				firstPageIndex,
				lastPageIndex
			);
			setApiName(dataSlice);
		};
		Request();
	}, [currentPage]);

	return (
		<div>
			<ul className={style.items}>
				{apiName.map((el) => (
					<div className={style.block__list}>
						<li
							className={style.item__list}	
						>{el.name}<div>Current Price: {el.current_price}</div></li>
						<img src={`${el.image}`} className={style.back__img}></img>
					</div>
				))}
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
