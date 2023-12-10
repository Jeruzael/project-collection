'use client'
import { Modal, Btn } from "@/components/Modal/page.js"

export default function Login(){    
    return (
        <>
            <Modal>                
                <h1>Login</h1>                
                <Btn name={'Login'} onClick={()=>{console.log('worked')}} />
            </Modal>
        </>
    )
}