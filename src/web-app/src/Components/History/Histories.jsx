import React from 'react';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import History from './History';
import { Typography } from '@mui/material';

const Histories = ({ histories }) => {
    return (
      <Box>
        <Stack spacing={1} sx={{ maxHeight: 300, overflowY: "auto", mx: 1 }}>
          {!!histories.length &&
            histories.map((history, i) => <History key={i} history={history} />)}

            {!histories.length && (
           <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="h6">Sem resultado</Typography>
            </Box>
        )}
        </Stack>
      </Box>
    );
}

export default Histories;