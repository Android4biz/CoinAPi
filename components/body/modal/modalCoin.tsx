"use client";
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	Tooltip,
	XAxis,
	YAxis
} from "recharts";
import style from "./modalCoin.module.scss";

interface appProps {
	name: string;
	cap: string;
	valuation: string;
	openClick?: any;
	id: string;
}

export function ModalCoin({
	name,
	cap,
	valuation,
	openClick
}: appProps): JSX.Element {

	const data = [
		{
			name: "Page A",
			uv: 30,
			pv: valuation,
			amt: 2400
		},
		{
			name: "Page B",
			uv: 40,
			pv: valuation,
			amt: 2400
		},
		{
			name: "Page C",
			uv: 50,
			pv: valuation,
			amt: 2400
		}
	];
	// 
	// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10
	// где то здесь API??
	// 

	return (
		<div className={style.modal__block}>
			<div className={style.modal}>
				<button
					className={style.modal__img}
					onClick={openClick}
				></button>
				<div className={style.modal__item_block}>{name}</div>
			</div>
			<div className={style.module__cap}>Market Cap: {cap}</div>
			<div className={style.module__valuation}>
				Fully Diluted Valuation: {valuation}
			</div>
			<LineChart
				width={400}
				height={400}
				data={data}
				margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line
					type="monotone"
					dataKey="pv"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>
				<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
			</LineChart>
		</div>
	);
}
