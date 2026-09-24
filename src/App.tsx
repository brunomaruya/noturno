import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "./layout/Layout";
import { Feed } from "./pages/Feed";
import { Explorer } from "./pages/Explorer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Feed />} />
            <Route path="/explorer" element={<Explorer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
