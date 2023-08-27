import React from "react";
import style from "./Pagination.module.scss";

interface Props {
	currentPage: number;
	totalPages: number;
	onPageChange: any
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
	const pageRange = [];
	for (let i = 1; i <= totalPages; i++) {
		pageRange.push(i);
	}
	return (
		<ul className={style.pagination__list}>
			{pageRange.map((page) => (
				<li key={page} onClick={() => onPageChange(page)} className={style.pagination__item}>
					<button className={style.btn}>{page}</button>
				</li>
			))}
		</ul>
	);
};
