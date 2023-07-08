import {HeaderCoin} from '../components/header/Header'
import {CoinsCrypto} from '../components/body/coins/Coins'
import {CoinsApi} from '../components/body/coins-api/CoinsApi'
import style from './page.module.scss'

export default function Home() {
	return (
		<div className={style.home}>
			<div className={style.crypto__block}>
				<HeaderCoin/>
				<CoinsCrypto/>
				<CoinsApi/>
			</div>
		</div>
	)
}