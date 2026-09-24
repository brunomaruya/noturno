import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "./layout/Layout";
import { Feed } from "./pages/Feed";
import { Explore } from "./pages/Explore";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Feed />} />
            <Route path="/explore" element={<Explore />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
