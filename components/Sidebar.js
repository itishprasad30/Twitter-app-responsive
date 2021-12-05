import Image from "next/image";
import { DotsHorizontalIcon, HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import SidebarLink from "./SidebarLink";
import { signOut, useSession } from "next-auth/react";
import { data } from "autoprefixer";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className=" hidden sm:flex flex-col items-center xl:items-start p-2 xl:w-[350px] fixed h-full">
      <div className="flex flex-col justify-center items-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
      </div>
      <div className="text-white  space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      <button className="hidden xl:inline  ml-auto bg-blue-500 text-white rounded-full  w-56  h-[52px] text-lg font-bold shadow-md hover:bg-blue-600">
        Tweet
      </button>

      <div
        className="text-white flex justify-center items-center  xl:ml-24 hoverAnimation"
        onClick={signOut}
      >
        <img
          src={session?.user?.image}
          alt="img"
          className="h-10 w-10 rounded-full xl:mr-2.5 cursor-pointer"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-semibold">{session?.user?.name}</h4>
          <p className="text-gray-400">@{session?.user?.tag}</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
};

export default Sidebar;
