import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App d-flex flex-column justify-content-between h-100">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
