import React from "react";
import { Box, Typography }  from "@mui/material";
import * as utils from '../../Utils/generic';

const ProjectHeader = ({ name, budget }) => (
  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
    <Typography variant="h6">
      Projeto {name} - {utils.formatCurrency(budget)}
    </Typography>
  </Box>
);

export default ProjectHeader;