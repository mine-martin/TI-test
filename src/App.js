import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserLists from './component/UserLists';
import UserDetails from './component/UserDetails';
import Footer from './component/Footer';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<UserLists />} />
          <Route exact path="/user/:id" element={<UserDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
