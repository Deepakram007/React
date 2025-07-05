import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/navbar';



function App() {
  return (
    <div className="App">
     <ThemeProvider>
    
     <Navbar/>
      <p>Switching Theme with toggle button</p>
    
     </ThemeProvider>
     </div>
  );
}

export default App;
