import {
    ResponsiveContainer, 
    ResponsiveHeader, 
    ResponsiveHero,
    ResponsiveBody,
} from '@/components/custom'
import Link from 'next/link'

export default function Custom(){
    return(
        <>
            <ResponsiveContainer>
                <ResponsiveHeader logo={'LOGO'}>
                    <Link href={"/"}>About</Link>
                    <Link href={"/"}>Sign in</Link>
                    <Link href={"/"}>Sign up</Link>
                </ResponsiveHeader>
                <ResponsiveBody>
                    <h1>test</h1>
                </ResponsiveBody>
            </ResponsiveContainer>
        </>
    )
}