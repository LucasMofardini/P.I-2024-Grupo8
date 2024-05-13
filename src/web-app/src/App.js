import './App.css';
import Box from '@mui/material/Box'
import NavBar from './NavBar';
import Footer from './Footer'
import ProjectContainer from './ProjectContainer'; 

function App() {
  return (
    <>
      <NavBar />

      <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <Box sx={{ width: '1024px'}}>
            <ProjectContainer/>
          </Box>
      </Box>

      <Footer />
    </>
  );
}

export default App;
