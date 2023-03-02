import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import AboutPage from "./pages/AboutPage/AboutPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import HomePage from "./pages/HomePage/HomePage";
import InMemoriamPage from "./pages/InMemoriamPage/InMemoriamPage";
import { LanguageProvider } from "./utils/LanguageContext";

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
          <Route path="/community-news" />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/worship-offices" />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
