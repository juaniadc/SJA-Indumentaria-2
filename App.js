import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import ItemListContainer from './components/Main/ItemListContainer';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <ItemListContainer greeting={"Bienvenido"}/>
        <Footer />
      </main>
    </div>
  );
}

export default App;
