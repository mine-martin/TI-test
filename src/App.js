import 'bootstrap/dist/css/bootstrap.min.css';
import UserDetails from './component/UserDetails';
// import { BrowserRouter as Router, Routes, Router } from 'react-router-dom';
import UserLists from './component/UserLists';

function App() {
  return (
    <div className="App">
      <UserLists />
      <UserDetails />
    </div>
  );
}

export default App;
