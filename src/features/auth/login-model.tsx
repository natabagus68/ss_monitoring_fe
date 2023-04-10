import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();
  //input password
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  //input password
  const onPasswordShow = (): void => {
    setIsPasswordShow(!!!isPasswordShow);
  };

  //button login
  const onSubmitLogin = (e) => {
    e.preventDefault();
    console.log(e.target.email.value, e.target.password.value);
    navigate("../admin/dashboard");
  };
  return {
    isPasswordShow,
    onPasswordShow,
    onSubmitLogin,
  };
}
