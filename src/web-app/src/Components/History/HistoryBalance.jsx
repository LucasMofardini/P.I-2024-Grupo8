import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import * as utils from "../../Utils/generic";

const HistoryBalance = ({ history }) => {
  const { month, amount, balance } = history;

  return (
    <Card variant="outlined" sx={{ overflow: "initial", margin: '8px 12px !important' }}>
      <CardContent sx={{ py: 0, pt: 1 }}>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Typography sx={{ fontSize: 14 }}>
            <b>{utils.formatMonth(month)}</b>
          </Typography>
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <small>Gasto p/ mês:</small>
            <Typography sx={{ fontSize: 18 }}>
              {utils.formatCurrency(amount)}
            </Typography>
          </Box>

          <Box>
            <small>Saldo:</small>
            <Typography sx={{ fontSize: 18 }}>
              {utils.formatCurrency(balance)}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HistoryBalance;
