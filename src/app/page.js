'use client'
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import { Side, Body, Minis, TestBtn } from '../components/common'
import { projectImages, projects } from '@/data/data'
import Link from 'next/link'


export default function Home() {  
  
  const project = projects.map((item, index) => <Minis
    src={projectImages[index]}
    alt="project"
    width={300}
    height={300}
    href={`/${item}`}
  >{item}</Minis>)
  return (
    <main className={styles.main}>
      <Side>
        <h2>MINI PROJECTS</h2>
        <p>
        These are my mini-projects that I created to practice and demonstrate my skills. 
        You are free to try all the web apps here and use them for your benefit. 
        </p>
        <br></br>
        <p>
        Some of the applications here may help your studies because I 
        have included some explanations and simple documentation for each app.
        You can also base your next project on these by cloning them from my repository.
        </p>
        <br></br>
        <p>
          If you want to contribute or have any questions about this page feel
          free to contact me at any platform provided below.
        </p>
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

