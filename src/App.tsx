import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Banner text={"*Its a banner*"}/>
      <Main/>
    </div>
  );
}

export default App;
