import React from 'react';
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
// import * as utils from '../../Utils/generic';

const NewProjectModal = ({ open, info, handleChange, handleClose, onSend  }) => {
    const { name, budget } = info;
    
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
          <Typography variant="h4">Novo Projeto</Typography>
  
          <TextField
            fullWidth
            multiline
            minRows={2}
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            name="name"
            sx={{ mt: "10px" }}
            onChange={handleChange}
            value={name}
          />
  
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
            <OutlinedInput
              fullWidth
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">R$</InputAdornment>
              }
              label="budget"
              name="budget"
              onChange={handleChange}
              value={budget}
            />
          </FormControl>
  
          <Button onClick={onSend}>Salvar</Button>
        </Box>
      </Modal>
    )
}

export default NewProjectModal;