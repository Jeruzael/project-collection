import style from './page.module.css'

const LoadingSkeleton = () => {
    return(
        <>
            <div className={style.loading}>
                <h1>Loading Skeleton</h1>
            </div>            
        </>
    )
}

export default function Loading(){
    return <LoadingSkeleton />
}