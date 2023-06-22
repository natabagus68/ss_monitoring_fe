
import { useState, useEffect } from "react";  

export default function useAndonLayoutModel() {
  const [newDate, setNewDate] = useState(new Date())
  useEffect(() =>{
    const timer = setInterval(() => { 
        setNewDate(new Date());
      }, 1000);
      return () => {
        clearInterval(timer); 
      }
},[])

const getDateTime = () => {
    
    let hours = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();


    return `${hours<10?`0${hours}`: `${hours}`}${":"}${minute<10?`0${minute}`:`${minute}`}${":"}${second<10?`0${second}`:`${second}`}`
}
  return {
    getDateTime
  }
}
