import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
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
  );
}

export default App;
