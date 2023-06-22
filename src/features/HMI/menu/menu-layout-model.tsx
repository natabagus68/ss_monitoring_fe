import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useAdmin() {
  const navigate = useNavigate();
  // loading state
  const [isLoading, setIsLoading] = useState(true);


  //set navigate navbar
  const setNavigate = (url: string): void => {
    navigate(url);
  };

  //on logout
  const onLogout = async(): Promise<void> => {
    try {
      await localStorage.removeItem("web-admin");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //checking me
  const onIsMe = async (): Promise<void> => {
    setIsLoading(true);
    const localStorageData = await JSON.parse(
      localStorage.getItem("web-admin")
    );
    setTimeout(() => {
      setIsLoading(false);
      if (!localStorageData?.token) {
        navigate("../login");
      } 
      // else {
      //   navigate(`../${window.location.pathname}`);
      // }
    }, 500);
  };

  useEffect(() => {
    onIsMe();
  }, []);

  

  return {
    isLoading,
    setNavigate,
    onLogout,
  };
}
