import React from 'react'
import style from './Header.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import {setFilter} from '../../app/store/features/filterSlice'

export function HeaderCoin(): JSX.Element {

    const [value, setValue] = useState('')

    const dispatch = useDispatch()
    // const filterCoin = useSelector(state => state.filter.filter)
    // console.log(filterCoin, 'filtercoin<<<----')
    const handleChange = (e) => {
        setValue(e.target.value)
        dispatch(setFilter(e.target.value))
    }

    return (
        <div className={style.block__input}>
            <form>
                <input
                    placeholder='Search Cryptocurrency'
                    className={style.input}
                    onChange={handleChange}
                    value={value}
                />
            </form>
            <div className={style.search}></div>
        </div>
    )
}
