import { useState } from "react";

export const useLoginAdmin = () => {
  const [eye, setEye] = useState(false);

  const handleEyePassword = () => {
    setEye(!eye);
  };

  return {
    eye,
    handleEyePassword,
  };
};
