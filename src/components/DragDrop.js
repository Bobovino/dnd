import React, { useState }  from 'react'
import Picture from './Picture'
import { useDrop } from 'react-dnd'

const PictureList= [
    {
        id:1,
        url:"https://leaguefeed.net/wp-content/uploads/2022/11/Most-OP-overpowered-Champions-LoL-1024x640.jpg",
    },
    {
        id:2,
        url:"https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/08/03/1331862149625_2/league-of-legends-teemo.jpg.jpg",
    },
    {
        id:3,
        url:"https://i.ytimg.com/vi/1mUJtRs7Huc/maxresdefault.jpg",
    },
]

function DragDrop() {
    const [board,setBoard]=useState([])

    const [{isOver},drop]=useDrop(()=>({
        accept: "image",
        drop:(item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const addImageToBoard= (id) => {
        const pictureList=PictureList.filter((picture)=> id===picture.id)
        setBoard((board)=>[...board, pictureList[0]])  //setBoard([pictureList[0]])
    }
  return (
    <>
    <div className='Pictures'>
    {PictureList.map((picture)=>{
        return <Picture   url={picture.url} id={picture.id}/>;
    })}
    </div>
    <div className="Board" ref={drop}>
        {board.map((picture)=>{
            return <Picture   url={picture.url} id={picture.id}/>;
        })}
    </div>
    </>
  )
}

export default DragDrop
