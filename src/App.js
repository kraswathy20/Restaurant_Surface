
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurant from './components/Restaurant';

function App() {
  return (
    <div className="App">
      <Header/>

      <Restaurant></Restaurant>
      
      <Footer/>
    </div>
  );
}

export default App;
