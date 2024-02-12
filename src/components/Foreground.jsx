import React, { createRef } from 'react'
import Card from './Card'
import NormalCard from './NormalCard';

function Foreground() {
    const ref = createRef(null);

  const data = [
    {
      desc : "this is where card information will be shown",
      file_size : '0.9mb',
      close : false,
      tag : {
        iOpen : true,
        tagTitle : "Download Now",
        tagColor : "green",
      }
    },
    {
      desc : "this is where card information will be shown",
      file_size : '0.9mb',
      close : false,
      tag : {
        iOpen : true,
        tagTitle : "Download Now",
        tagColor : "blue",
      }
    },
    {
      desc : "this is where card information will be shown",
      file_size : '1.0mb',
      close : true,
      tag : {
        iOpen : true,
        tagTitle : "Upload",
        tagColor : "green",
      }
    },
  ];

  const data2 = [
    {desc : "this is where card information will be shown",
      file_size : '2.0mb',
      close : false},
      {
        desc : "this is where card information will be shown",
      file_size : '5.0mb',
      close : true,
      }
  ]
  return (
    <div ref = {ref} className='fixed top-0 left-0 w-full h-screen z-[5] bg-black/2 flex gap-10 flex-wrap p-10'>

        {data.map((item, index) => (
          <Card reference = {ref} data = {item}/>
          // <Card data = {item}/>
        ))}
        {
          data2.map((item, index)=>(
            <NormalCard reference = {ref} data = {item} />
          ))
        }
    </div>
  )
}

export default Foreground