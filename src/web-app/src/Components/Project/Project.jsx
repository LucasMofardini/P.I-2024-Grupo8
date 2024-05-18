import React, { useState, useEffect } from "react";
import { Button, Container, Paper, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import ptbr from "dayjs/locale/pt-br";
import { ptBR } from "@mui/x-date-pickers/locales";
import dayjs from "dayjs";
import SpentModal from "../Modals/SpentModal";
import ProjectHeader from './ProjectHeader';

const Project = ({ project }) => {
    const { name, budget } = project;
  
    const [calendarDate, setCalendarDate] = useState(dayjs(new Date()));
    const [spentModal, setspentModal] = useState({
      open: false,
      category: null,
      description: "",
      amount: null
    });
  
    const handleChangeModal = (e) => {
      setspentModal((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }
  
    const onSend = () => {
      console.log(spentModal)

      const amount = spentModal.amount
      let amountFormat = amount.replace(/[^0-9\,-]+/g,"")
      amountFormat = amountFormat.replace(",", ".")
      console.log(amountFormat)

    }
  
    return (
      <>
        <SpentModal
          modal={spentModal}
          handleClose={() => {
            setspentModal((prevState) => ({ ...prevState, open: false }));
          }}
          handleChange={handleChangeModal}
          onSend={onSend}
          calendarDate={calendarDate}
        />

      <Toolbar sx={{ mt: 2 }} />

        <Paper elevation={4}>
          <Container maxWidth>
            <ProjectHeader name={name} budget={budget} />

            <Box>
              <Button
                onClick={() => {
                  setspentModal((prevState) => ({ ...prevState, open: true }));
                }}
                variant="contained"
              >
                Adicionar
              </Button>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  value={calendarDate}
                  onChange={(newValue) => setCalendarDate(newValue)}
                  adapterLocale={ptbr}
                  localeText={
                    ptBR.components.MuiLocalizationProvider.defaultProps
                      .localeText
                  }
                />
              </LocalizationProvider>
            </Box>
          </Container>
        </Paper>
      </>
    );
  };
  


export default Project;