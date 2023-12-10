import style from './page.module.css'
import Image from 'next/image'
import Featured from './@featured/page'
import LimitedOffer from './@limitedoffer/page'

const Items = () => {
    return(
        <>
            <div className={style.item}>
                <Image 
                    src={''}
                    width={200}
                    height={200}
                    alt={''}
                />
            </div>
        </>
    )
}

export default function Shop(){
    return(
        <>                    
            <Featured />
            <LimitedOffer>
                <Items />
            </LimitedOffer>
        </>
    )
}