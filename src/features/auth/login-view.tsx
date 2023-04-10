import EmailIcon from "@common/components/icons-new/EmailIcon";
import EyeHideIcon from "@common/components/icons-new/EyeHideIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import LockIcon from "@common/components/icons-new/LockIcon";
import EyesShowHide from "@common/components/icons/ShowHideIcon";
import useLogin from "./login-model";
import { EyeIcon } from "@common/components/icons";

export default function LoginView() {
  const login = useLogin();
  return (
    <main className="w-screen h-[100dvh] flex items-end relative">
      <div className="absolute w-screen h-[100dvh] z-10 top-0 left-0 flex items-center justify-center">
        <form
          className="w-[443px] h-[518px] bg-white rounded-xl shadow-lg px-[34px] py-[44px] flex flex-col items-center justify-between"
          onSubmit={login.onSubmitLogin}
        >
          <div className="flex flex-col items-center">
            <span className="font-extrabold text-[36px] text-[#2BBA23]">
              Welcome back!
            </span>
            <span className="text-[14px] text-[#8B8D97]">
              Login to your account
            </span>
          </div>
          <div className="flex flex-col w-full gap-[30px]">
            <div className="w-full h-[52px] bg-[#EFF1F999] px-[18px] flex items-center gap-[16px] rounded-lg">
              <EmailIcon />
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className=" bg-transparent w-full h-full outline-none"
              />
            </div>
            <div className="w-full h-[52px] bg-[#EFF1F999] px-[18px] flex items-center gap-[16px] rounded-lg">
              <LockIcon />
              <input
                type={`${login.isPasswordShow ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                className=" bg-transparent w-full h-full outline-none"
              />
              {login.isPasswordShow ? (
                <EyeShowIcon
                  color="#6E7079"
                  className="w-[22px] h-[22px]"
                  onClick={() => login.onPasswordShow()}
                />
              ) : (
                <EyeHideIcon
                  color="#6E7079"
                  className="w-[22px] h-[22px]"
                  onClick={() => login.onPasswordShow()}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <span className="text-[#F04438] opacity-0">
              Your password is not correct
            </span>
            <span className="text-[#5570F1] w-full text-end">
              Recover Password
            </span>
          </div>
          <button className="w-[180px] h-[44px] bg-[#2BBA23] rounded-xl text-white text-base">
            Login
          </button>
        </form>
      </div>
      <div className="w-screen h-[50dvh] bg-[#2BBA23]"></div>
    </main>
  );
}
