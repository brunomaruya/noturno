import { Bell, MessageCircle, User } from "lucide-react";
import { Logo } from "../components/Logo";
import { Searchbar } from "../components/Searchbar";

function Header() {
  return (
    <header className="sticky top-0 border-b border-line">
      <div className="max-w-content mx-auto flex items-center justify-between gap-10 px-4 py-2">
        <div className="flex gap-4 items-center">
          <Logo /> <Searchbar />
        </div>
        <div className="flex gap-4 items-center">
          <MessageCircle /> <Bell /> <User />
        </div>
      </div>
    </header>
  );
}

export default Header;
