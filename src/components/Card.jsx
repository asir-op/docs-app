import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints = {reference} className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='mt-5 leading-none tracking-normal font-medium'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full  left-0'>
          <div className='flex items-center justify-between py-3 px-8 mb-5'>
            <h5>.4mb</h5>
            <span className='w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoCloseSharp/> : <MdFileDownload size=".7em" color='#fff'/>}
            {/* <MdFileDownload size=".7em" color='#fff'/> */}
            </span>
          </div>
          {data.tag.iOpen && (
              <div className={`absolute bottom-0 tag mt-6 w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                  <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
              </div>
            )
            }; 
            
        </div>
        


    </motion.div>
  )
}

export default Card