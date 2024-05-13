import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import ptbr from 'dayjs/locale/pt-br';
import { ptBR } from '@mui/x-date-pickers/locales';
import dayjs from 'dayjs';

const projectsDefault = [{
    id: 1,
    name: 'São Paulo',
    budget: 50000.00
}]

const ProjectContainer = () => {
    const [projects, setProjects] = useState(projectsDefault);

    return (
      <>
        <Toolbar sx={{ marginTop: "10px" }} />
        {!!projects.length &&
          projects.map((project, key) => {
            return <Project key={key} project={project} />;
          })}
      </>
    );

}

const Project = ({ project }) => {
    const { name, budget } = project;

    const [calendarDate, setCalendarDate] = useState();
    
    useEffect(() => {
        console.log(calendarDate)
        console.log(typeof calendarDate)
        console.table(calendarDate)
        // console.log(calendarDate['$d'])
/*         console.log(new Date(calendarDate['$d']).getMonth())
 */    },[calendarDate]);

    return (
      <Container
        maxWidth
        sx={{
          background: "#e9bebe;",
          border: "1px solid black",
        }}
      >
        <ProjectHeader name={name} budget={budget} />

        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={calendarDate}
              onChange={(newValue) => setCalendarDate(newValue)}
              adapterLocale={ptbr}
              localeText={
                ptBR.components.MuiLocalizationProvider.defaultProps.localeText
              }
              defaultValue={dayjs("2024-05-12")}
            />
          </LocalizationProvider>

          {/* <Typography>{calendarDate && calendarDate.$d}</Typography> */}
        </Box>
      </Container>
    );
}

const ProjectHeader = ({ name, budget }) => {
    // Descobrir como colocar formato de currency (gabriel e jovi)

    let BRCurrency = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL', 
  });

    return(
        <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
            <Typography>Projeto {name} - {BRCurrency.format(budget)}</Typography>
        </Box>
    )
}

export default ProjectContainer;