import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import NavBar from './components/NavBar';
import NavLink from './components/NavLink';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <NavLink />
      <Content />
    </div>
  );
}


export default App;