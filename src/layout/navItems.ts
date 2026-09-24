import {
  Home,
  Search,
  Heart,
  MessageCircle,
  Bookmark,
  User,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
  badge?: number;
}

export const navItems: NavItem[] = [
  { to: "/", label: "Feed", icon: Home },
  { to: "/explore", label: "Explore", icon: Search },
  { to: "/likes", label: "Likes", icon: Heart, badge: 12 },
  { to: "/messages", label: "Messages", icon: MessageCircle, badge: 3 },
  { to: "/saved", label: "Saved", icon: Bookmark },
  { to: "/profile", label: "Profile", icon: User },
];
