"use client";
import { useEffect, useState, useMemo } from "react";
import { Pagination } from "../pagination/Pagination";
import style from "./CoinsApi.module.scss";

let PageSize: number = 10;

export function CoinsApi(): JSX.Element {
	const [apiName, setApiName] = useState<T[]>([]);
	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (currentPage): void => {
		setCurrentPage(currentPage);
	};

	useEffect(() => {
		const Request = async (): Promise<T> => {
			const data = await (
				await fetch(
					"https://api.coingecko.com/api/v3/coins/categories/list"
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
			<ul>
				{apiName.map((el, index) => (
					<li className={style.item__list}>{el.name}</li>
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
