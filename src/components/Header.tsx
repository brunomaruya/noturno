import { BellIcon, MessageCircleIcon } from "lucide-react";
import { NoturnoLogo } from "./NoturnoLogo";
import { Searchbar } from "./Searchbar";
import { Avatar } from "./Avatar";

export function Header() {
  return (
    <header>
      <div>
        <NoturnoLogo size={23} />
        <Searchbar placeholder="Search people, places, #tags" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <MessageCircleIcon size={20} color="white" />
        <BellIcon size={20} color="white" />
        <Avatar size={30} />
      </div>
    </header>
  );
}
