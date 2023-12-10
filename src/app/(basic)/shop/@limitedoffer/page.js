import style from './page.module.css'

export default function LimitedOffer({children}){
    return(
        <>
            <div className={style.limitedOffer}>
                {children}
            </div>
        </>
    )
}