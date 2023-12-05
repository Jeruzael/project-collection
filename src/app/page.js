'use client'
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import { Side, Body, Minis, TestBtn } from '../components/common'
import { projectImages, projects } from '@/data/data'


export default function Home() {  
  
  const project = projects.map((item, index) => <Minis
    src={projectImages[index]}
    alt="project"
    width={300}
    height={300}
  >{item}</Minis>)
  return (
    <main className={styles.main}>
      <Side>
        <h2>Mini Projects</h2>
      </Side>
      <Body>
        {project}
        <TestBtn testF={()=>{onTest([
          ...test,
          'testing'
        ])}}>Add</TestBtn>
      </Body>
    </main>
  )
}
