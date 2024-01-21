import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import './App.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { yellow, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: yellow,
    secondary: purple,
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
        </Routes>
      </Router>
      
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
