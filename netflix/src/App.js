
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/Rowpost/RowPost';
import { originals,actions } from './urls'


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/> 
    <RowPost url={originals} title='Netflix Original'/>    
    <RowPost  url={actions} title='Action' isSmall/> 
    </div>
  );
}

export default App;
