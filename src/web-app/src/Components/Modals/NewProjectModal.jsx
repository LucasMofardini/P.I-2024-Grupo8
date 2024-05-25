import React from 'react';
import { Button, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import * as utils from '../../Utils/generic';
import { NumericFormat } from "react-number-format";

const NewProjectModal = ({ open, info, handleChange, handleClose, onSend  }) => {
    const { name, budget, code } = info;
    
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            sx={{ display: "flex", justifyContent: "flex-end" }}
            variant="h7"
          >
            Novo Projeto
          </Typography>

          <TextField
            fullWidth
            multiline
            minRows={1}
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            name="name"
            sx={{ mt: "10px" }}
            onChange={handleChange}
            value={name}
          />

          <TextField
            fullWidth
            multiline
            minRows={1}
            id="outlined-basic"
            label="Codigo"
            variant="outlined"
            name="code"
            sx={{ mt: 1.5 }}
            onChange={handleChange}
            value={code}
          />

          <FormControl fullWidth sx={{ mt: 1.5 }}>
            <NumericFormat
              customInput={TextField}
              thousandSeparator="."
              prefix="R$"
              decimalScale={2}
              decimalSeparator=","
              variant="outlined"
              fullWidth
              id="outlined-adornment-amount"
              label="Valor"
              name="budget"
              onChange={handleChange}
              value={budget}
            />
          </FormControl>

          <Button onClick={onSend}>Salvar</Button>
        </Box>
      </Modal>
    );
}

export default NewProjectModal;