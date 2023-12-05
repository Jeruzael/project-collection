'use client'
import style from '../css/common.module.css'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

const SideCont = ({children}) => {
    return(
        <>
            <div className={style.sideCont}>
                {children}
            </div>
        </>
    )
}
export function Side({children}){
    return(
        <>
            <div className={style.side}>            
                <FixedContent>
                    <SideCont>
                        {children}
                    </SideCont>
                </FixedContent>
            </div>    
        </>
    )
}

export function Body({children}){
    return(
        <>
            <div className={style.body}>
                {children}
            </div>
        </>
    )
}

export function FixedContent({children}){
    return(
        <>
            <div className={style.sideContent}>
                {children}
            </div>
        </>
    )
}

export const Minis = ({children, src, width, height, alt}) => {
    return (
        <>
            <div className={style.minis}>
                <div className={style.minisimg}>                    
                    <Image 
                    className={style.minisimgitem}
                        src={src}
                        width={width}
                        height={height}
                        alt={alt}
                    />
                    <h3 className={style.ministxt}>{children}</h3>                                                                      
                </div>                           
            </div>
        </>
    )
}


export const TestBtn = ({testF, children}) => {         
    return (
        <>
            <div className={style.testBtn}>
                <button onClick={testF}>{children}</button>
            </div>
        </>
    )
}


