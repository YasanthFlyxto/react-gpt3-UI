import React from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content' >
        <motion.h1
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        className='gradient__text'> Let’s Build Something amazing  </motion.h1>
        <motion.h1
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.4 }}
        className='gradient__text'> with GPT-3 OpenAI </motion.h1>
        
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address'></input>
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
        <img src={people} alt='people' />
        <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
       
      </div>
      
      <div className="gpt3__header-image">
      <motion.img
        variants={{
          hidden: { opacity: 0, scale:0.8 },
          visible: { opacity: 1, scale:1  },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.4 }}
        src={ai} 
        alt='ai' />
        </div>
    </div>
  )
}

export default Header
