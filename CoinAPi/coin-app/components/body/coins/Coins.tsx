import style from './Coins.module.scss'

export function CoinsCrypto(): JSX.Element {
    return (
        <div className={style.coins__select}>
            <h3 className={style.title}>Coins</h3>
            <select className={style.select}>
                <option>Choose category</option>
            </select>
        </div>
    )
}