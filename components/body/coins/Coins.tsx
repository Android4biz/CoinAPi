import style from "./Coins.module.scss";
import { useState } from 'react'
import { toggleCoins } from '../../../app/store/features/toggleSlice'
import { setFilter } from '../../../app/store/features/filterSlice'
import {useDispatch, useSelector} from "react-redux";

export function CoinsCrypto(): JSX.Element {

  const [value, setValue] = useState('')
  const [tgl, setTgl] = useState(false)
  
  const dispatch = useDispatch()
  // const toggleFnState = useSelector(state => state.toggle.toggle)
  // const filterFnState = useSelector(state => state.filter.filter)
  // console.log(toggleFnState, 'this toggle <<<---')
  // console.log(value, 'this value <<<---')
  // console.log(filterFnState, 'this filterFnState <<<---')

  const handleChange = (e): void => {
    setValue(e.target.value)
  }

  const handleClick = (e) => {
    // setTgl(!tgl)
    // console.log(dispatch(toggleCoins(tgl)))
    dispatch(setFilter(value))
  }

	return (
		<div className={style.coins__select}>
			<h3 className={style.title}>Coins</h3>
			<select className={style.select} onChange={handleChange}>
				<option onClick={handleClick}>USD</option>
				<option onClick={handleClick} >EUR</option>
				<option onClick={handleClick}>JPY</option>
				<option onClick={handleClick}>ETC</option>
			</select>
		</div>
	);
}
