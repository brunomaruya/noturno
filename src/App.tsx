import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "./layout/Layout";
import { Feed } from "./pages/Feed";
import { Explore } from "./pages/Explore";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Feed />} />
            <Route path="/explore" element={<Explore />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
