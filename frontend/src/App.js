import './App.css';
import Header from './component/Header';
import AddStudent from './component/AddStudent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/addStudent" element={<AddStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
