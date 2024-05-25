import React, { useState, useEffect } from "react";
import Project from "./Project";
import AddProjectButton from "../Buttons/AddProjectButton";
import NewProjectModal from "../Modals/NewProjectModal";
import { getData } from "../../Services/project.service";
import { Toolbar } from "@mui/material";
import { postData } from "../../Services/project.service";
import SimpleAlert from "../Common/SimpleAlert";

const newProjectDefault = {
  id: null,
  name: "",
  budget: null,
  code: "",
};

const alertDefault = {
  show: false,
  message: "",
  severity: "success",
};

const ProjectContainer = () => {
  const [projects, setProjects] = useState([]);

  const [newProjectModal, setNewProjectModal] = useState(newProjectDefault);
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState(alertDefault);

  const toggleModal = () => setShowModal((prevState) => !prevState);

  const handleChange = (e) => {
    setNewProjectModal((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onCreateNewProject = async () => {
    try {
      setAlert(alertDefault);

      const budget = newProjectModal.budget
      let budgetFormat = budget.replace(/[^0-9\,-]+/g,"")
      budgetFormat = budgetFormat.replace(",", ".")

      var res = await postData("/Project", {
        code: newProjectModal.code,
        name: newProjectModal.name,
        budget: budgetFormat,
      });

      setAlert({ show: true, message: res, severity: "success" });

      getProducts();
    } catch (e) {
      console.error(e);

      setAlert({
        show: true,
        message: e?.request?.response ?? "Erro ao criar projeto",
        severity: "error",
      });
    } finally {
      toggleModal();
      setNewProjectModal(newProjectDefault);
    }
  };

  const getProducts = async () => {
    try {
      const res = await getData("/Project");

      setProjects(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {!!projects.length &&
        projects.map((project, key) => <Project key={key} project={project} />)}

      <Toolbar />

      <AddProjectButton onClick={toggleModal} />

      <NewProjectModal
        open={showModal}
        info={newProjectModal}
        handleChange={handleChange}
        handleClose={toggleModal}
        onSend={onCreateNewProject}
      />

      {alert.show && (
        <SimpleAlert message={alert.message} severity={alert.severity} />
      )}
    </>
  );
};

export default ProjectContainer;
