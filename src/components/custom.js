import style from '../css/sample.module.css'
import Image from 'next/image'

export const ResponsiveContainer = ({children}) => {
    return (
        <>
            <div className={style.container}>
                {children}
            </div>
        </>
    )
}

export const ResponsiveHeader = ({children, logo}) => {
    return (
        <>
            <header>
                <div className={style.header}>
                    <div className={style.header__container}>
                        <div className={style.header__logo}>
                            {logo}
                        </div>
                        <div className={style.header__navs}>
                            {children}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export const ResponsiveHero = ({src, w, h, alt}) => {
    return (
        <>
            <div className={style.hero_image}>
                <Image 
                    src={src}
                    width={w}
                    height={h}
                    alt={alt}
                />
            </div>
        </>
    )
}

export const ResponsiveBody = ({children}) => {
    return (
        <>
            <div className={style.body}>
                 {children}
            </div>
        </>
    )
}