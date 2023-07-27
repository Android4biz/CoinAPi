import style from './Coins.module.scss'
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react'
// import {setFilter} from '../../../app/store/features/filterSlice';

export function CoinsCrypto(): JSX.Element {

    // const [value, setValue] = useState('')

    // const dispatch = useDispatch()
    // const filterCoins = useSelector(state => state.filter.filter)
    // console.log(filterCoins, 'fcoins')
    // const handleChange = (e) => {
    //     setValue(e.target.value)
    //     dispatch(setFilter(e.target.value))
    // }

    return (
        <div className={style.coins__select}>
            <h3 className={style.title}>Coins</h3>
            <select
                className={style.select}
                // onChange={handleChange}
            >
                <option>All</option>
                <option>USD</option>
                <option>EUR</option>
                <option>JPY</option>
                <option>ETC</option>
            </select>
        </div>
    )
}
