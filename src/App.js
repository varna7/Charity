import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Gallary from './pages/Gallary/Gallary';
import GoverningBody from './pages/GoverningBody/GoverningBody';
import './App.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main:'#93C6E7',
    },
    
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Topbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/governing-body' element={<GoverningBody/>}/>
          <Route path='/gallary' element={<Gallary/>}/>



        </Routes>
      </Router>
      <Footer/>
      
      {/* about<br/>
      events<br/>
      pages<br/>
      blog<br/>
      contact<br/> */}


    </div>
    </ThemeProvider>
  );
}

export default App;
