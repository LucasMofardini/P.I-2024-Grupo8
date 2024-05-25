import "./App.css";
import Box from "@mui/material/Box";
import NavBar from "./Components/Common/NavBar";
import Footer from "./Components/Common/Footer";
import ProjectContainer from "./Components/Project/ProjectContainer";

function App() {
  return (
    <>
      <NavBar />

      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "1280px" }}>
          <ProjectContainer />
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default App;
