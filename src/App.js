import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BankaPocetna from './pgs/BankaPocetna';
import KreditStrana from './pgs/KreditStrana';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<BankaPocetna />} />
        <Route path="kredit" element={<KreditStrana />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
