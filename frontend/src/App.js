import './App.css';
import Header from './component/Header';
import AddStudent from './component/AddStudent';
import AllStudent from './component/AllStudent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/addStudent" excat Component={AddStudent} />
          <Route path='/' excat Component={AllStudent}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
