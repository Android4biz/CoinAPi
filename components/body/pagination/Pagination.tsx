import React from "react";
import style from "./Pagination.module.scss";

export const Pagination = ({ currentPage, totalPages, onPageChange }: props) => {
	const pageRange = [];
	for (let i = 1; i <= totalPages; i++) {
		pageRange.push(i);
	}
	return (
		<ul className={style.pagination__list}>
			{pageRange.map((page) => (
				<li key={page} onClick={() => onPageChange(page)} className={style.pagination__item}>
					<button>{page}</button>
				</li>
			))}
		</ul>
	);
};
