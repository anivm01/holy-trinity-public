import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import CommunityNewsFull from "./components/CommunityNewsFull/CommunityNewsFull";
import Header from "./components/Header/Header";
import AboutPage from "./pages/AboutPage/AboutPage";
import CommunityNewsPage from "./pages/CommunityNewsPage/CommunityNewsPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import HomePage from "./pages/HomePage/HomePage";
import InMemoriamPage from "./pages/InMemoriamPage/InMemoriamPage";
import WorshipOfficesPage from "./pages/WorshipOfficesPage/WorshipOfficesPage";
import WorshipOfficeSingle from './components/WorshipOfficeSingle/WorshipOfficeSingle'
import { LanguageProvider } from "./utils/LanguageContext";
import ObituaryFull from "./components/ObituaryFull/ObituaryFull";
import Footer from "./components/Footer/Footer";
import DonationsPage from "./pages/DonationsPage/DonationsPage";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/contact-us"  />
          <Route path="/in-memoriam" element={<InMemoriamPage />} />
          <Route path="/in-memoriam/:id" element={<ObituaryFull />} />
          <Route path="/community-news" element={<CommunityNewsPage />} />
          <Route path="/community-news/:id" element={<CommunityNewsFull />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/worship-offices" element={<WorshipOfficesPage/>} />
          <Route path="/worship-offices/:id" element={<WorshipOfficeSingle/>} />
          <Route path="/donations" element={<DonationsPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
