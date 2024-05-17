import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link"

const styleBox = {
  width: "100%",
  height: "auto",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  position: "fixed",
  bottom: "0",
};

const Footer = () => {
  return (
    <Box sx={styleBox}>
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Link
              href="https://github.com/LucasMofardini/P.I-2024-Grupo8"
              underline="none"
              rel="noreferrer"
              target='_blank'
            >
              <Typography color="black" variant="h7">
                @GitHub
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
