import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import InMemoriamPage from "./pages/InMemoriamPage/InMemoriamPage";
import { LanguageProvider } from "./utils/LanguageContext";
import ObituaryFull from "./components/ObituaryFull/ObituaryFull";
import Footer from "./components/Footer/Footer";
import DonationsPage from "./pages/DonationsPage/DonationsPage";
import HallPage from "./pages/HallPage/HallPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ParishPriestPage from "./pages/ParishPriestPage/ParishPriestPage";
import FeastsPage from "./pages/FeastsPage/FeastsPage";
import VideosPage from "./pages/VideosPage/VideosPage";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/in-memoriam" element={<InMemoriamPage />} />
          <Route path="/in-memoriam/:id" element={<ObituaryFull />} />
          <Route path="/donations" element={<DonationsPage />} />
          <Route path="/hall" element={<HallPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/parish-priest" element={<ParishPriestPage />} />
          <Route path="/feasts" element={<FeastsPage />} />
          <Route path="/videos" element={<VideosPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
