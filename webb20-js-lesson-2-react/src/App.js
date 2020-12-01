import logo from './logo.svg';
import './App.css';
import Image from './components/Image'
import Link from './components/Link';
import Paragraph from './components/Paragraph';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>

        <Image description='It is a logo' image={logo} title='React Logo'/>
        <Image description='It is a cat' image='http://placekitten.com/200/300' title='Cat'/>
        <Image description='This is another cat' image='http://placekitten.com/300/400' title='Cat 2'/>

        <Paragraph title="Information">
          Edit <code>src/App.js</code> and save to reload.
        </Paragraph>
        <Paragraph title="Whats happening?">
          Im curently learning React.
        </Paragraph>

        <Paragraph>
          <ul><li>React</li>
            <li>Props</li>
            <li>Deconstructing</li>
            <li>Props Children</li>
          </ul>
        </Paragraph>

        <Link url='https://reactjs.org' text='Learn React' />
        <Link url='https://svt.se' text='Go to SVT' />
      </header>
    </div>
  );
}

export default App;
