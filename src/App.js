import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import { LanguageProvider } from './utils/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
     <Header/>
        <Routes>
          <Route to='/' />
          <Route to='/about' />
          <Route to='/contact-us' />
          <Route to='/in-memoriam' />
          <Route to='/community-news' />
          <Route to='/events' />
          <Route to='/worship-offices' />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
