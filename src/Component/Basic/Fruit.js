import React, { useState } from 'react'
import './Style.css'
import Menuapi from './Menuapi'
import Menucard from './Menucard'
import Navbar from './Navbar'

const uniqueList = [...new Set(Menuapi.map((curEle)=>{
  return curEle.category
})),
"All"
]
console.log(uniqueList)
const Fruit = () => {
    const [menudata,setMenudata] = useState(Menuapi);
    const [menulist , setMenulist] =useState(uniqueList)
    const filterItem =(category) =>{
      if(category==="All"){
        setMenudata(Menuapi)
        return;
      }
      const updateItem =Menuapi.filter((curEle)=>{
        return (
          curEle.category==category
        )
      })
      setMenudata(updateItem);
    }
    console.log(menudata);
  return (
    <>
    <Navbar filterItem ={filterItem} menulist = {menulist}/>
    <Menucard menudata ={menudata}/>
    </>
  )
}

export default Fruit