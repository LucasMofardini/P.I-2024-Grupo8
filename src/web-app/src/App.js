import './App.css';
import Box from '@mui/material/Box'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer'
import ProjectContainer from './ProjectContainer';
import './App.css'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    fontFamily: 'ABeeZee',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontSize: 16,
  }
});


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <NavBar />

      <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <Box sx={{ width: '1024px'}}>
            <ProjectContainer/>
          </Box>
      </Box>

      <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
