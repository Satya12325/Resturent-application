import './App.css';
import { Router } from './Router/Router';
import { LoginPage } from './Pages/LoginPage';
import NavBar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router/>
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
