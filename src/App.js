
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPoster from './Components/RowPosters/RowPoster';
import {originals,action,adventure} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPoster url={originals} title='Netflix Original' />
      <RowPoster url={action} title='Action'/>
      <RowPoster url={adventure} title='Animation'/>
      
    </div>
  );
}

export default App;
