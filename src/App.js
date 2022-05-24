import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './styles/app.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
