import React, { useMemo } from "react";

interface usePagin {
	totalCount: number;
	pageSize: number;
	siblingCount: number;
	currentPage: number;
}

interface rangetype {
	start: number;
	end: number;
}

export const DOTS: string = "...";

const range = ({ start, end }: rangetype) => {
	let length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
	totalCount,
	pageSize,
	siblingCount = 1,
	currentPage
}: usePagin) => {
	const paginationRange = useMemo(() => {
		const totalPageCount: number = Math.ceil(totalCount / pageSize);
		const totalPageNumbers: number = siblingCount + 5;

		if (totalPageNumbers >= totalPageCount) {
			return range(1, totalPageCount);
		}

		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(
			currentPage + siblingCount,
			totalPageCount
		);

		const shouldShowLeftDots: boolean = leftSiblingIndex > 2;
		const shouldShowRightDots: boolean =
			rightSiblingIndex < totalPageCount - 2;

		const firstPageIndex: number = 1;
		const lastPageIndex: number = totalPageCount;

		if (!shouldShowLeftDots && shouldShowRightDots) {
			let leftItemCount: number = 3 + 2 * siblingCount;
			let leftRange = range(1, leftItemCount);
			return [...leftRange, DOTS, totalPageCount];
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			let rightItemCount = 3 + 2 * siblingCount;
			let rightRange = range(
				totalPageCount - rightItemCount + 1,
				totalPageCount
			);
			return [firstPageIndex, DOTS, ...rightRange];
		}

		if (shouldShowLeftDots && shouldShowRightDots) {
			let middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
		}
	}, [totalCount, pageSize, siblingCount, currentPage]);
	return paginationRange;
};
