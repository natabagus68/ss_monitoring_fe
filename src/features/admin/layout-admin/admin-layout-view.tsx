import { NavItem } from "@common/components";
import BurgerIcon from "@common/components/icons-new/BurgerIcon";
import ChevronIcon from "@common/components/icons-new/ChevronIcon";
import LogoutIcon from "@common/components/icons-new/LogoutIcon";
import { Outlet } from "react-router-dom";
import { useLayoutAdmin } from "./admin-layout-view-model";
import my_Logo from "../../../assets/my-logo.svg";
import { DashboardIcon, UserControlIcon } from "@common/components/icons";
import MasterDataIcon from "@common/components/icons-new/MasterDataIcon";
import DateIcon from "@common/components/icons-new/DateIcon";
import ArchiveBoxIcon from "@common/components/icons-new/ArchiveBoxIcon";
import DocumentIcon from "@common/components/icons-new/DocumentIcon";
export const AdminLayout = () => {
  const admin = useLayoutAdmin();
  return (
    <>
      <main className="relative">
        <header
          className={`${
            admin.isOpenSidebar ? "pl-[265px]" : "pl-[25px]"
          } fixed w-full h-[70px] bg-[#DA3E33] shadow-lg z-50 flex items-center justify-between pr-[25px] transition-all ease-in-out delay-100`}
        >
          <div className="flex gap-6 items-center">
            <BurgerIcon
              className="cursor-pointer"
              onClick={() => admin.onOpenSideBar()}
            />
          </div>
          <div className="relative">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => admin.onOpenAvatar()}
            >
              <div className="w-6 h-6 rounded-full bg-white"></div>
              <span className="text-white font-semibold">Admin</span>
              <ChevronIcon color="white" />
            </div>
            <div
              className={`${
                admin.isOpenAvatar ? "flex" : "hidden"
              } absolute top-[35px] bg-white rounded-md overflow-hidden right-0 flex-col gap-2 min-w-[190px] border border-gray-400`}
              onMouseLeave={() => admin.onOpenAvatar()}
            >
              <div
                className="flex items-center gap-3 cursor-pointer px-4 py-2 hover:bg-gray-100"
                onClick={() => admin.onLogout()}
              >
                <LogoutIcon />
                <span>Logout</span>
              </div>
            </div>
          </div>
        </header>
        <div
          className={`${
            admin.isOpenSidebar ? null : "-translate-x-[240px]"
          } fixed w-[240px] h-full bg-white shadow-lg z-50 flex flex-col gap-[20px] transition-all ease-in-out delay-100`}
        >
          <div className="w-full h-[70px] shadow-md flex items-center justify-center">
            <div className="flex gap-3 items-center pl-4">
              <img src={my_Logo} alt="Logo Ragdalion" className="h-[50px]" />
              {/* <h1 className="font-monst text-sm">KARANG TARUNA DIGITAL</h1> */}
            </div>
          </div>
          <div className="flex flex-col px-4 gap-[12px] mt-6">
            <span className="font-semibold text-[#5C5C5C]">Menu</span>
            <div className="flex flex-col gap-2">
              <NavItem
                label={`Dashboard`}
                icon={<DashboardIcon className="w-[24px] h-[24px]" />}
              >
                <NavItem label="general" />
                <NavItem label="Monitoring" />
              </NavItem>
              <NavItem
                label="Scedule"
                icon={<DateIcon className="w-[24px] h-[24px]" />}
              />
              <NavItem
                label="Production"
                icon={<ArchiveBoxIcon className="w-[24px] h-[24px]" />}
              />
              <NavItem
                label="Report"
                icon={<DocumentIcon className="w-[24px] h-[24px]" />}
              />
              <NavItem
                label={`Master Data`}
                icon={<MasterDataIcon className="w-[24px] h-[24px]" />}
              >
                <NavItem label="Part" />
                <NavItem label="Equipment" />
                <NavItem label="Machine" />
                <NavItem label="Manpower" />
                <NavItem label="Material" />
                <NavItem label="Line" />
                <NavItem label="Problem" />
                <NavItem label="Data Defect" />
                <NavItem label="Method" />
              </NavItem>
              <NavItem
                label={`User`}
                icon={<UserControlIcon className="w-[24px] h-[24px]" />}
              >
                <NavItem label="Account" />
                <NavItem label="Access" />
              </NavItem>
            </div>
          </div>
        </div>
        <div
          className={`${
            admin.isOpenSidebar ? "pl-[265px]" : "pl-[25px]"
          } flex-1 pt-[95px] p-[25px] transition-all ease-in-out delay-100`}
        >
          <Outlet />
        </div>
      </main>
    </>
  );
};
