import { Header } from "./components/Header";
import { HomePage } from "./pages/home-page";
import { AllCatalog } from "./pages/all-catalog";
import { CurrentCatalog } from "./components/current-catalog";
import { Goods } from "./components/goods";
import { About } from "./components/about/about";
import { Footer } from "./components/footer";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { OrderPage } from "./pages/order-page";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/all-catalog" element={<AllCatalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog/:title" element={<CurrentCatalog />} />
            <Route path="/goods/:id" element={<Goods />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
