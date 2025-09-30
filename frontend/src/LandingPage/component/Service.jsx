import React from 'react'
import ServiceInfo from '../../utils/ServiceInfo'
import {delay, motion, scale} from 'motion/react'
function Service() {

    const services=[
        {
          url:"/img1.png",
          title:"Summary",
          para:"Automatically condenses a number of comments into clear and concise summaries which saves time by delivering quick insights from large amounts of content."
        },
        {
          url:"/img4.jpeg",
          title:"Analysis",
          para:"The sentiment analysis results are visualized using a pie chart, dividing comments into positive, negative, and neutral sections.Each slice of the pie chart represents the proportion of sentiments, making it easy to understand the overall mood at a glance."
        },
        {
          url:"/img3.jpeg",
          title:"Word Cloud",
          para:"Transforms text data into a visual word cloud where word size reflects frequency.Provides an engaging way to explore key themes and patterns in the text."
        }
    ]
    const containerVariants = {
  hidden: {},
  visible: {
    transition: {
        delay:0.5,
      staggerChildren: 0.5, 
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 200, }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};
  return (
    <div className='w-full h-fit dark:bg-[#020003]'>
        <h1 className='text-5xl  w-full font-bold text-center tracking-wide  dark:text-neutral-300 pt-3'> Services</h1>
   <motion.div
      className="w-full h-fit p-5 pt-14  flex items-center justify-between gap-14 md:gap-7 md:justify-center flex-col md:flex-row"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {services.map((s, index) => (
        <motion.div key={index} variants={childVariants}>
          <ServiceInfo url={s.url} title={s.title} para={s.para} />
        </motion.div>
      ))}
    </motion.div>
    </div>
  )
}

export default Service
