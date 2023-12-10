import style from './page.module.css'
import Link from "next/link"


const Header = () => {
    return(
        <div className={style.shopHeaderLayout}>            
            <Link href={'/'}>
                <h1>MINI PROJECT SHOP</h1>
            </Link>
            <Headernav />
        </div>
    )
}

const Headernav = () => {
    return(
        <>
            <div className={style.shopHeaderNavLayout}>
                <Link href={"/shop"}>Home</Link>
                <Link href={"/"}>Be a seller</Link>
                <Link href={"/shop/help"}>Help</Link>
                <Link href={"/"}>Sign up</Link>
                <Link href={"/"}>Login</Link>
            </div>
        </>
    )
}

const Banner = () => {
    return(
        <>
            <div className={style.shopBanner}>
                <h1>BANNER</h1>
            </div>
        </>
    )
}

const Body = ({children}) => {
    return(
        <>
            <div className={style.body}>
                <Ads>Ads</Ads>
                <div className={style.content}>
                    {children}
                </div>                
                <Ads>Ads</Ads>
            </div>
        </>
    )
}

const Footer = ({children}) => {
    return(
        <>
            <div className={style.footer}>
                {children}
            </div>
        </>
    )
}

const Ads = ({children}) => {
    return(
        <>
            <div className={style.ads}>
                {children}
            </div>
        </>
    )
}

export default function ShopLayout(props){
    return(
        <>
            <div className={style.shopLayout}>
                <Header />
                <Banner />
                <Body>                    
                    {props.children}                    
                </Body>       
                <Footer>
                    <h1>Footer</h1>
                </Footer>            
            </div>        
        </>
    )
} 