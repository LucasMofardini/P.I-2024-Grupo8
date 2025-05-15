import React from "react";
import { Box, Typography }  from "@mui/material";
import * as utils from '../../Utils/generic';

const ProjectHeader = ({ name, budget, balance }) => (
  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
    <Typography sx={{ my: 2, fontSize: 14 }}>
      {name} - {utils.formatCurrency(budget)}
    </Typography>

    <Box>
    <Typography sx={{ my: 2, fontSize: 14 }}>
       <i>Valor Restante - </i> {utils.formatCurrency(balance)}
    </Typography>
    </Box>

  </Box>
);

export default ProjectHeader;