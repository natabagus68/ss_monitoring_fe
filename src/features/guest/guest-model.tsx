import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useGuest() {
  const navigate = useNavigate();
  const [isMe, setIsMe] = useState(false);

  const onIsMe = (): void => {
    const localStorageData = JSON.parse(localStorage.getItem("web-admin"));
    if(!localStorageData?.token){
      navigate("../login")
    }else{
      navigate("../admin/dashboard/general")
    }
  }

  return {
    isMe,
    onIsMe
  };
}