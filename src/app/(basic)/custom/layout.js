import {
    ResponsiveContainer, 
    ResponsiveHeader, 
    ResponsiveHero,
    ResponsiveBody,
    ResponsiveFooter,
    Button
} from '@/components/custom'
import Link from 'next/link'

export const test = () => {
    console.log('test');
}

export default function CustomLayout({children}){
    return(
        <>
            <ResponsiveContainer>
                <ResponsiveHeader logo={'Jeruzael'}>
                    <Link href={'/custom/projects'}>Projects</Link>
                    <Link href={'/custom/contacts'}>Contact</Link>
                    <Link href={'/custom/resume'}>Resume</Link>                    
                </ResponsiveHeader>
                <ResponsiveBody>
                    {children}
                </ResponsiveBody>                
            </ResponsiveContainer>
            <ResponsiveFooter>
                <h1>Footer</h1>
            </ResponsiveFooter>
        </>
    )
}