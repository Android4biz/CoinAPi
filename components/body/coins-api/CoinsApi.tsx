"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "../pagination/Pagination";
import { ModalCoin } from "../modal/modalCoin";
import style from "./CoinsApi.module.scss";
import { toggleClickOpen } from "../../../app/store/features/toggleSlice";

let PageSize: number = 10;

export function CoinsApi(): JSX.Element {
	const [apiName, setApiName] = useState([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [fullData, setFullData] = useState([]);

	const filterCoins = useSelector((state) => state.filter.filter);
	const filterSelectCoins = useSelector((state) => state.selectCoins.option);
	const toggleCoins = useSelector((state) => state.toggle.toggle);
	const toggleCoinsId = useSelector((state) => state.toggle.modalId)

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

	const openClick = (id) => {
		dispatch(toggleClickOpen(id));
	};

	return (
		<div className={style.block__items} >
			<ul className={style.items}>
				{!filterCoins
					? apiName.map((el) => (
            <div className={toggleCoins ? style.block__list_active : style.block__list} key={el.id} >
                { el.id === toggleCoinsId && toggleCoins ? <ModalCoin id={toggleCoinsId} cap={el.market_cap} valuation={el.fully_diluted_valuation} openClick={openClick}/> : false }
								<li className={ toggleCoins ? style.item__list_active : style.item__list} id={el.id} onClick={() => openClick(el.id)}>
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
									className={toggleCoins ? style.back__img_active : style.back__img}
								></img>
							</div>
					  ))
					: fullData.map((el) =>
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
                ''
              )
					  )}
			</ul>
			<Pagination
				value={apiName}
				currentPage={currentPage}
				totalPages={PageSize}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}
