import style from './page.module.css'

export default function TodoLayout({children}) {
    return (
        <>
            <section className={style.main}>                
                {children}
            </section>
        </>
    )
}

