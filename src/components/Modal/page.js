'use client'
import style from './page.module.css'
import { useRouter } from 'next/navigation'

export const Modal = ({children}) => {
    const router = useRouter();
    return(
        <>
            <div className={style.modal}>
                <div className={style.modalContent}>
                    {children}
                </div>                
                <Btn onClick={()=>{router.back()}} name={'Close'} />
            </div>
        </>
    )
}

export const Btn = ({onClick, name}) => {
    return(
        <>
            <button className={style.btn} onClick={onClick}>{name}</button>
        </>
    )
}