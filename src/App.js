
import './App.css';
import Search from './components/Search/Search';

function App() {
 
  return (
    <div className="App">
      
      {/* Make a search input here.  */}
      <h1 style={{marginTop:"5%"}} className='d-flex justify-content-center text-primary'>Pick Users</h1>
      <Search/>

      
      
    </div>
  );
}

export default App;
