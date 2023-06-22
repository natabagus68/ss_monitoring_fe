import { useState, useEffect } from "react";  

const DateTime = () => {
  const [newDate, setNewDate] = useState(new Date())

    useEffect(() =>{
        const timer = setInterval(() => { 
            setNewDate(new Date());
          }, 1000);
          return () => {
            clearInterval(timer); 
          }
    },[])

    const getDateTime = (status) => {
        
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let hours = newDate.getHours();
        let minute = newDate.getMinutes();
        let second = newDate.getSeconds();

        if(status === 'date'){
            return `${date<10?`0${date}`:`${date}`}${"-"}${month<10?`0${month}`:`${month}`}${"-"}${year}`
        }else if(status === 'time')
            return `${hours<10?`0${hours}`: `${hours}`}${":"}${minute<10?`0${minute}`:`${minute}`}${":"}${second<10?`0${second}`:`${second}`}`
    }
  return(
    <>
      <div className="flex justify-center items-center border-2 border-white py-2">
          <span className="text-white text-3xl font-semibold">DATE : {getDateTime('date')}</span>
      </div>
      <div className="flex justify-center items-center border-2 border-white py-2">
          <span className="text-white text-3xl font-semibold">TIME : {getDateTime("time")}</span>
      </div>
    </>

  )
}

export default DateTime