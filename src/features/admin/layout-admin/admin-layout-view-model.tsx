import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useLayoutAdmin = () => {
  const navigate = useNavigate();
  //navbar status
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  //sidebar status
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  //avatar status
  const [isOpenAvatar, setIsOpenavatar] = useState(false);
  // loading state
  const [isLoading, setIsLoading] = useState(true);

  //navbar status click
  const onOpenNavbar = (): void => {
    setIsOpenNavbar(!!!isOpenNavbar);
  };

  //click burger in header
  const onOpenSideBar = (): void => {
    setIsOpenSidebar(!!!isOpenSidebar);
  };

  //click avatar dropdown in header
  const onOpenAvatar = (): void => {
    setIsOpenavatar(!!!isOpenAvatar);
  };

  //set navigate navbar
  const setNavigate = (url: string): void => {
    navigate(url);
  };

  //on logout
  const onLogout = async (): Promise<void> => {
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
    const localStorageData = localStorage.getItem("token");
    setTimeout(() => {
      setIsLoading(false);
      if (!localStorageData) {
        navigate("../login");
      } else {
        navigate(`../${window.location.pathname}`);
      }
    }, 500);
  };

  useEffect(() => {
    onIsMe();
  }, []);

  return {
    isOpenNavbar,
    isOpenSidebar,
    isOpenAvatar,
    isLoading,
    onOpenNavbar,
    onOpenSideBar,
    setNavigate,
    onOpenAvatar,
    onLogout,
  };
};
