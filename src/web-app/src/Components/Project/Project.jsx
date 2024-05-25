import React, { useState, useEffect } from "react";
import { Button, Container, Paper, Toolbar, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import ptbr from "dayjs/locale/pt-br";
import { ptBR } from "@mui/x-date-pickers/locales";
import dayjs from "dayjs";
import SpentModal from "../Modals/SpentModal";
import ProjectHeader from "./ProjectHeader";
import SimpleAlert from "../Common/SimpleAlert";
import { postData, getData } from "../../Services/project.service";
import * as utils from "../../Utils/generic";
import Histories from "../History/Histories";
import HistoriesBalance from "../History/HistoriesBalance";

const alertDefault = {
  show: false,
  message: "",
  severity: "success",
};

const spentModalDefault = {
  open: false,
  category: null,
  description: "",
  amount: null,
};

const Project = ({ project }) => {
  const { name, budget, code, id } = project;

  const [calendarDate, setCalendarDate] = useState(dayjs(new Date()));
  const [spentModal, setSpentModal] = useState(spentModalDefault);
  const [histories, setHistories] = useState([]);
  const [historiesBalance, setHistoriesBalance] = useState([]);
  const [balance, setBalance] = useState(null);

  const [alert, setAlert] = useState(alertDefault);

  const handleChangeModal = (e) => {
    setSpentModal((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onCloseModal = () => {
    setSpentModal((prevState) => ({ ...prevState, open: false }));
  };

  const onShowModal = () => {
    setSpentModal((prevState) => ({ ...prevState, open: true }));
  };

  const onSend = async () => {
    try {
      const amount = spentModal.amount
      let amountFormat = amount.replace(/[^0-9\,-]+/g,"")
      amountFormat = amountFormat.replace(",", ".")
      
      var res = await postData("/HistoryRegister", {
        projectCode: code,
        categoryId: spentModal.category,
        description: spentModal.description,
        amount: amountFormat,
        date: utils.formatDateToIso(new Date(calendarDate["$d"])),
      });

      setAlert({ show: true, message: res, severity: "success" });
      getHistories();
    } catch (e) {
      setAlert({
        show: true,
        message: e?.request?.response,
        severity: "error",
      });
    } finally {
      setSpentModal(spentModalDefault);
      onCloseModal();
    }
  };

  const getHistories = async () => {
    try {
      const searchParams = new URLSearchParams();

      searchParams.append('id', id);

      const res = await getData(`/HistoryRegister?${searchParams}`);
      
      setHistories(res?.historyItems ?? []);
      setHistoriesBalance(res?.historiesBalance ?? []);
      setBalance(res?.finalBalance);

    } catch (e) {
      setAlert({
        show: true,
        message: e?.request?.response,
        severity: "error",
      });
    }
  }

  useEffect(() => {
    getHistories();
  }, [project]);

  return (
    <>
      <SpentModal
        modal={spentModal}
        handleClose={onCloseModal}
        handleChange={handleChangeModal}
        onSend={onSend}
        calendarDate={calendarDate}
      />

      <Toolbar sx={{ mt: 2 }} />

      <Paper elevation={4} sx={{ height: 400 }}>
        <Container maxWidth>
          <ProjectHeader name={name} budget={budget} balance={balance}/>

          <Grid container>
            <Grid item xs={4}>
              <Histories histories={histories} />
            </Grid>
            <Grid item xs={4}>
              <HistoriesBalance histories={historiesBalance}/>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  onClick={onShowModal}
                  variant="contained"
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  Adicionar
                </Button>
              </Box>

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
            </Grid>
          </Grid>
        </Container>
      </Paper>

      {alert.show && (
        <SimpleAlert message={alert.message} severity={alert.severity} />
      )}
    </>
  );
};

export default Project;
