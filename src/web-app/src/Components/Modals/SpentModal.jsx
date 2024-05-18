import React, { useState, useEffect } from "react";
import { Button, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import * as utils from '../../Utils/generic';
import { NumericFormat } from 'react-number-format';

const sharedStyles = {
  mt: 1.5,
  
}


const SpentModal = ({ modal, handleClose, handleChange, onSend, calendarDate }) => {
    const { open, category, description, amount } = modal;

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
            p: 4,
            borderRadius: 3
          }}
        >
          <Typography variant="h7">{utils.dateFormat(calendarDate)}</Typography>
          
          <FormControl fullWidth sx={{ ...sharedStyles  }}>
            <InputLabel id="category-label">Categoria</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              value={category}
              label="category"
              name="category"
              onChange={handleChange}
            >
              <MenuItem value={1}>Alimentação</MenuItem>
              <MenuItem value={2}>Viagem</MenuItem>
              <MenuItem value={4}>Produtos</MenuItem>
            </Select>
          </FormControl>
  
          

          <FormControl fullWidth sx={{ ...sharedStyles  }}>
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
              name="amount"
              onChange={handleChange}
              value={amount}
            />
          </FormControl>

          <TextField
            fullWidth
            multiline
            minRows={2}
            id="outlined-basic"
            label="Descrição"
            variant="outlined"
            name="description"
            sx={ {...sharedStyles}  }
            
            onChange={handleChange}
            value={description}
          />
  
          <Button onClick={onSend}>Salvar</Button>
        </Box>
      </Modal>
    );
  };

export default SpentModal;