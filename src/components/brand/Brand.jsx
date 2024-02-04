import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './import';
import { motion, useInView, useAnimation } from "framer-motion";

const AniImage = (props) => {
  return (
    <motion.div variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, delay: 0.4 }}>
      <img src={props.src} alt={props.alt} />
    </motion.div>
  )
}

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <AniImage src={google} alt={"google"} />
      <AniImage src={slack} alt="slack" />
      <AniImage src={atlassian} alt={"atlassian"} />
      <AniImage src={dropbox} alt="dropbox" />
      <AniImage src={shopify} alt="shopify" />
    </div>
  )
}
export default Brand
