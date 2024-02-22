import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/Pages/" element={<Home />} />
          <Route path="/item/:itemId" element={<Item />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
