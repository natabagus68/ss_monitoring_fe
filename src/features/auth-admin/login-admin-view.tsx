import EmailIcon from "@common/components/icons-new/EmailIcon";
import my_logo from "../../assets/my-logo.svg";
import { KeyIcon } from "@common/components/icons";
import EyeHideIcon from "@common/components/icons-new/EyeHideIcon";
import { useLoginAdmin } from "./login-admin-view-model";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import login_hero from "../../assets/login-hero.png";
export const LoginAdmin = () => {
  const model = useLoginAdmin();
  return (
    <>
      <main className="w-full h-screen flex">
        <section className={`w-full bg-red-400`}>
          <img
            src={login_hero}
            alt="hero"
            className="w-full h-full object-cover object-center"
          />
        </section>
        <section className="w-[70%] flex items-center justify-center">
          <div className="w-[80%] p-20 py-28 rounded-xl border border-gray-400 shadow-lg ">
            <div className="w-full">
              <img src={my_logo} alt="logo" className="w-40" />
              <h1 className="font-bold text-[#514E4E] text-4xl mt-4">
                Welcome back.
              </h1>
              <p className="text-md mt-2 text-[#514E4E]">
                Log in to your account
              </p>

              <form className="w-full mt-4">
                <div className="relative">
                  <EmailIcon className="w-6 h-6 text-gray-400 absolute top-3.5 left-2" />
                  <input
                    type="email"
                    placeholder="input your email"
                    className="w-full py-3 px-9 border  border-gray-400 rounded-md bg-transparent outline-none text-gray-600 "
                  />
                </div>
                <div className="relative mt-6">
                  <KeyIcon className="w-6 h-6 text-gray-400 absolute top-3.5 left-2 " />
                  <input
                    type={model.eye ? "text" : "password"}
                    placeholder="input password"
                    className="w-full py-3 px-9 border  border-gray-400 rounded-md bg-transparent outline-none text-gray-600 "
                  />
                  {model.eye ? (
                    <EyeShowIcon className="w-6 h-6 text-gray-400 absolute right-3 bottom-3" />
                  ) : (
                    <EyeHideIcon className="w-6 h-6 text-gray-400 absolute right-3 bottom-3" />
                  )}

                  <div
                    onClick={model.handleEyePassword}
                    className="w-6 h-6 bg-transparent absolute right-2 bottom-1"
                  ></div>
                </div>

                <div className="mt-8 w-full">
                  <button
                    type="submit"
                    className="py-4  text-center bg-[#F04438] text-white w-full rounded-md"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
