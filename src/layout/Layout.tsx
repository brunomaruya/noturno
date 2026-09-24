import { Outlet } from "react-router";
import Header from "./Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="container max-w-content mx-auto px-4 py-2">
        <Outlet />
      </div>
    </>
  );
};
