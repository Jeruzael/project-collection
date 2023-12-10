'use client'
import {
    ResponsiveContainer, 
    ResponsiveHeader, 
    ResponsiveHero,
    ResponsiveBody,
    ResponsiveFooter,
    Button
} from '@/components/custom'
import Link from 'next/link'

export default function Custom(){
    return(
        <>
            <h1>Custom</h1>
            <Button onHit={sample}>Test</Button>
        </>
    )
}

const sample = () => {
    console.log('test');
}