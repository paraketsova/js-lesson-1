
import './App.css';
import Thumbnail from './components/Thumbnail.jsx'

function App() {
  return (
    <div className="App">
      <header className='TweetColumn'>
        <div className='TweetArticle'>
          <Thumbnail image="http://placekitten.com/300/300" title="Cat" />
          <div className='TweetContext'>
            <p>
              This is my first tweet.
            </p>
            <p>
              Author
            </p>
            <p>
              Time stamp
            </p>
          </div>
        </div>

        <div className='TweetArticle'>
          <Thumbnail image="http://placekitten.com/300/300" title="Cat" />
          <div className='TweetContext'>
            <p>
              This is my first tweet.
            </p>
            <p>
              Author
            </p>
            <p>
              Time stamp
            </p>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
