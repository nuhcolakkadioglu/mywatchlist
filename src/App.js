import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Header from './components/Header';
import Watched from './components/Watched';
import Watchlist from './components/Watchlist';
import { GlobalPrivider } from './context/GlobalState';
function App() {
  return (
    <GlobalPrivider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Watchlist />} />
          <Route path='/watched' element={<Watched />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </Router>
    </GlobalPrivider>
  );
}

export default App;
