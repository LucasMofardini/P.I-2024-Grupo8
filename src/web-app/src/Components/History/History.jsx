import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import * as utils from "../../Utils/generic";
import * as CONSTS from '../../Utils/consts';
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

const History = ({ history }) => {
  const {
    amount,
    categoryId,
    description,
    date
  } = history;

  return (
    <Card variant="outlined" sx={{ overflow: 'initial', margin: '8px 12px !important' }}>
      <CardContent sx={{ py: 0, pt: 1 }}>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Chip label={CONSTS.category[categoryId]} />
          <Typography sx={{ fontSize: 14 }}>
            <b>{utils.dateFormat(date)}</b> | {description}
          </Typography>
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography sx={{ fontSize: 18, mt: 1 }}>
            {utils.formatCurrency(amount)}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ py: 1 }}>
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="delete">
            <DeleteIcon fontSize="small"/>
          </IconButton>
          <IconButton aria-label="edit">
            <ModeEditIcon fontSize="small"/>
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default History;
