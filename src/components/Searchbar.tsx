import { Search } from "lucide-react";

export const Searchbar = () => {
  return (
    <div className="relative flex gap-2 items-center border-2 border-line rounded-lg px-4 py-2 w-2xl ">
      <Search className="text-ink-faint" />
      <input
        type="text"
        placeholder="Search for users, posts, or #tags"
        className="w-full focus:outline-none"
      />
    </div>
  );
};
