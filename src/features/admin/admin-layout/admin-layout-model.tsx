import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useAdmin() {
  const navigate = useNavigate();
  //navbar status
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  //sidebar status
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  //avatar status
  const [isOpenAvatar, setIsOpenavatar] = useState(false);

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
  }

  //on logout
  const onLogout = (): void => {
    navigate("../login", { replace: true })
  }

  return {
    isOpenNavbar,
    isOpenSidebar,
    isOpenAvatar,
    onOpenNavbar,
    onOpenSideBar,
    setNavigate,
    onOpenAvatar,
    onLogout
  };
}
