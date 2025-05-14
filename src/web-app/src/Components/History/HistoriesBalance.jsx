import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import HistoryBalance from "./HistoryBalance";
import { Typography } from "@mui/material";

const HistoriesBalance = ({ histories }) => {
  return (
    <Box>
      <Stack spacing={1} sx={{ maxHeight: 300, overflowY: "scroll", mx: 1 }}>
        {!!histories.length &&
          histories.map((history, i) => <HistoryBalance key={i} history={history} />)}

        {!histories.length && (
           <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="h6">Sem resultado</Typography>
            </Box>
        )}
      </Stack>
    </Box>
  );
};

export default HistoriesBalance;
