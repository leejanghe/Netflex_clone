/* Routing */
import { HashRouter, Routes, Route } from "react-router-dom";

/* Components */
import Header from "./Components/Header";

/* Pages */
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";

function App() {
  /* v5 start with 방식으로 경로 매치, 배치순서 중요 */
  /* v6 full match 방식으로 경로 매치, 배치순서 무관 */
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:section/:id" element={<Home />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/tv/:section/:id" element={<Tv />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/movies/:section/:id" element={<Search />} />
        <Route path="/search/tv/:section/:id" element={<Search />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
