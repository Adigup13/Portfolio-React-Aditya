import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const Content = () => {
  return (
    <motion.div 
       whileInView={{opacity:1, y:0}}
        initial= {{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className='border-b border-neutral-800 pb-20'>
        <h1
        
         className='my-10 text-center text-4xl'> Get in Touch</h1>
        <div className="text-center tracking-tighter">
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'> {CONTACT.phoneNo}</p>
            <p href = "#">{CONTACT.email}</p>
        </div>
    </motion.div>
  )
}

export default Content