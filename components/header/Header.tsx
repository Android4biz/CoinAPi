import React from 'react'
import style from './Header.module.css'

export 
function HeaderCoin(): JSX.Element {
    return (
        <div className={style.block__input}>
            <form>
                <input placeholder='Search Cryptocurrency' className={style.input}/>
            </form>
            <div className={style.search}></div>
        </div>
    )
}