
import './App.css';
import Header from './component/Header';
import AddStudent from './component/AddStudent';
import AllStudent from './component/AllStudent';
import GetStudent from './component/UpdateStudent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/addStudent" excat Component={AddStudent} />
          <Route path='/' excat Component={AllStudent}/>
          <Route path='/update/:userID' excat Component={GetStudent}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;