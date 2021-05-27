import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar.js/Navbar';
import DetailPage from './pages/DetailPage/Detail';
import HistoryPage from './pages/History/HistoryPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" exact component={DetailPage} />
        <Route path="/history" exact component={HistoryPage} />
      </Switch>
    </Router>
  );
}

export default App;
