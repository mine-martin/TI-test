import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserLists from './component/UserLists';
import UserDetails from './component/UserDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<UserLists />} />
          <Route exact path="/user/:id" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
