import React, { useState, useEffect } from "react";
import Toolbar from "@mui/material/Toolbar";
import Project from "./Components/Project/Project";
import AddProjectButton from "./Components/Buttons/AddProjectButton";
import NewProjectModal from "./Components/Modals/NewProjectModal";

const projectsDefault = [
  {
    id: 1,
    name: "São Paulo",
    budget: 50000.0,
  },
];

const newProjectDefault = {
  name: '',
  budget: null
}

const ProjectContainer = () => {
  const [projects, setProjects] = useState(projectsDefault);

  const [newProjectModal, setNewProjectModal] = useState(newProjectDefault);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prevState => !prevState);

  
  const handleChange = (e) => {
    setNewProjectModal((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  
  const onCreateNewProject = () => {
    setProjects((prevState) => [
      ...prevState,
      {
        name: newProjectModal.name,
        budget: newProjectModal.budget,
      }
    ]);
  };

  return (
    <>
      {!!projects.length &&
        projects.map((project, key) => <Project key={key} project={project} />)}

      <AddProjectButton onClick={toggleModal} />

      <NewProjectModal
        open={showModal}
        info={newProjectModal}
        handleChange={handleChange}
        handleClose={toggleModal}
        onSend={onCreateNewProject}
      />
    </>
  );
};






export default ProjectContainer;
