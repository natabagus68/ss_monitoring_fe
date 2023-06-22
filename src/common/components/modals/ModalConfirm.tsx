import Modal from "./Modal";
import LoadingIcon from "../icons-new/LoadingIcon";
import { useState, useEffect } from "react";
import AlertIcon from "../icons-new/AlertIcon";

export default function ModalConfirm({
  open = false,
  setOpen = null,
  setOpenSuccess = null,
  onSave = null,
  onCancel = null,
  title = null,
  message = null
}) {
  const [isLoading, setIsLoading] = useState({
    loading: false,
    exec: false,
  });
  useEffect(() => {
    if (!isLoading.loading && isLoading.exec) {
      setIsLoading({ loading: false, exec: false });
      setOpen(false);
      setTimeout(() => {
        setOpenSuccess(true);
      }, 300);
    }
  }, [isLoading.loading, isLoading.exec]);
  return (
    <Modal open={open}>
      <div className="w-[450px] flex flex-col gap-8 items-center">
  
        <AlertIcon />
        <div className="flex items-center flex-col">
          <span className="text-[#2D2A2A] text-[30px] font-bold">
          {title}
          </span>
          <span className="text-[#514E4E]">{message}</span>
        </div>

        <div className="flex w-full items-end gap-4">
        {isLoading.loading ? (
            <button className="flex items-center justify-center flex-1 gap-2 h-[46px] px-[20px] bg-[#229BD8] rounded text-white text-sm font-semibold">
              <LoadingIcon
                color="white"
                className="w-[24px] h-[24px] animate-spin"
              />
            </button>
          ) : (
            <button
              className="flex items-center justify-center flex-1 gap-2 h-[46px] px-[20px] bg-[#229BD8] rounded text-white text-xl font-semibold"
              onClick={() => {
                setIsLoading({ loading: true, exec: true });
                onSave();
                // setOpen(false);
                // setTimeout(() => {
                //   setOpenSuccess(true);
                //   cb();
                // }, 100);
              }}
            >
              <span>Yes, Confirm</span>
            </button>
          )}
          <button
            className="flex items-center justify-center flex-1 gap-2 h-[46px] px-[20px] border border-[#B8B6B6] rounded text-[#514E4E] text-xl font-semibold"
            onClick={() => {
              onCancel();
              setIsLoading({ loading: false, exec: false });
            }}
          >
            Cancel
          </button>
          
        </div>
      </div>
    </Modal>
  );
}
