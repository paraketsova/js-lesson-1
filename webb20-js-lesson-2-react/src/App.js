import logo from './logo.svg';
import './App.css';
import Image from './components/Image'
import Link from './components/Link';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image image={logo} title='React Logo'/>
        <Image image='http://placekitten.com/200/300' title='Cat'/>
        <Image image='http://placekitten.com/200/300' title='Cat 2'/>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link url='https://reactjs.org' text='Learn React' />
        <Link url='https://svt.se' text='Go to SVT' />
      </header>
    </div>
  );
}

export default App;
