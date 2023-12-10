import Link from 'next/link'
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
                            <Link href={'/custom'}>{logo}</Link>
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

export const ResponsiveFooter = ({children}) => {
    return (
        <>
            <div className={style.footer}>
                {children}
            </div>
        </>
    )
}

export const Button = ({children, onHit}) => {
    return (
        <>
            <div className={style.button}>
                <button onClick={onHit}>
                    {children}
                </button>
            </div>
        </>
    )
}