"use client"
import { useSelector, useDispatch } from "react-redux";
import { toggleClick } from "../../../app/store/features/toggleSlice";
import style from './modalCoin.module.scss'

export function ModalCoin({ id }): JSX.Element {
    
    return (
        <div className={style.modal__block} >
            <div>
                {id}
            </div>
        </div>
    )
}